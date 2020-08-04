import React, { useState } from 'react'

import { Logo } from '../icons'
import Modal from '../modal'
import LoginForm from './login-form'
import SignUpForm from './signup-form/signup-form'

import styles from './style.module.css'

function AuthModal({ screen = 'signup' }) {
  const [form, setForm] = useState(screen)

  return (
    <Modal>
      <div className={styles.authModal}>
        <Logo className={styles.logo} />

        {form === 'login' ? <LoginForm /> : <SignUpForm />}

        {form === 'login' ? (
          <p className={styles.authSwichMessage}>
            Don’t have an account?{' '}
            <a onClick={() => setForm('signup')}>Sign up</a>
          </p>
        ) : (
          <p className={styles.authSwichMessage}>
            Already have an account?{' '}
            <a onClick={() => setForm('login')}>Log in</a>
          </p>
        )}
      </div>
    </Modal>
  )
}

export default AuthModal