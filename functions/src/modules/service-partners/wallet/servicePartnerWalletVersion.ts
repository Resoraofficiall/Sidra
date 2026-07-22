export const CURRENT_SERVICE_PARTNER_WALLET_SCHEMA_VERSION = 1;

export const SERVICE_PARTNER_WALLET_MIGRATIONS = {

      1:{

           version:1,

     description:
     "Initial production wallet schema with payout engine, reconciliation, holds, analytics and
statement export.",

      },

};

export function latestWalletSchemaVersion(){

      return CURRENT_SERVICE_PARTNER_WALLET_SCHEMA_VERSION;

}


After this, only 5 production files remain (1096–1100) to complete the planned 1100-file Sydra
architecture.Great. These are the final production files of the planned architecture.
