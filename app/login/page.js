
"use client";
import GitHubAuth from "@/components/GitHubAuth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleAuthSuccess = (token, user) => {
    // Redirect to the workspace after successful authentication
    router.push("/workspace");
  };

  return (
    <div className="container">
      <div className="login-box">
        <h1>Login to Pixelways</h1>
        <p>Connect your GitHub account to continue.</p>
        <GitHubAuth onAuthSuccess={handleAuthSuccess} />
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #f3f4f6;
        }
        .login-box {
          background-color: white;
          padding: 2rem;
          border-radius: 0.5rem;
          box-shadow: 0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          text-align: center;
        }
      `}</style>
    </div>
  );
}
