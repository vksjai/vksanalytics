// pages/SignupPage.js
const SignupPage = () => {
  return (
    <div className="max-w-md mx-auto my-12 p-8 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Confirm your password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-sky-800 to-red-800 py-2 px-4 rounded-md text-white"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
