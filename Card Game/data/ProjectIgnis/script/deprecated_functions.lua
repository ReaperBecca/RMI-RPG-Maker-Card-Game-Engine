local function deprecated_alias(funcname)
	return function(...)
		Debug.PrintStacktrace()
		Debug.Message("deprecated, use " .. funcname .. " instead")
		return load('return ' .. funcname .. '(...)')(...)
	end
end

--Functions deprecated since version 40.0:
Auxiliary.AskAny                        = deprecated_alias("Duel.AskAny")
Auxiliary.AskEveryone                   = deprecated_alias("Duel.AskEveryone")
Auxiliary.AnnounceAnotherAttribute      = deprecated_alias("Duel.AnnounceAnotherAttribute")
Auxiliary.AnnounceAnotherRace           = deprecated_alias("Duel.AnnounceAnotherRace")
Auxiliary.SelectEffect                  = deprecated_alias("Duel.SelectEffect")
Auxiliary.PlayFieldSpell                = deprecated_alias("Duel.ActivateFieldSpell")
Auxiliary.CheckPendulumZones            = deprecated_alias("Duel.CheckPendulumZones")
Auxiliary.nzatk                         = deprecated_alias("Card.HasNonZeroAttack")
Auxiliary.nzdef                         = deprecated_alias("Card.HasNonZeroDefense")
Auxiliary.disfilter1                    = deprecated_alias("Card.IsNegatableMonster")
Auxiliary.disfilter2                    = deprecated_alias("Card.IsNegatableSpellTrap")
Auxiliary.disfilter3                    = deprecated_alias("Card.IsNegatable")
Auxiliary.HasCounterListed              = deprecated_alias("Card.ListsCounter")
Auxiliary.CanPlaceCounter               = deprecated_alias("Card.PlacesCounter")
Auxiliary.EquipByEffectLimit            = deprecated_alias("Card.EquipByEffectLimit")
Auxiliary.EquipByEffectAndLimitRegister = deprecated_alias("Card.EquipByEffectAndLimitRegister")
Auxiliary.IsMaterialListCode            = deprecated_alias("Card.ListsCodeAsMaterial")
Auxiliary.IsMaterialListSetCard         = deprecated_alias("Card.ListsArchetypeAsMaterial")
Auxiliary.IsArchetypeCodeListed         = deprecated_alias("Card.ListsCodeWithArchetype")
Auxiliary.IsCodeListed                  = deprecated_alias("Card.ListsCode")
Auxiliary.IsCardTypeListed              = deprecated_alias("Card.ListsCardType")
Auxiliary.HasListedSetCode              = deprecated_alias("Card.ListsArchetype")
Auxiliary.IsGeminiState                 = deprecated_alias("Gemini.EffectStatusCondition")
Auxiliary.IsNotGeminiState              = deprecated_alias("Auxiliary.NOT(Gemini.EffectStatusCondition)")
Auxiliary.GeminiNormalCondition         = deprecated_alias("Gemini.NormalStatusCondition")
Auxiliary.EnableGeminiAttribute         = deprecated_alias("Gemini.AddProcedure")
Auxiliary.EnableSpiritReturn            = deprecated_alias("Spirit.AddProcedure")
Auxiliary.SpiritReturnReg               = deprecated_alias("Spirit.SummonRegister")
Auxiliary.SpiritReturnOperation         = deprecated_alias("Spirit.ReturnOperation")
Auxiliary.FilterFaceupFunction          = deprecated_alias("Auxiliary.FilterFaceup")

local function deleted_function(message)
	return function() error("This function is deleted. " .. message,2) end
end
--Deleted functions
Auxiliary.CallToken             = deleted_function("Use Duel.LoadCardScript or Duel.LoadScript instead.")
Auxiliary.SpiritReturnCondition = deleted_function("Check Spirit.MandatoryReturnCondition and Spirit.OptionalReturnCondition for more details.")
Auxiliary.SpiritReturnTarget    = deleted_function("Check Spirit.MandatoryReturnTarget and Spirit.OptionalReturnTarget for more details.")