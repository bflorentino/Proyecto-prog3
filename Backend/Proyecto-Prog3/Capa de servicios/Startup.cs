using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Capa_de_servicios.Servicios;
using Capa_de_servicios.Common;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Capa_de_datos;

namespace Capa_de_servicios
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Capa_de_servicios", Version = "v1" });
            });

            services.AddCors(opt => opt.AddPolicy("WebConnection", build => build
                                                                                                  .AllowAnyMethod()
                                                                                                  .AllowAnyHeader()
                                                                                                  .AllowAnyOrigin()));
            //inyeccion de dependencias
            services.AddScoped<ILibroServices, LibrosServices>();
            services.AddScoped<IUserServices, UserServices>();
            services.AddScoped<IClienteServices, ClienteServices>();
            services.AddDbContext<E_CommerceContext>();
            services.AddScoped<IAlmacenamientoServices, AlmacenamientoServices>();
            services.AddHttpContextAccessor();
            

            services.AddControllers();

            var appSettingsSection = Configuration.GetSection("AppSettings");
            services.Configure<Appsetings>(appSettingsSection);
          

            //JWT
            var appSettings = appSettingsSection.Get<Appsetings>();
            var llave = Encoding.ASCII.GetBytes(appSettings.secreto);
            services.AddAuthentication(d =>
            {

                d.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                d.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;



            })
                .AddJwtBearer(d=> {

                    d.RequireHttpsMetadata = false;
                    d.SaveToken = true;
                    d.TokenValidationParameters = new TokenValidationParameters
                    {

                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(llave),
                        ValidateIssuer = false,
                        ValidateAudience = false

                    };
                }) ;



            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Capa_de_servicios v1"));
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();
            app.UseCors("WebConnection");
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
