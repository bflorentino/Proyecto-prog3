import { React, useState, useEffect } from "react"

export const ToTopButton = () => {

    const [isVisable, setIsVisable] = useState(false);

    const classNames = (...classes) => {
        return classes.filter(Boolean).join('');
    }

    const toggleVisibility = () => {
        if(window.pageYOffset >= 300){
            setIsVisable(true);
        }else{
            setIsVisable(false);
        };
    }

    const scrollToTop = () => {
        var scrool = document.documentElement.scrollTop;
        console.log(scrool);
        // window.scrollTo(0, 0);

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return(
        <div className="fixed bottom-2 right-2">
            <button type="button" aria-hidden="true" onClick={scrollToTop} className={classNames(
                isVisable ? 'opacity-100' : 'opacity-0',
                'h-2 inline-flex items-center p-3 rounded-full shadow-sm text-white bg-blue-top-buttom transition-opacity hover:menu-footer focus:outline-none focus:ring-2 focus:ring-offset-2'
            )}>
                <ion-icon name="caret-up-circle-outline"></ion-icon>
                
            </button>
        </div>
    )
}