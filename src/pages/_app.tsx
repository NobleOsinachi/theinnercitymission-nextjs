import Link from "next/link";
import Image from "next/image";
import "../styles/global.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {

    const router = useRouter();

    return (
        <>
            <header>

                <h1>Elbon Concepts</h1>
                <nav className="header-nav">
                    <ul>
                        <li>
                            <Link className={router.pathname === "/" ? "active" : ""} href="/" >Home</Link>
                        </li>



                        <li>
                            <Link className={router.pathname === "/about" ? "active" : ""} href="/about" >About</Link>
                        </li>
                    </ul>

                </nav>

            </header>

            <Component {...pageProps} />

            <footer>

                <Image
                    src="/footer.png"
                    alt="website footer"
                    layout="responsive"
                    width={100}
                    height={100}
                />

            </footer>
        </>
    );
}
