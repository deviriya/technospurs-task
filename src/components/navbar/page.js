import React from 'react'

function Page() {
    return (
        <nav className="fixed top-0 z-50 w-full bg-black py-2">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start text-white rtl:justify-end">
                        <a href="#" className="flex ms-2 md:me-24 text-2xl font-bold">
                            <img src="https://technospurs.com/img/logo.svg" width={180} />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Page