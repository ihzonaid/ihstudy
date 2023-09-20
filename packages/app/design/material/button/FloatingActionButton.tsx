import { HeroOutline } from '@nandorojo/heroicons'
import clsx from 'clsx'
const FloatingActionButton = ({ type }: { type: string }) => {
  let buttonClasses = ''
  let iconClasses = ''

  switch (type) {
    case 'large':
      buttonClasses = 'w-24 h-24'
      iconClasses = 'w-9 h-9'
      break
    case 'extended':
      buttonClasses = 'h-14 p-4 pr-8 rounded-2xl'
      break
    case 'medium':
      buttonClasses = 'w-14 h-14'
      break
    case 'small':
      buttonClasses = 'w-10 h-10'
      break
    default:
      buttonClasses = 'w-14 h-14' // Default to 'medium' size
  }

  // <button className="fabs relative flex h-24 w-24 flex-row items-center justify-center gap-x-2 overflow-hidden rounded-[28px] bg-primary-100 p-2 text-sm font-medium tracking-[.00714em] shadow-xl dark:bg-primary-700 dark:text-primary-100">
  return (
    <button
      className={clsx(
        'fabs relative flex flex-row items-center justify-center gap-x-2 overflow-hidden rounded-xl bg-primary-100 p-2 text-sm font-medium tracking-[.00714em] shadow-lg dark:bg-primary-700 dark:text-primary-100',
        buttonClasses
      )}
    >
      {/* <span className="material-symbols-outlined !text-lg">edit</span> */}
      <HeroOutline.Pencil className={iconClasses} />
      {type == 'extended' && <p>Compose</p>}
    </button>
  )
}

export default FloatingActionButton
