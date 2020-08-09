import Link from "next/link"
import { logout } from "../utils/auth"

const Header = (props) => (
	<header>
		<nav>
			<ul>
				<li>
					<Link href="/">
						<button>Home</button>
					</Link>
				</li>
				<li>
					<Link href="/login">
						<button>Login</button>
					</Link>
				</li>
				<li>
					<Link href="/signup">
						<button>Signup</button>
					</Link>
				</li>
				<li>
					<Link href="/profile">
						<button>Profile</button>
					</Link>
				</li>
				<li>
					<button onClick={logout}>Logout</button>
				</li>
			</ul>
		</nav>
		<style jsx>{`
			ul {
				display: flex;
				list-style: none;
				margin-left: 0;
				padding-left: 0;
			}
			li {
				margin-right: 1rem;
			}
			li:first-child {
				margin-left: auto;
			}
			a {
				color: #fff;
				text-decoration: none;
			}
			header {
				padding: 0.2rem;
				color: #fff;
				background-color: #333;
			}
		`}</style>
	</header>
)

export default Header
