import { Footer } from './layout/footer';
import { Header } from './layout/header';
import { Main } from './layout/main';

export const Root = () => (
    <div className="flex min-h-screen flex-col bg-linear-to-br from-purple-400 to-pink-400 p-8">
        <title>Daniëlle Huisman</title>

        <Header />

        <Main />

        <Footer />
    </div>
);
