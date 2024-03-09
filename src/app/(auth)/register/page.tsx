import RegisterForm from "./components/RegisterForm";

const RegisterPage = () => {
    return (
        <div className=''>
            <h3 className='text-xl md:text-4xl uppercase font-semibold text-center my-6'>
                Join <span className='text-primaryCol'>Barber Voyage</span> Today!
            </h3>
            <div>
                <RegisterForm />
            </div>
        </div>
    );
};

export default RegisterPage;