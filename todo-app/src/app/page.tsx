import { ThemeToggle } from '@/components/theme-toggle';
import DevDaphInput from "@/components/shared-components/input";
import DevDaphButton from "@/components/shared-components/button";
import DevDaphNavbar from "@/components/shared-components/nav-bar";

export default function Home() {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
        <h1 className="text-4xl font-bold">Welcome to My Themed App!</h1>
        <p>This app supports light and dark themes.</p>
        <ThemeToggle />

          {/*<DevDaphNavbar />*/}
          {/*<DevDaphButton onClick={() => alert('Button clicked!')}>Click Me</DevDaphButton>*/}
          {/*<DevDaphInput type="text" placeholder="Enter text" value="" onChange={() => {}} />*/}
      </div>
  );
}
