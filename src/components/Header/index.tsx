'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from "next-auth/react";
import Image from 'next/image';

export const Header = () => {
  const pathName = usePathname();
  const session = useSession();
  const [modal, setModal] = useState(false);

  const authenticated = session.status === 'authenticated';
  const navigation = [
    { href: '/', title: 'Home' },
    { href: '/code-editor', title: 'Side Builder', auth: true },
    { href: '/scheduled-events', title: 'Scheduled Events', auth: true  },
    { href: '/washee', title: 'Washee', auth: true  },
  ];

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container container-fluid">
          <Link className="navbar-brand" href={'/'}>Logo</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navigation.map(el => {
                const isActive = el.href === pathName;

                return el.auth && authenticated && (
                  <li className="nav-item" key={el.href}>
                    <Link className={`nav-link ${isActive && 'active'}`} href={el.href}>
                      {el.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <div className="d-flex">
              {authenticated ? (
                <div className="_relative">
                  <div className="_w-10 _h-10 _rounded-full _truncate _cursor-pointer" onClick={() => setModal(m => !m)}>
                    <Image
                      src={session.data?.user?.image!}
                      className="card-img-top"
                      width={40}
                      height={40}
                      alt="..."
                    />
                  </div>
                  {modal && (
                    <div className="_absolute _top-11 _right-5">
                      <div className="bg-body list-group">
                        <button
                          type="button"
                          className="list-group-item list-group-item-action"
                          onClick={() => signOut({ callbackUrl: '/' })}
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link className="btn btn-outline-danger" href={'/api/auth/signin'}>Log In</Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
};
