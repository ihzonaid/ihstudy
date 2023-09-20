export default function ElevatedDisabledFunction() {
  return (
    <button
      className="btn relative flex flex-row items-center justify-center gap-x-2 rounded-[6.25rem] px-6 py-2.5 text-sm font-medium tracking-[.00714em] hover:shadow-md"
      disabled={true}
    >
      <span className="material-symbols-outlined">add</span>
      Disabled
    </button>
  )
}
