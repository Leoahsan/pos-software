import { useState } from 'react';
import { useRouter } from 'next/router';
import { useStoreActions } from 'easy-peasy';

const Login = () => {
	// use router
	const router = useRouter();

	// local state
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// global state
	const login = useStoreActions(({ auth }) => auth.login);

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login({ email, password });
		router.push('/home');
	};

	return (
		<div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">
			<div className="row w-100">
				<div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
					<div className="card shadow-lg p-4">
						<div className="text-center mb-4">
							<h2 className="mb-2">Welcome Back</h2>
							<p className="text-muted">Login to your account</p>
						</div>
						<form onSubmit={handleSubmit}>
							<div className="form-group mb-3">
								<label htmlFor="email">Email Address</label>
								<input
									type="email"
									className="form-control"
									id="email"
									placeholder="Enter your email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
							<div className="form-group mb-3">
								<label htmlFor="password">Password</label>
								<input
									type="password"
									className="form-control"
									id="password"
									placeholder="Enter your password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
							</div>
							<div className="d-grid gap-2">
								<button type="submit" className="btn btn-primary btn-block">
									Login
								</button>
							</div>
							<div className="text-center mt-3">
								<small className="text-muted">
									Don&apos;t have an account? <a href="/signup">Sign up</a>
								</small>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
