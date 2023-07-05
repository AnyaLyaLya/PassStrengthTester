import { useState } from 'react';
import { PiEyeClosedLight, PiEyeLight } from 'react-icons/pi';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import cn from 'classnames';
import './passwordForm.scss';

export const PasswordForm = () => {
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const inputType = isVisible ? 'text' : 'password';

  const isValidLength = password.length >= 8;

  const letterPattern = /[а-яА-ЯЁёa-zA-Z]/;
  const digitPattern = /\d+/g;
  const specialCharacterPattern = /[^a-zA-Zа-яА-ЯЁёА-ЩЬЮЯЄІЇҐа-щьюяєіїґ0-9\s]+/;

  const containsLetters = letterPattern.test(password);
  const containsDigits = digitPattern.test(password);
  const containsSpecialCharacters = specialCharacterPattern.test(password);

  const isStrongPassword = 
    isValidLength &&  
    containsLetters && 
    containsDigits && 
    containsSpecialCharacters;

  const isMediumPassword = 
    isValidLength &&
    !isStrongPassword &&
    ((containsLetters && containsDigits) ||
    (containsDigits && containsSpecialCharacters) ||
    (containsLetters && containsSpecialCharacters));

  const isEasyPassword = password && !isStrongPassword && !isMediumPassword;

  const baseCn = 'pw-strength-bar__item';
  const success = () => toast.success("Great! Your password is strong and secure.");
  const warn = () => toast.warn("Your password could be stronger. Consider adding more complexity.");
  const error = () => toast.error("Your password is weak. Please choose a stronger password.");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isEasyPassword) {
      error();
    } else if (isMediumPassword) {
      warn();
    } else if (isStrongPassword) {
      success();
      setPassword('');
    }
  }

  return (
    <>
      <form action="submit" className="pw-form" onSubmit={handleSubmit}>
        <label htmlFor="password" className='pw-form__label'>Enter your password</label>
        <div className="pw-form__container">
          <input 
            type={inputType} 
            name='password'
            value={password}
            className="pw-form__input"
            onChange={(event) => setPassword(event.target.value.trim())}
          />

          <button className="pw-form__button" type='button' onClick={() => setIsVisible(!isVisible)}>
            {isVisible 
              ? <PiEyeLight size={20} color={"rgb(60, 116, 213)"} />
              : <PiEyeClosedLight size={20} color={"rgb(60, 116, 213)"} />
            }
          </button>
          <ToastContainer />
        </div>
      </form>

      <div className="pw-strength-bar">
        <div className={cn(
          baseCn,
          {[`${baseCn}--easy`]: isEasyPassword || (!isValidLength && password)},
          {[`${baseCn}--medium`]: isMediumPassword},
          {[`${baseCn}--strong`]: isStrongPassword},
        )}>
        </div>

        <div className={cn(
          baseCn,
          {[`${baseCn}--easy`]: !isValidLength && password},
          {[`${baseCn}--medium`]: isMediumPassword},
          {[`${baseCn}--strong`]: isStrongPassword},
        )}>
        </div>

        <div className={cn(
          baseCn,
          {[`${baseCn}--easy`]: !isValidLength && password},
          {[`${baseCn}--strong`]: isStrongPassword},
        )}>
        </div>
      </div>
    </>   
  );
}