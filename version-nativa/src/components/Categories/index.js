import "./index.scss"

export const Categories = () => {
    return(
        <div className="categories">
            <h1 className="title">Zapatillas</h1>
            <h2 className="sub-title">Filtrar</h2>
            <div class="categories-filter">
                <h3 className="categories-title">Categoría</h3>
                <ul className="categories-list" aria-label="Categoría">
                    <li>Zapatillas</li>
                    <li>Zapatos</li>
                    <li>Botas</li>
                    <li>Sandalias</li>
                    <li>Pantuflas</li>
                </ul>
                <h3 className="categories-title">Talle</h3>
                <ul className="categories-list" aria-label="Talle">
                    <li>36</li>
                    <li>38</li>
                    <li>40</li>
                    <li>42</li>
                    <li>44</li>
                </ul>
                <h3 className="categories-title">Color</h3>
                <ul className="categories-list" aria-label="Color">
                    <li>Amarillo</li>
                    <li>Negro</li>
                    <li>Verde</li>
                    <li>Azul</li>
                    <li>Blanco</li>
                </ul>
            </div>
        </div>
    )
}