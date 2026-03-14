export function Footer() {
  return (
    <footer className="flex items-center justify-center py-2 mt-12 border-t border-[var(--color-border)] text-[var(--color-muted-foreground)] text-sm">
      <p className="m-0">&copy; {new Date().getFullYear()} Tan Chong Yao. All rights reserved.</p>
    </footer>
  );
}
