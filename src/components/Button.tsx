type ButtonLinkProps = React.ComponentProps<"a"> & { variant?: "solid" | "outline" };

const styles = {
  solid: "bg-accent text-white hover:bg-accent-dark",
  outline: "border border-ink text-ink hover:bg-ink hover:text-cream",
};

export function ButtonLink({ variant = "solid", className = "", ...props }: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${styles[variant]} ${className}`}
      {...props}
    />
  );
}
