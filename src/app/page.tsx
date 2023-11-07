import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <div className="flex items-center justify-center">
        <Link href={"/cars"}>
          <Button className="bg-red-500 rounded-xl gap-2 relative -top-24  hover:bg-red-600 text-white flex items-center justify-center">
            Other Layout
            <ChevronRight />
          </Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
