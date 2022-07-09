import { Link } from 'react-router-dom';

const Navigation = () => {
    const cartstyle ={
        background : '#f59e0d',
        display: 'flex',
        padding: '6px 12px',
        borderRadius: '50px'
    }
    return (
        <>
            <nav className="container mx-auto flex items-center justify-between py-4">

                <Link to='/'>
                    <img style={{ height: 45 }} src="./images/logo.png" alt="" />
                </Link>
                <ul className="flex ">
                    <li className="">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="ml-6">
                        <Link to='/products'>Products</Link>
                    </li>
                    <li className="ml-6">
                        <Link to='/Cart'>
                            <div className="flex" style={cartstyle}>
                                <span className='text-black'>5</span>
                                <img className='ml-2 'src="/images/cart.png" alt="Cart-icon" />
                            </div>
                        </Link>
                    </li>

                </ul>

            </nav>

        </>
    )
}

export default Navigation;
