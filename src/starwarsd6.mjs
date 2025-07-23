
const MOD_NAME = 'starwarsd6-essentialcompanion-od6s';
const MENU_NAME = 'ConfigureOpenD6Options';
const PREF_STATE = 'ConfigState';

// When FoundryVTT performs its initialization phase, register or menu
Hooks.on('init', () => {
    game.settings.registerMenu(MOD_NAME, MENU_NAME, {
        restricted: true,
        name: 'starwarsd6.name',
        hint: 'starwarsd6.hint',
        label: 'starwarsd6.name',
        icon: 'fas fa-cog',
        type: ConfigureOpenD6Options
    });

    // This setting is not editable by the user. Instead it is just used to store the previous configure menu's state
    game.settings.register(MOD_NAME, PREF_STATE, {
        scope: 'world',
        config: false,
        type: Object,
        default: {}
    });
});


class ConfigureOpenD6Options extends FormApplication {
    static get defaultOptions() {
        return {
            ...super.defaultOptions,
            template: `modules/${MOD_NAME}/templates/config.hbs`,
            resizable: false,
            minimizable: false,
            editable: true,
            submitOnChange: false,
            submitOnClose: false,
            closeOnSubmit: true,
            width: 500,
            title: game.i18n.localize("starwarsd6.name")
        };
    }

    async _updateObject(event, formData) {
        // Save the form results so we can remember the user's previous option selections
        await game.settings.set(MOD_NAME, PREF_STATE, formData);
        // Perform the update for each option
        if (formData.labels) await this.updateLabels();
        if (formData.fields) await this.updateFields();
        if (formData.deadly) await this.updateDeadly();
        if (formData.rules) await this.updateRules();
        if (formData.rules1e) await this.updateRules1e();
    }

    async updateLabels() {
        await game.settings.set('od6s', 'customize_fate_points', game.i18n.localize('starwarsd6.customize_fate_points'));
        await game.settings.set('od6s', 'customize_fate_points_short', game.i18n.localize('starwarsd6.customize_fate_points_short'));
        await game.settings.set('od6s', 'customize_currency_label', game.i18n.localize('starwarsd6.customize_currency_label'));
        await game.settings.set('od6s', 'customize_vehicle_toughness', game.i18n.localize('starwarsd6.customize_vehicle_toughness'));
        await game.settings.set('od6s', 'customize_starship_toughness', game.i18n.localize('starwarsd6.customize_starship_toughness'));
        await game.settings.set('od6s', 'interstellar_drive_name', game.i18n.localize('starwarsd6.interstellar_drive_name'));
        await game.settings.set('od6s', 'customize_metaphysics_extranormal', game.i18n.localize('starwarsd6.customize_metaphysics_extranormal'));
        await game.settings.set('od6s', 'customize_manifestations', game.i18n.localize('starwarsd6.customize_manifestations'));
        await game.settings.set('od6s', 'customize_manifestation', game.i18n.localize('starwarsd6.customize_manifestation'));
        await game.settings.set('od6s', 'customize_metaphysics_name_short', game.i18n.localize('starwarsd6.customize_metaphysics_name_short'));
        await game.settings.set('od6s', 'customize_metaphysics_name', game.i18n.localize('starwarsd6.customize_metaphysics_name'));
        await game.settings.set('od6s', 'customize_metaphysics_skill_channel', game.i18n.localize('starwarsd6.customize_metaphysics_skill_channel'));
        await game.settings.set('od6s', 'customize_metaphysics_skill_sense', game.i18n.localize('starwarsd6.customize_metaphysics_skill_sense'));
        await game.settings.set('od6s', 'customize_metaphysics_skill_transform', game.i18n.localize('starwarsd6.customize_metaphysics_skill_transform'));
        await game.settings.set('od6s', 'customize_agility_name', game.i18n.localize('starwarsd6.customize_agility_name'));
        await game.settings.set('od6s', 'customize_agility_name_short', game.i18n.localize('starwarsd6.customize_agility_name_short'));
        await game.settings.set('od6s', 'customize_strength_name_short', game.i18n.localize('starwarsd6.customize_strength_name_short'));
        await game.settings.set('od6s', 'customize_mechanical_name_short', game.i18n.localize('starwarsd6.customize_mechanical_name_short'));
        await game.settings.set('od6s', 'customize_knowledge_name_short', game.i18n.localize('starwarsd6.customize_knowledge_name_short'));
        await game.settings.set('od6s', 'customize_perception_name_short', game.i18n.localize('starwarsd6.customize_perception_name_short'));
        await game.settings.set('od6s', 'customize_technical_name_short', game.i18n.localize('starwarsd6.customize_technical_name_short'));
        await game.settings.set('od6s', 'customize_agility_name_short', game.i18n.localize('starwarsd6.customize_agility_name_short'));
        await game.settings.set('od6s', 'customize_agility_name_short', game.i18n.localize('starwarsd6.customize_agility_name_short'));
    }

    async updateFields() {
        await game.settings.set('od6s', 'custom_field_1', game.i18n.localize('starwarsd6.custom_field_1'));
        await game.settings.set('od6s', 'custom_field_1_short', game.i18n.localize('starwarsd6.custom_field_1_short'));
        await game.settings.set('od6s', 'custom_field_1_type', game.i18n.localize('starwarsd6.custom_field_1_type'));
        await game.settings.set('od6s', 'custom_field_1_actor_types', 3);
    }

    async updateDeadly() {
        await game.settings.set('od6s', 'deadliness', 3);
        await game.settings.set('od6s', 'npc-deadliness', 3);
        await game.settings.set('od6s', 'creature-deadliness', 3);
    }

    async updateRules() {
        await game.settings.set('od6s', 'hide_advantages_disadvantages', true);
        await game.settings.set('od6s', 'hide_compendia', true);
        await game.settings.set('od6s', 'bodypoints', 0);
        await game.settings.set('od6s', 'highhitdamage', false);
        await game.settings.set('od6s', 'brawl_attribute', game.i18n.localize('starwarsd6.brawl_attribute'));
        await game.settings.set('od6s', 'parry_skills', true);
        await game.settings.set('od6s', 'reaction_skills', true);
        await game.settings.set('od6s', 'defense_lock', true);
        await game.settings.set('od6s', 'fate_point_round', true);
        await game.settings.set('od6s', 'fate_point_climactic', true);
        await game.settings.set('od6s', 'strength_damage', true);
        await game.settings.set('od6s', 'metaphysics_attribute_optional', true);
        await game.settings.set('od6s', 'dice_for_scale', true);
        await game.settings.set('od6s', 'sensors', true);
        await game.settings.set('od6s', 'vehicle_difficulty', true);
        await game.settings.set('od6s', 'passenger_damage_dice', true);
        await game.settings.set('od6s', 'show_skill_specialization', true);
        await game.settings.set('od6s', 'dice_for_grenades', true);
        await game.settings.set('od6s', 'map_range_to_difficulty', true);
        await game.settings.set('od6s', 'melee_difficulty', true);
        await game.settings.set('od6s', 'random_hit_locations', true);
        await game.settings.set('od6s', 'pip_per_dice', 3);
        await game.settings.set('od6s', 'flat_skills', false);
        await game.settings.set('od6s', 'pip_per_dice', 3);
    }
}
