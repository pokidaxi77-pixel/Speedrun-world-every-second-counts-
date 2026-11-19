
// SPEEDRUN WORLD — DATABASE CONFIGURATION

const SPEEDRUN_CONFIG = {
    siteName: "Speedrun World",
    tagline: "Every Second Counts.",

    // Add your Supabase project details here later.
    supabaseUrl: "",
    supabaseAnonKey: "",

    // Website settings
    settings: {
        allowPlayerLogin: false,
        allowGuestSubmissions: true,
        requireVideoProof: true,
        manualApproval: true,
        showOnlyApprovedRuns: true
    }
};

// Check configuration
function isDatabaseConfigured() {
    return Boolean(
        SPEEDRUN_CONFIG.supabaseUrl &&
        SPEEDRUN_CONFIG.supabaseAnonKey
    );
}

console.log(
    "Speedrun World:",
    isDatabaseConfigured()
        ? "Database settings found"
        : "Waiting for database settings"
);
