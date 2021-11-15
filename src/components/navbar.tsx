import React from "react";
import { FaGithub } from "react-icons/fa";
import { Container } from ".";

const Navbar: React.FC = () => {
  return (
    <nav className="py-10 border-b border-gray-900">
      <Container className="flex flex-row justify-between">
        <h1 className="font-mono text-2xl font-bold">VAR</h1>

        <div>
          <p className="text-gray-300">CPECGM | CPE-181</p>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
