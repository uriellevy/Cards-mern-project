import { useEffect } from 'react';
import { toast, ToastPosition } from 'react-toastify';


type ToastOptions = {
    position?: ToastPosition | undefined;
    autoClose?: number;
    hideProgressBar?: boolean;
    closeOnClick?: boolean;
    pauseOnHover?: boolean;
    draggable?: boolean;
    progress?: undefined;
    theme?: string;
};

type ShowToastFunction = (message: string, options?: ToastOptions) => void;

const useToastNotification = () => {
    const showToastSuccess: ShowToastFunction = (message: string, options = {}) => {
        toast.success(message, {
            position: options.position || "top-right",
            autoClose: options.autoClose || 2500,
            hideProgressBar: options.hideProgressBar ? options.hideProgressBar : false,
            closeOnClick: options.closeOnClick ? options.closeOnClick : true,
            pauseOnHover: options.pauseOnHover ? options.pauseOnHover : true,
            draggable: options.draggable ? options.draggable : true,
            progress: options.progress ? options.progress : undefined,
            theme: options.theme || "light",
        });
    };
    const showToastError: ShowToastFunction = (message: string, options = {}) => {
        toast.error(message, {
            position: options.position || "top-right",
            autoClose: options.autoClose || 5000,
            hideProgressBar: options.hideProgressBar ? options.hideProgressBar : false,
            closeOnClick: options.closeOnClick ? options.closeOnClick : true,
            pauseOnHover: options.pauseOnHover ? options.pauseOnHover : true,
            draggable: options.draggable ? options.draggable : true,
            progress: options.progress ? options.progress : undefined,
            theme: options.theme || "light",
        });
    };

    // Optionally, you can add cleanup logic here if needed
    useEffect(() => {
        return () => {
            // Cleanup code if necessary
        };
    }, []);

    return {showToastSuccess, showToastError};
};

export default useToastNotification;