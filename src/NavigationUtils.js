class NavigationUtils {
    static navigateTo(navigate, path, state = {}) {
        navigate(path, { state }); // מבצע ניווט לנתיב עם state שניתן
    }

    static scrollToRef(ref) {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

export default NavigationUtils;
