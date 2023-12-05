import RegisterModal from "../components/register/registerModal";

const RegisterLayout: React.FC = () => {

    return(
        <div className="w-screen h-screen flex flex-col">
            <RegisterModal/>
            <div className="flex mx-auto p-4 text-gray-400">
                <p>Sean Preston - 2023 - GitHub</p>
            </div>
        </div>
    )

}

export default RegisterLayout;