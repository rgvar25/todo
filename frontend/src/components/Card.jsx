


export default function Card({ title, description, completed }) {


    return (
        <>
            <div className=" flex w-1/6 h-1/4 flex-col bg-red-400 text-white font-semibold
            ">
                <h1 className=" my-4 text-lg  text-center">{title}</h1>
                <p className=" text-sm mx-4">{description}</p>
            </div>
        </>
    )
}