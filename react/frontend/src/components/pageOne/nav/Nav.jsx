import React from 'react'

function Nav() {
    const Nav = () => {
        return (
            <section className='nav-container'>
                <div className="section-logo">
                    <div className='nav-logo'>
                        <img src={"/Adobe Express - file.png"} alt="logo" />
                    </div>
                    <div className='nav-title'>
                        <h1>Skip Trace Data Finder</h1>
                    </div>
                </div>
                
                <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">
                
                    {/* <!-- Desktop Navigation Links --> */}
                    <div class="hidden md:flex md:items-center md:space-x-8">
                        <a href="#" class="font-semibold text-brand-blue border-b-2 border-brand-blue px-1 py-2 text-sm">Home</a>
                        <a href="#" class="text-brand-slate hover:text-brand-charcoal px-1 py-2 text-sm font-medium">Address Search</a>
                        <a href="#" class="text-brand-slate hover:text-brand-charcoal px-1 py-2 text-sm font-medium">Contact Search</a>
                        <a href="#" class="text-brand-slate hover:text-brand-charcoal px-1 py-2 text-sm font-medium">City Explorer</a>
                    </div>

                    {/* <!-- Login Button --> */}
                    <div class="hidden md:block">
                        <a href="#" class="inline-block bg-white border border-gray-300 text-brand-charcoal hover:bg-gray-50 font-semibold py-2 px-4 rounded-lg text-sm transition-colors">
                            Login
                        </a>
                    </div>

                    {/* <!-- Mobile Menu Button (optional, for future use) --> */}
                    <div class="md:hidden flex items-center">
                        <button class="text-brand-slate focus:outline-none">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        </button>
                    </div>
                </div>
            </nav>
            </section>
        )
    }
    
}

export default Nav