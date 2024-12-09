#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <sstream>
using namespace std;

// VENDOR DATA
struct Vendor {
    string name;
    string category;
    vector<string> specificServices;
    string location;
    float rating;
    string pricing;
};

// DISPLAY
void displayOptions(const vector<string>& options) {
    for (size_t i = 0; i < options.size(); ++i) {
        cout << i + 1 << ". " << options[i] << endl;
    }
}

// SURVEY
void collectPreferences(vector<string>& categories, vector<string>& services, string& priority, string& customerLocation) {
    vector<string> mainCategories = {
        "Nails", "Apparel", "Hair", "Clothing Alterations", "Jewelry", "Make-up", "Piercing"
    };

    cout << "Which services interest you? (Select by entering numbers, separated by spaces):\n";
    displayOptions(mainCategories);

    string input;
    getline(cin, input);

    // Parse selected categories
    istringstream iss(input);
    int choice;
    while (iss >> choice) {
        if (choice >= 1 && choice <= mainCategories.size()) {
            categories.push_back(mainCategories[choice - 1]);
        } else {
            cout << "Invalid choice: " << choice << ". Skipping.\n";
        }
    }

    // PROVIDED SERVICES
    for (const string& category : categories) {
        vector<string> specificServices;

        if (category == "Nails") {
            specificServices = {"Acrylics", "Gel", "Design", "General Maintenance"};
        } else if (category == "Apparel") {
            specificServices = {"Shoes", "Clothing", "Shirts", "Pants", "Accessories (Hats, scarfs, etc.)"};
        } else if (category == "Hair") {
            specificServices = {"Hair Cuts (Men)", "Hair Cuts (Women)", "Styling", "Braids", "Perms"};
        } else if (category == "Clothing Alterations") {
            specificServices = {"Alterations"};
        } else if (category == "Jewelry") {
            specificServices = {"Piercings", "Bracelets", "Necklaces"};
        } else if (category == "Make-up") {
            specificServices = {"Natural", "Glam", "Special Effects"};
        } else if (category == "Piercing") {
            specificServices = {"Ears", "Naval", "Nose", "Lip"};
        }

        cout << "What specific services are you looking for in " << category << "?\n";
        displayOptions(specificServices);

        getline(cin, input);
        iss.clear();
        iss.str(input);
        while (iss >> choice) {
            if (choice >= 1 && choice <= specificServices.size()) {
                services.push_back(category + " - " + specificServices[choice - 1]);
            } else {
                cout << "Invalid choice: " << choice << ". Skipping.\n";
            }
        }
    }

    cout << "What’s most important to you? (1. Vendor Location, 2. Low to High Pricing, 3. Ratings, 4. Service Match): ";
    getline(cin, priority);
    while (priority != "1" && priority != "2" && priority != "3" && priority != "4") {
        cout << "Invalid input. Please enter 1 for Vendor Location, 2 for Low to High Pricing, 3 for Ratings, or 4 for Service Match: ";
        getline(cin, priority);
    }

    if (priority == "1") {
        cout << "Enter your current location (e.g., North District, University Village, etc.): ";
        getline(cin, customerLocation);
    }
}

// PREFERENCE MATCHING
vector<vector<Vendor>> suggestTop3VendorsPerCategory(const vector<Vendor>& vendors, const vector<string>& categories, const vector<string>& services, const string& priority, const string& customerLocation) {
    vector<vector<Vendor>> topVendorsPerCategory;

    for (const string& category : categories) {
        vector<pair<Vendor, int>> vendorMatches;

        for (const Vendor& vendor : vendors) {
            if (vendor.category == category) {
                int matchCount = 0;
                for (const string& service : services) {
                    if (find(vendor.specificServices.begin(), vendor.specificServices.end(), service) != vendor.specificServices.end()) {
                        matchCount++;
                    }
                }
                vendorMatches.push_back(make_pair(vendor, matchCount));
            }
        }

        if (priority == "1") { 
            sort(vendorMatches.begin(), vendorMatches.end(), [&](const pair<Vendor, int>& a, const pair<Vendor, int>& b) {
                bool aInLocation = a.first.location == customerLocation;
                bool bInLocation = b.first.location == customerLocation;
                if (aInLocation != bInLocation) {
                    return aInLocation; // Vendors in customer's location come first
                }
                return a.first.location < b.first.location; // Default alphabetical order for remaining vendors
            });
        } else if (priority == "2") { 
            sort(vendorMatches.begin(), vendorMatches.end(), [](const pair<Vendor, int>& a, const pair<Vendor, int>& b) {
                return a.first.pricing < b.first.pricing; 
            });
        } else if (priority == "3") { 
            sort(vendorMatches.begin(), vendorMatches.end(), [](const pair<Vendor, int>& a, const pair<Vendor, int>& b) {
                return a.first.rating > b.first.rating;
            });
        } else if (priority == "4") { 
            sort(vendorMatches.begin(), vendorMatches.end(), [](const pair<Vendor, int>& a, const pair<Vendor, int>& b) {
                return a.second > b.second; 
            });
        }

        // Get top 3 vendors for this category
        vector<Vendor> topVendors;
        for (size_t i = 0; i < vendorMatches.size() && i < 3; ++i) {
            topVendors.push_back(vendorMatches[i].first);
        }

        if (!topVendors.empty()) {
            topVendorsPerCategory.push_back(topVendors);
        }
    }

    return topVendorsPerCategory;
}


int main() {
    // TEST
    vector<Vendor> vendors = {
        {"Beauty Nails", "Nails", {"Nails - Acrylics", "Nails - Gel"}, "North District", 4.8, "$$$"},
        {"Perfect Nails", "Nails", {"Nails - Design", "Nails - General Maintenance"}, "University Village", 4.5, "$$"},
        {"Hair Express", "Hair", {"Hair - Hair Cuts (Women)", "Hair - Styling"}, "University Village Towers", 4.6, "$$"},
        {"Men's Grooming", "Hair", {"Hair - Hair Cuts (Men)", "Hair - Perms"}, "North District", 4.4, "$$"},
        {"Braids and Beyond", "Hair", {"Hair - Braids"}, "Campus Corner", 4.7, "$"},
        {"AlterPro", "Clothing Alterations", {"Alterations - Alterations"}, "Glen Mor", 4.5, "$$"},
        {"Elegant Alterations", "Clothing Alterations", {"Alterations - Alterations"}, "Off Campus", 4.6, "$$"},
        {"Jewelry World", "Jewelry", {"Jewelry - Necklaces", "Jewelry - Bracelets"}, "Off Campus", 4.7, "$$$"},
        {"Shiny Things", "Jewelry", {"Jewelry - Bracelets", "Jewelry - Piercings"}, "North District", 4.5, "$"},
        {"Piercing Palace", "Piercing", {"Piercing - Ears", "Piercing - Nose"}, "North District", 4.3, "$"},
        {"Glam Makeup", "Make-up", {"Make-up - Glam", "Make-up - Natural"}, "Aberdeen-Inverness Dorms", 4.9, "$$$"},
        {"Special FX Makeup", "Make-up", {"Make-up - Special Effects"}, "Off Campus", 4.8, "$$"},
        {"Trendsetters", "Apparel", {"Apparel - Shoes", "Apparel - Clothing"}, "University Village", 4.2, "$$"},
        {"Fashion Fix", "Apparel", {"Apparel - Shirts", "Apparel - Pants"}, "Glen Mor", 4.4, "$$"},
        {"Accessory World", "Apparel", {"Apparel - Accessories (Hats, scarfs, etc.)"}, "North District", 4.5, "$"},
        {"Piercing Express", "Piercing", {"Piercing - Naval", "Piercing - Lip"}, "Campus Corner", 4.6, "$$"},
        {"Polished Jewelry", "Jewelry", {"Jewelry - Bracelets", "Jewelry - Necklaces"}, "Aberdeen-Inverness Dorms", 4.6, "$$"},
        {"Quick Alterations", "Clothing Alterations", {"Alterations - Alterations"}, "University Village Towers", 4.3, "$$"},
        {"Styling Perfection", "Hair", {"Hair - Hair Cuts (Women)", "Hair - Styling", "Hair - Braids"}, "Off Campus", 4.8, "$$$"},
        {"Full Glam Studio", "Make-up", {"Make-up - Glam", "Make-up - Natural", "Make-up - Special Effects"}, "University Village", 4.9, "$$$"}
    };

    vector<string> categories, services;
    string priority, customerLocation;

    collectPreferences(categories, services, priority, customerLocation);

    vector<vector<Vendor>> suggestions = suggestTop3VendorsPerCategory(vendors, categories, services, priority, customerLocation);

    // OUTPUT
    cout << "\nRecommended Vendors (Top 3 per Category):\n";
    for (size_t i = 0; i < suggestions.size(); ++i) {
        cout << "Category: " << categories[i] << endl;
        for (const Vendor& vendor : suggestions[i]) {
            cout << "  Name: " << vendor.name
                 << ", Location: " << vendor.location
                 << ", Rating: " << vendor.rating
                 << ", Pricing: " << vendor.pricing
                 << ", Services: ";
            for (const string& service : vendor.specificServices) {
                cout << service << ", ";
            }
            cout << endl;
        }
    }

    return 0;
}