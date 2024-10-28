//=============================================================================
// SRD_Patch_1.js
//=============================================================================

/*:
 * @plugindesc A patch to make SRD_DynamicActors.js require SRD_CharacterCreatorEX.js instead of SRD_CharacterCreator.js
 * @author ReaperBecca
 *
 * @help
 * This plugin is a patch that modifies the dependency of SRD_DynamicActors.js.
 * It should be placed below SRD_DynamicActors.js in the plugin list.
 */

(function() {
    // Check if SRD_DynamicActors is loaded
    if (typeof SRD_DynamicActors !== 'undefined') {
        // Modify the dependencies
        SRD_DynamicActors.requiredPlugins = ['SRD_CharacterCreatorEX']

        // Override the isLoaded function to check for the new dependency
        SRD_DynamicActors.isLoaded = function() {
            return typeof SRD_CharacterCreatorEX !== 'undefined'
        }

        // Log the change
        console.log('SRD_DynamicActors dependency updated to SRD_CharacterCreatorEX')
    } else {
        console.error('SRD_DynamicActors is not loaded. This patch cannot be applied.')
    }
})()
// Extend the patch to adapt SRD_DynamicActors to use SRD_CharacterCreatorEX
(function() {
    if (typeof SRD_DynamicActors !== 'undefined' && typeof SRD_CharacterCreatorEX !== 'undefined') {
        // Override the createCharacter function to use SRD_CharacterCreatorEX
        SRD_DynamicActors.createCharacter = function(characterData) {
            return SRD_CharacterCreatorEX.createCharacter(characterData)
        }

        // Override the loadCharacter function to use SRD_CharacterCreatorEX
        SRD_DynamicActors.loadCharacter = function(characterId) {
            return SRD_CharacterCreatorEX.loadCharacter(characterId)
        }

        // Override the saveCharacter function to use SRD_CharacterCreatorEX
        SRD_DynamicActors.saveCharacter = function(characterData) {
            SRD_CharacterCreatorEX.saveCharacter(characterData)
        }

        // Override any other functions that might need adaptation
        // For example, if there's a function to update character appearance:
        if (SRD_DynamicActors.updateCharacterAppearance) {
            SRD_DynamicActors.updateCharacterAppearance = function(characterId, newAppearanceData) {
                SRD_CharacterCreatorEX.updateCharacterAppearance(characterId, newAppearanceData)
            }
        }

        console.log('SRD_DynamicActors functions adapted to use SRD_CharacterCreatorEX')
    } else {
        console.error('Either SRD_DynamicActors or SRD_CharacterCreatorEX is not loaded. The adaptation cannot be applied.')
    }
})()
