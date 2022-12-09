import React from 'react'

const SubmitEmail = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Email sent')
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="flex w-full gap-4 pr-12">
                <input
                    type="text"
                    placeholder="example@email.com"
                    className="h-16 text-black indent-6 w-full flex-4 rounded-xl"
                />
                <button
                    type="submit"
                    className="bg-white text-black p-4 pl-8 pr-8 flex-1 rounded-xl"
                >
                    Subscribe
                </button>
            </form>
        </>
    )
}

const Newsletter = () => {
    return (
        <div className="flex min-h-[16rem]">
            <div className="flex flex-3 bg-black justify-center items-center">
                <div className="flex flex-1 gap-8">
                    <div className="text-4xl flex-1">
                        <h2 className="ml-auto w-64">Subscribe To Our Newsletter</h2>
                    </div>

                    <div className="flex flex-2 items-center">
                        <SubmitEmail />
                    </div>
                </div>
            </div>

            <div className="flex flex-1 bg-[#171719]"></div>
        </div>
    )
}

export default Newsletter
