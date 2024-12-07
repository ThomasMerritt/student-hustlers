#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <sstream>
using namespace std;

// Vendor struct to store vendor data
struct Vendor {
    string name;
    string category;
    string specificService;
    string location;
    float rating;
};

// Function to display options
void displayOptions(const vector<string>& options) {
    for (size_t i = 0; i < options.size(); ++i) {
        cout << i + 1 << ". " << options[i] << endl;
    }
}

// Function to collect user preferences
void collectPreferences(vector<string>& categories, vector<string>& services, string& priority) {
    vector<string> mainCategories = {
        "Nails", "Apparel", "Hair", "Clothing Alterations", "Jewelry", "Make-up", "Piercing"
    };

    cout << "Which services interest you? (Select by entering numbers, separated by spaces):\n";
    displayOptions(mainCategories);

    string input;
    getline(cin, input);
    istringstream iss(input);
    int choice;
    while (iss >> choice) {
        if (choice >= 1 && choice <= mainCategories.size()) {
            categories.push_back(mainCategories[choice - 1]);
        } else {
            cout << "Invalid choice: " << choice << ". Please select a valid option." << endl;
        }
    }

    // Collect specific services for selected categories
    for (const string& category : categories) { // Iterate through all selected categories
        if (category == "Nails") {
            vector<string> nailsServices = {"Acrylics", "Gel", "Design", "General Maintenance"};
            cout << "What specific services are you looking for in Nails?\n";
            displayOptions(nailsServices);
            getline(cin, input);
            iss.clear();
            iss.str(input);
            while (iss >> choice) {
                if (choice >= 1 && choice <= nailsServices.size()) {
                    services.push_back("Nails - " + nailsServices[choice - 1]);
                } else {
                    cout << "Invalid choice: " << choice << ". Please select a valid option." << endl;
                }
            }
        } else if (category == "Apparel") {
            vector<string> apparelServices = {"Shoes", "Clothing", "Shirts", "Pants", "Accessories (Hats, scarfs, etc.)"};
            cout << "What specific services are you looking for in Apparel?\n";
            displayOptions(apparelServices);
            getline(cin, input);
            iss.clear();
            iss.str(input);
            while (iss >> choice) {
                if (choice >= 1 && choice <= apparelServices.size()) {
                    services.push_back("Apparel - " + apparelServices[choice - 1]);
                } else {
                    cout << "Invalid choice: " << choice << ". Please select a valid option." << endl;
                }
            }
        } else if (category == "Hair") {
            vector<string> hairServices = {"Hair Cuts (Men)", "Hair Cuts (Women)", "Styling", "Braids", "Perms"};
            cout << "What specific services are you looking for in Hair?\n";
            displayOptions(hairServices);
            getline(cin, input);
            iss.clear();
            iss.str(input);
            while (iss >> choice) {
                if (choice >= 1 && choice <= hairServices.size()) {
                    services.push_back("Hair - " + hairServices[choice - 1]);
                } else {
                    cout << "Invalid choice: " << choice << ". Please select a valid option." << endl;
                }
            }
        } else if (category == "Clothing Alterations") {
            vector<string> alterationServices = {"Alterations"};
            cout << "What specific services are you looking for in Alterations?\n";
            displayOptions(alterationServices);
            getline(cin, input);
            iss.clear();
            iss.str(input);
            while (iss >> choice) {
                if (choice >= 1 && choice <= alterationServices.size()) {
                    services.push_back("Alterations - " + alterationServices[choice - 1]);
                } else {
                    cout << "Invalid choice: " << choice << ". Please select a valid option." << endl;
                }
            }
        } else if (category == "Jewelry") {
            vector<string> jewelryServices = {"Piercings", "Bracelets", "Necklaces"};
            cout << "What specific services are you looking for in Jewelry?\n";
            displayOptions(jewelryServices);
            getline(cin, input);
            iss.clear();
            iss.str(input);
            while (iss >> choice) {
                if (choice >= 1 && choice <= jewelryServices.size()) {
                    services.push_back("Jewelry - " + jewelryServices[choice - 1]);
                } else {
                    cout << "Invalid choice: " << choice << ". Please select a valid option." << endl;
                }
            }
        } else if (category == "Make-up") {
            vector<string> makeupServices = {"Natural", "Glam", "Special Effects"};
            cout << "What type of makeup would you be interested in getting?\n";
            displayOptions(makeupServices);
            getline(cin, input);
            iss.clear();
            iss.str(input);
            while (iss >> choice) {
                if (choice >= 1 && choice <= makeupServices.size()) {
                    services.push_back("Make-up - " + makeupServices[choice - 1]);
                } else {
                    cout << "Invalid choice: " << choice << ". Please select a valid option." << endl;
                }
            }
        } if (category == "Piercing") {
            vector<string> piercingServices = {"Ears", "Naval", "Nose", "Lip"};
            cout << "What specific services are you looking for in Piercing?\n";
            displayOptions(piercingServices);
            getline(cin, input);
            iss.clear();
            iss.str(input);
            while (iss >> choice) {
                if (choice >= 1 && choice <= piercingServices.size()) {
                    services.push_back("Piercing - " + piercingServices[choice - 1]);
                } else {
                    cout << "Invalid choice: " << choice << ". Please select a valid option." << endl;
                }
            }
        }
    }

    cout << "What’s most important to you? (1. Vendor Location, 2. Ratings): ";
    getline(cin, priority);
    while (priority != "1" && priority != "2") {
        cout << "Invalid input. Please enter 1 for Vendor Location or 2 for Ratings: ";
        getline(cin, priority);
    }
}


// Function to match vendors to preferences
vector<Vendor> suggestVendors(const vector<Vendor>& vendors, const vector<string>& services, const string& priority) {
    vector<Vendor> suggestions;

    // Filter vendors by services
    for (size_t i = 0; i < vendors.size(); ++i) {
        const Vendor& vendor = vendors[i];
        for (size_t j = 0; j < services.size(); ++j) {
            const string& service = services[j];
            if (vendor.specificService == service) {
                suggestions.push_back(vendor);
            }
        }
    }

    // Sort based on priority
    if (priority == "1") { // Location
        sort(suggestions.begin(), suggestions.end(), [](const Vendor& a, const Vendor& b) {
            return a.location < b.location;
        });
    } else if (priority == "2") { // Ratings
        sort(suggestions.begin(), suggestions.end(), [](const Vendor& a, const Vendor& b) {
            return a.rating > b.rating;
        });
    }

    return suggestions;
}

int main() {
    // Sample vendor data
    vector<Vendor> vendors;
    vendors.push_back({"Beauty Nails", "Nails", "Nails - Acrylics", "North District", 4.8});
    vendors.push_back({"Hair Express", "Hair", "Hair - Hair Cuts (Women)", "University Village Towers", 4.6});
    vendors.push_back({"AlterPro", "Clothing Alterations", "Alterations", "Glen Mor", 4.5});
    vendors.push_back({"Jewelry World", "Jewelry", "Jewelry - Necklaces", "{Off campus address}", 4.7});
    vendors.push_back({"Glam Makeup", "Make-up", "Make-up - Glam", "Aberdeen-Inverness Dorms", 4.9});

    vector<string> categories, services;
    string priority;

    // Collect user preferences
    collectPreferences(categories, services, priority);

    // Suggest vendors
    vector<Vendor> suggestions = suggestVendors(vendors, services, priority);

    // Display suggestions
    cout << "\nRecommended Vendors:\n";
    for (size_t i = 0; i < suggestions.size(); ++i) {
        const Vendor& vendor = suggestions[i];
        cout << "Name: " << vendor.name << ", Service: " << vendor.specificService
             << ", Location: " << vendor.location << ", Rating: " << vendor.rating << endl;
    }

    return 0;
}