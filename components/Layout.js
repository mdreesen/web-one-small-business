import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';

export default function Layout({ children }) {
    return (
        <>
            <Navigation />

            <main>{children}</main>
        </>
    )
}