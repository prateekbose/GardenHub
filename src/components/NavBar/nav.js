const NavBar = () => {
    return (
        <nav className="flex gap-4 justify-between my-6 mx-40 uppercase">
            <h1 className="font-bold text-xl">GardenHub</h1>
            <ul className="flex gap-6">
                <a href="#" className="cursor-pointer font-medium opacity-50 hover:opacity-100 transition-all duration-300"><li>Plants</li></a>
                <a href="#" className="cursor-pointer font-medium opacity-50 hover:opacity-100 transition-all duration-300"><li>Guides</li></a>
                <a href="#" className="cursor-pointer font-medium opacity-50 hover:opacity-100 transition-all duration-300"><li>About</li></a>
                <a href="#" className="cursor-pointer font-medium opacity-50 hover:opacity-100 transition-all duration-300"><li>Shop</li></a>
            </ul>
            <h1 className="cursor-pointer font-bold">Menu</h1>
        </nav>
    )
}

export default NavBar