const HeroSection = () => {
    return (
        <section className="h-screen my-6 mx-40 grid grid-cols-3 gap-6">
            <div className="h-3/4 col-span-2 p-6 flex flex-col justify-center gap-6 bg-center bg-cover" style={{backgroundImage: `url("./leaf.jpg")`}}>
                <h1 className="text-7xl text-white font-serif">Inspiring plants for your interior</h1>
                <p className="text-white text-2xl opacity-75">Welcome to Green Garden Flower bulbs,<br/>wholesale specialist in top quality flower bulbs.</p>
                <button className="bg-white text-black w-32 h-10 rounded-full font-medium">Shop Now</button>
            </div>
            <div className="h-3/4 col-span-1 p-6 bg-yellow-300 flex flex-col justify-center items-center gap-6">
                <h3 className="text-xl font-serif">FIELD NOTES</h3>
                <h1 className="text-5xl font-serif text-center">For Your Living Room</h1>
                <p className="text-center text-xl">It's tempting to gather armfuls of greenery when you visit a housesplant store and end up with a shopping basket resembling a miniature jungle. Slow down, take your time, choose each plant with care and start with just one.</p>
                <button className="bg-white text-black w-32 h-10 rounded-full font-medium">Read All</button>
            </div>
        </section>
    )
}

export default HeroSection