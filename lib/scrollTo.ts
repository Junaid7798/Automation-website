/**
 * Smoothly scrolls to a section by its ID.
 * Replaces jarring window.location.hash assignments.
 */
export const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
        // Fallback: set hash so the browser can still navigate
        window.location.hash = id;
    }
};
