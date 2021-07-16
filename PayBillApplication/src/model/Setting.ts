export interface ISetting {
  settingId: number;
  daAllowancePer: number;
  spclAllowancePer: number;
  daOnTrAllowancePer: number;
}

export class Setting implements ISetting {
  settingId: number;
  daAllowancePer: number;
  spclAllowancePer: number;
  daOnTrAllowancePer: number;
}
