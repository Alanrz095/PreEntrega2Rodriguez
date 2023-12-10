import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";



function App(){
    return(
        <div className="App">
            
            <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}/>
                    <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                    <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                    <Route path="*" element={<h4>404 PÁGINA NO ENCONTRADA</h4>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;