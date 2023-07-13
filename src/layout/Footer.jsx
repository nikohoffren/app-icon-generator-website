import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient py-4 mt-auto">
      <ul className="flex justify-center text-sm text-white">
        <li className="mx-2">
          <p>
            Copyright © 2023
            {' '}
            <a
              href="https://nikohoffren.com"
              target="blank"
              className="hover:text-blue-400"
            >
              Niko Hoffrén
            </a>
          </p>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
