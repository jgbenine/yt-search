var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define("apiConfig", ["require", "exports", "axios"], function (require, exports, axios_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.youtubeApi = void 0;
    axios_1 = __importDefault(axios_1);
    exports.youtubeApi = axios_1.default.create({
        baseURL: 'https://www.googleapis.com/youtube/v3',
        timeout: 5000,
        params: {
            key: 'AIzaSyC3rAdQsKtm5avJGgWtfmYaglWKL2Z2ODQ'
            // key: process.env.YOUTUBE_KEY,
        },
    });
});
define("modules/getVideos", ["require", "exports", "apiConfig"], function (require, exports, apiConfig_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GetVideos = GetVideos;
    function GetVideos() {
        return __awaiter(this, void 0, void 0, function () {
            var response, videos, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, apiConfig_1.youtubeApi.get("/videos", {
                                params: {
                                    part: "snippet, statistics",
                                    chart: "mostPopular",
                                    // chanelId: 'UCZxr48h7_qEXuM1imy6NcCg',
                                    maxResults: 20,
                                    regionCode: "BR",
                                    // type : "video",
                                },
                            })];
                    case 1:
                        response = _a.sent();
                        videos = response.data.items.map(function (item) { return ({
                            url: "https://www.youtube.com/watch?v=".concat(item.id),
                            title: item.snippet.title,
                            thumbnail: item.snippet.thumbnails.standard.url,
                            chanelTitle: item.snippet.channelTitle,
                            views: item.statistics.viewCount,
                        }); });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error("Erro ao buscar vídeos:", error_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
});
define("routes/videos", ["require", "exports", "express", "modules/getVideos"], function (require, exports, express_1, getVideos_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    express_1 = __importDefault(express_1);
    var router = express_1.default.Router();
    router.get('/videos', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var videos, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, getVideos_1.GetVideos)()];
                case 1:
                    videos = _a.sent();
                    res.json(videos);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    res.status(500).json({ error: error_2.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    exports.default = router;
});
define("server", ["require", "exports", "express", "routes/videos"], function (require, exports, express_2, videos_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    express_2 = __importDefault(express_2);
    videos_1 = __importDefault(videos_1);
    var app = (0, express_2.default)();
    var port = 3000;
    app.get('/', function (req, res) {
        res.send('Olá, mundo!');
    });
    app.use('/api', videos_1.default);
    app.listen(port, function () {
        console.log("Servidor rodando em http://localhost:".concat(port, "/"));
    });
});
