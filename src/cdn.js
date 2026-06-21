const CDN_BASE = "https://res.cloudinary.com/dcuthvguy/image/upload";

// Optimized transforms by use case
const LOGO = `${CDN_BASE}/q_auto,f_auto,w_200`;      // Small logo (40-80px display)
const HERO = `${CDN_BASE}/q_auto,f_auto,w_1920`;     // Full-screen hero background
const GALLERY = `${CDN_BASE}/q_auto,f_auto,w_1200`;  // Carousel + lightbox images

export const images = {
    logo: `${LOGO}/v1773791746/kendalbrook_homes_logo_dpdpjr.png`,
    heroBg: `${HERO}/v1773791747/web_cover_vy1zbt.jpg`,

    services: {
        s1: `${GALLERY}/v1773791748/services_1_rbk4ar.png`,
        s2: `${GALLERY}/v1773791750/services_2_jynmtb.png`,
        s3: `${GALLERY}/v1773791751/services_3_xpv0oc.png`,
        s4: `${GALLERY}/v1773791751/services_4_nkpm8m.png`,
        s5: `${GALLERY}/v1773791749/services_5_nvucri.png`,
        s6: `${GALLERY}/v1773791749/services_6_szqlnn.png`,
    },

    kitchens: {
        k1: `${GALLERY}/v1773791759/kitchen1_axer7t.png`,
        k2: `${GALLERY}/v1773791752/kitchen2_ml4zul.png`,
        k3: `${GALLERY}/v1773791748/kitchen3_bewbhl.png`,
    },

    bars: {
        b1: `${GALLERY}/v1773791749/bars1_tmph1y.png`,
        b2: `${GALLERY}/v1773791748/bars2_sek41e.png`,
        b3: `${GALLERY}/v1773791747/bars3_v7iihp.png`,
    },

    trim: {
        t1: `${GALLERY}/v1773791753/trim1_rgkyz0.png`,
        t2: `${GALLERY}/v1773791761/trim2_k3j6zi.png`,
        t3: `${GALLERY}/v1773791758/trim3_oxwzhf.png`,
        t4: `${GALLERY}/v1773791755/trim4_wzg0nf.png`,
        t5: `${GALLERY}/v1773791754/trim5_ihdjcb.png`,
        t6: `${GALLERY}/v1773791761/trim6_tdt8ci.png`,
        t7: `${GALLERY}/v1773791756/trim7_ntappc.png`,
        t8: `${GALLERY}/v1773791755/trim8_zeupo8.png`,
    },

    barns: {
        b1: `${GALLERY}/v1773791754/barn1_yxi6ei.png`,
        b2: `${GALLERY}/v1773791753/barn2_bdtrgw.png`,
        b3: `${GALLERY}/v1773791756/barn3_zukjsz.png`,
        b4: `${GALLERY}/v1773791758/barn4_vkyzrq.png`,
        b5: `${GALLERY}/v1773791752/barn5_juxbz5.png`,
        b6: `${GALLERY}/v1773791759/barn6_iiaytt.png`,
    },
};
