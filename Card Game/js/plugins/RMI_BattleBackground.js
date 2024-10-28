/*:
 * @plugindesc Adds various effects to the battle background.
 * @author ReaperBecca
 * @help
 * ===========================================================================
 * Introduction
 * ===========================================================================
 * This plugin adds customizable effects to the battle background,
 * enhancing the visual appeal of your battles.
 * 
 * ===========================================================================
 * How to Use
 * ===========================================================================
 * Install this plugin under RMI_Lib and and use the Pluggin Commands to either
 * temporarily or permanently change the background settings starting with the
 * player's next battle, or you can configure the parameters to adjust the 
 * effects to your liking and set a new default effect instead.
 * 
 * ===========================================================================
 * Terms of Use
 * ===========================================================================
 * Free for both commercial and non-commercial use, with credit to Reaper
 * Media Industries.
 * 
 * ===========================================================================
 * Changelog
 * ===========================================================================
 * Version 1.0:
 * - Initial release
 *
 * @param Blur Effect
 * @desc Enable or disable the blur effect (true/false)
 * @default true
 *
 * @param Blur Strength
 * @desc The strength of the blur effect (1-10)
 * @default 5
 *
 * @param Blur Quality
 * @desc The quality of the blur effect (low, medium, high)
 * @default medium
 *
 * @param Color Overlay
 * @desc Enable or disable the color overlay effect (true/false)
 * @default false
 *
 * @param Overlay Color
 * @desc The color of the overlay (hex code)
 * @default #000000
 *
 * @param Overlay Opacity
 * @desc The opacity of the color overlay (0-255)
 * @default 128
 *
 * @param Zoom Effect
 * @desc Enable or disable the zoom effect (true/false)
 * @default false
 *
 * @param Zoom Scale
 * @desc The scale of the zoom effect (1.0-2.0)
 * @default 1.2
 *
 * @param Required Assets
 * @desc The path to the folder containing the battle background images
 * @default img/RMI/background
 *
 * @param Use Layered Background
 * @desc Enable or disable the use of layered background images (true/false)
 * @default false
 *
 * @param Layer 1 Image
 * @desc The image file for the first background layer (leave empty for none)
 * @default 
 *
 * @param Layer 2 Image
 * @desc The image file for the second background layer (leave empty for none)
 * @default 
 *
 * @param Layer 3 Image
 * @desc The image file for the third background layer (leave empty for none)
 * @default 
 *
 * @param Layer 4 Image
 * @desc The image file for the fourth background layer (leave empty for none)
 * @default 
 *
 * @param Layer 5 Image
 * @desc The image file for the fifth background layer (leave empty for none)
 * @default 
 *
 */

(function() {
    "use strict"

    var parameters = PluginManager.parameters('RMI_BattleBackground')
    RMI.BattleBackground.blurEnabled = String(parameters['Blur Effect'] || 'true').toLowerCase() === 'true'
    RMI.BattleBackground.blurStrength = Number(parameters['Blur Strength'] || 5)
    RMI.BattleBackground.blurQuality = String(parameters['Blur Quality'] || 'medium')
    RMI.BattleBackground.colorOverlayEnabled = String(parameters['Color Overlay'] || 'false').toLowerCase() === 'true'
    RMI.BattleBackground.overlayColor = String(parameters['Overlay Color'] || '#000000')
    RMI.BattleBackground.overlayOpacity = Number(parameters['Overlay Opacity'] || 128)
    RMI.BattleBackground.zoomEnabled = String(parameters['Zoom Effect'] || 'false').toLowerCase() === 'true'
    RMI.BattleBackground.zoomScale = Number(parameters['Zoom Scale'] || 1.2)
    RMI.BattleBackground.requiredAssets = String(parameters['Required Assets'] || 'img/system/blur_shader').split(',')
    RMI.BattleBackground.useLayeredBackground = String(parameters['Use Layered Background'] || 'false').toLowerCase() === 'true'
    RMI.BattleBackground.layerImages = [
        String(parameters['Layer 1 Image'] || ''),
        String(parameters['Layer 2 Image'] || ''),
        String(parameters['Layer 3 Image'] || ''),
        String(parameters['Layer 4 Image'] || ''),
        String(parameters['Layer 5 Image'] || '')
    ]

    RMI.Lib.requirePlugin('RMI_Lib', '1.0.0')
})