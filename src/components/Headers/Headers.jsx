import profile from '../../assets/images/profile.png'

const Headers = () => {
    return (
        <header className='flex justify-between items-center p-4 border-b-2 max-w-7xl mx-auto'>
            <h1 className='font-bold text-3xl'>Knowledge Cafe </h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Headers;