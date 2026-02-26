module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/mock.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ideas",
    ()=>ideas,
    "recipes",
    ()=>recipes
]);
const recipes = [
    {
        id: "r1",
        title: "김치볶음밥",
        summary: "김치·파·햄을 충분히 볶고 반숙 계란으로 마무리.",
        imageUrl: "https://picsum.photos/seed/kimchi/1200/900",
        tags: [
            "한식",
            "밥"
        ],
        createdAt: new Date().toISOString()
    },
    {
        id: "r2",
        title: "버터 파스타",
        summary: "버터+마늘+간장 조합, 면 삶은 물로 농도 조절.",
        imageUrl: "https://picsum.photos/seed/pasta/1200/900",
        tags: [
            "양식",
            "면"
        ],
        createdAt: new Date(Date.now() - 86400000).toISOString()
    },
    {
        id: "r3",
        title: "연어 스테이크",
        summary: "겉은 바삭, 속은 촉촉. 레몬과 딜로 향 추가.",
        imageUrl: "https://picsum.photos/seed/salmon/1200/900",
        tags: [
            "양식",
            "생선"
        ],
        createdAt: new Date(Date.now() - 2 * 86400000).toISOString()
    }
];
const ideas = [
    {
        id: "i1",
        title: "포트폴리오 카드에 ‘오늘의 한 줄’",
        summary: "요리 감정/상황을 한 줄로 남기면 아카이브가 더 살아남.",
        tags: [
            "콘텐츠",
            "브랜딩"
        ],
        createdAt: new Date().toISOString(),
        relatedRecipeIds: [
            "r1"
        ]
    },
    {
        id: "i2",
        title: "‘재료 태그’로 자동 분류",
        summary: "재료 태그를 따로 두고 검색 정확도를 올리기.",
        tags: [
            "UX",
            "검색"
        ],
        createdAt: new Date(Date.now() - 3600_000).toISOString()
    }
];
}),
"[project]/app/ideas/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IdeasPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mock.ts [app-rsc] (ecmascript)");
;
;
function IdeasPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            maxWidth: 980,
            margin: "0 auto",
            padding: 20
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    marginTop: 0
                },
                children: "아이디어"
            }, void 0, false, {
                fileName: "[project]/app/ideas/page.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    opacity: 0.8,
                    marginBottom: 12
                },
                children: "요리에서 떠오른 생각들을 카드로 쌓아두기"
            }, void 0, false, {
                fileName: "[project]/app/ideas/page.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: 12
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ideas"].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            border: "1px solid #eee",
                            borderRadius: 16,
                            padding: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontWeight: 950,
                                    fontSize: 16
                                },
                                children: i.title
                            }, void 0, false, {
                                fileName: "[project]/app/ideas/page.tsx",
                                lineNumber: 12,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 6,
                                    opacity: 0.85
                                },
                                children: i.summary
                            }, void 0, false, {
                                fileName: "[project]/app/ideas/page.tsx",
                                lineNumber: 13,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 10,
                                    display: "flex",
                                    gap: 6,
                                    flexWrap: "wrap"
                                },
                                children: i.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 12,
                                            padding: "4px 8px",
                                            borderRadius: 999,
                                            background: "#f3f3f3"
                                        },
                                        children: [
                                            "#",
                                            t
                                        ]
                                    }, t, true, {
                                        fileName: "[project]/app/ideas/page.tsx",
                                        lineNumber: 16,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/ideas/page.tsx",
                                lineNumber: 14,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i.id, true, {
                        fileName: "[project]/app/ideas/page.tsx",
                        lineNumber: 11,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/ideas/page.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/ideas/page.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/ideas/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/ideas/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fee81532._.js.map