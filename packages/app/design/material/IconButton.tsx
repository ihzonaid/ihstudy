import { HeroOutline } from '@nandorojo/heroicons'
export function IconButton() {
  return (
    <button className="relative !inline-flex h-12 w-12 !items-center justify-center gap-x-2 rounded-[6.25rem] px-6 py-2.5 text-center text-sm font-medium tracking-[.00714em] hover:bg-surface-300 focus:bg-surface-400 dark:text-primary-200 dark:hover:bg-surfacedark-300 dark:focus:bg-surfacedark-400">
      <HeroOutline.Server stroke={'red'} width={24} />
    </button>
  )
}
