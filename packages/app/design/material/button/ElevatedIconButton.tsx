import { HeroOutline } from '@nandorojo/heroicons'
export default function ElevatedIconButton() {
  return (
    <button className="btn-elevated relative flex flex-row items-center justify-center gap-x-2 rounded-[6.25rem] bg-surface-100 px-6 py-2.5 text-sm font-medium tracking-[.00714em] text-primary-600 shadow-lg hover:bg-surface-200 focus:bg-surface-400 dark:bg-surfacedark-100 dark:text-primary-200 dark:hover:bg-surfacedark-200 dark:focus:bg-surfacedark-400">
      <HeroOutline.Plus />
      Icon
    </button>
  )
}
