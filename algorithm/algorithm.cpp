#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <sstream>
#include <unordered_map>
using namespace std;

// VENDOR DATA
struct Vendor {
    string name;
    string category;
    vector<string> specificServices;
    string location;
    float rating;
};

// DISPLAY
void displayOptions(const vector<string>& options) {
    for (size_t i = 0; i < options.size(); ++i) {
        cout << i + 1 << ". " << options[i] << endl;
    }
}

// SURVEY
void collectPreferences(vector<string>& categories, vector<string>& services, string& priority) {
    vector<string> mainCategories = {
        "Nails", "Apparel", "Hair", "Clothing Alterations", "Jewelry", "Make-up", "Piercing"
    };

    cout << "Which services interest you? (Select by entering numbers, separated by spaces):\n";
    displayOptions(mainCategories);

    string input;
    getline(cin, input);

    // Parse selected categories
    istringstream iss(input);
    vector<int> choices;
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

    cout << "What’s most important to you? (1. Vendor Location, 2. Ratings, 3. Service Match): ";
    getline(cin, priority);
    while (priority != "1" && priority != "2" && priority != "3") {
        cout << "Invalid input. Please enter 1 for Vendor Location, 2 for Ratings, or 3 for Service Match: ";
        getline(cin, priority);
    }
}

// PREFERENCE MATCHING
vector<Vendor> suggestVendors(const vector<Vendor>& vendors, const vector<string>& services, const string& priority) {
    vector<pair<Vendor, int>> vendorMatches;

    for (const Vendor& vendor : vendors) {
        int matchCount = 0;
        for (const string& service : services) {
            if (find(vendor.specificServices.begin(), vendor.specificServices.end(), service) != vendor.specificServices.end()) {
                matchCount++;
            }
        }
        vendorMatches.emplace_back(vendor, matchCount);
    }

    if (priority == "1") { // Location
        sort(vendorMatches.begin(), vendorMatches.end(), [](const pair<Vendor, int>& a, const pair<Vendor, int>& b) {
            return a.first.location < b.first.location;
        });
    } else if (priority == "2") { // Ratings
        sort(vendorMatches.begin(), vendorMatches.end(), [](const pair<Vendor, int>& a, const pair<Vendor, int>& b) {
            return a.first.rating > b.first.rating;
        });
    } else if (priority == "3") { // Service Match
        sort(vendorMatches.begin(), vendorMatches.end(), [](const pair<Vendor, int>& a, const pair<Vendor, int>& b) {
            return a.second > b.second; // More matches first
        });
    }

    vector<Vendor> suggestions;
    for (const auto& pair : vendorMatches) {
        if (pair.second > 0) { // Only include vendors with at least one match
            suggestions.push_back(pair.first);
        }
    }

    return suggestions;
}

int main() {
    // TEST
    vector<Vendor> vendors = {
        {"Beauty Nails", "Nails", {"Nails - Acrylics", "Nails - Gel"}, "North District", 4.8},
        {"Hair Express", "Hair", {"Hair - Hair Cuts (Women)", "Hair - Styling"}, "University Village Towers", 4.6},
        {"AlterPro", "Clothing Alterations", {"Alterations - Alterations"}, "Glen Mor", 4.5},
        {"Jewelry World", "Jewelry", {"Jewelry - Necklaces", "Jewelry - Bracelets"}, "Off Campus", 4.7},
        {"Glam Makeup", "Make-up", {"Make-up - Glam", "Make-up - Natural"}, "Aberdeen-Inverness Dorms", 4.9},
        {"Piercing Palace", "Piercing", {"Piercing - Ears", "Piercing - Nose"}, "North District", 4.3},
        {"Fashion Fix", "Apparel", {"Apparel - Shirts", "Apparel - Pants"}, "Glen Mor", 4.4},
        {"Style Studio", "Hair", {"Hair - Braids", "Hair - Perms"}, "University Village Towers", 4.2},
        {"Elegant Alterations", "Clothing Alterations", {"Alterations - Alterations"}, "Off Campus", 4.6},
        {"Shiny Things", "Jewelry", {"Jewelry - Bracelets", "Jewelry - Piercings"}, "North District", 4.5},
    };

    vector<string> categories, services;
    string priority;

   
    collectPreferences(categories, services, priority);

    vector<Vendor> suggestions = suggestVendors(vendors, services, priority);

    // OUTPUT
    cout << "\nRecommended Vendors:\n";
    for (const Vendor& vendor : suggestions) {
        cout << "Name: " << vendor.name
             << ", Location: " << vendor.location
             << ", Rating: " << vendor.rating
             << ", Services: ";
        for (const string& service : vendor.specificServices) {
            cout << service << ", ";
        }
        cout << endl;
    }

    return 0;
}
