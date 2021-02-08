import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/vendor/icofont/icofont.min.css';
import './assets/vendor/animate.css/animate.min.css';
import './assets/css/style.css';
import './App.css';
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {MainSectionComponent} from "./components/main-section/main-section.component";
import {Paginator} from "./components/paginator/paginator.component";

function App() {
    return (
        <>
            <HeaderComponent/>
            <MainSectionComponent/>
            <Paginator/>
            <FooterComponent/>
        </>
    );
}

export default App;
