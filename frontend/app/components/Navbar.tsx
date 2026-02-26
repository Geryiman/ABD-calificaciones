"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <Link href="/" style={{ fontWeight: pathname === "/" ? "bold" : "normal" }}>
        Inicio
      </Link>
    </nav>
  );
}