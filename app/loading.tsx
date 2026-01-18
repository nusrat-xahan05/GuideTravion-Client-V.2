import Logo from "@/assets/icons/Logo";

export default function Loading() {
    return (
        <div className="flex min-h-[70vh] items-center justify-center bg-[rgba(255,255,255,0.6)] font-body">
            <div className="flex flex-col items-center gap-3 text-center">

                {/* Logo */}
                <Logo></Logo>

                {/* Progress Bar */}
                <div className="h-1 w-56 overflow-hidden rounded-full bg-primary">
                    <div className="h-full w-1/2 animate-loading-bar rounded-full bg-secondary" />
                </div>

                {/* Loading Text */}
                <div className="mt-2.5">
                    <p className="text-base font-medium text-[rgba(0,43,17,0.7)]">
                        Preparing your journey
                    </p>
                </div>
            </div>
        </div>
    );
}