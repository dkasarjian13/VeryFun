!function(t) {
    var e = {};
    function n(r) {
        if (e[r])
            return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    n.m = t,
    n.c = e,
    n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(t, e) {
        if (1 & e && (t = n(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var i in t)
                n.d(r, i, function(e) {
                    return t[e]
                }
                .bind(null, i));
        return r
    }
    ,
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return n.d(e, "a", e),
        e
    }
    ,
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    n.p = "",
    n(n.s = 2)
}([function(t, e, n) {
    "use strict";
    function r() {}
    n.r(e),
    n.d(e, "ACESFilmicToneMapping", function() {
        return ht
    }),
    n.d(e, "AddEquation", function() {
        return O
    }),
    n.d(e, "AddOperation", function() {
        return it
    }),
    n.d(e, "AdditiveBlending", function() {
        return L
    }),
    n.d(e, "AlphaFormat", function() {
        return Ft
    }),
    n.d(e, "AlwaysDepth", function() {
        return J
    }),
    n.d(e, "AmbientLight", function() {
        return Nc
    }),
    n.d(e, "AmbientLightProbe", function() {
        return uu
    }),
    n.d(e, "AnimationClip", function() {
        return js
    }),
    n.d(e, "AnimationLoader", function() {
        return Qs
    }),
    n.d(e, "AnimationMixer", function() {
        return Bu
    }),
    n.d(e, "AnimationObjectGroup", function() {
        return Du
    }),
    n.d(e, "AnimationUtils", function() {
        return Cs
    }),
    n.d(e, "ArcCurve", function() {
        return ac
    }),
    n.d(e, "ArrayCamera", function() {
        return Aa
    }),
    n.d(e, "ArrowHelper", function() {
        return uh
    }),
    n.d(e, "Audio", function() {
        return pu
    }),
    n.d(e, "AudioAnalyser", function() {
        return mu
    }),
    n.d(e, "AudioContext", function() {
        return iu
    }),
    n.d(e, "AudioListener", function() {
        return du
    }),
    n.d(e, "AudioLoader", function() {
        return au
    }),
    n.d(e, "AxesHelper", function() {
        return hh
    }),
    n.d(e, "AxisHelper", function() {
        return Bh
    }),
    n.d(e, "BackSide", function() {
        return x
    }),
    n.d(e, "BasicDepthPacking", function() {
        return Ue
    }),
    n.d(e, "BasicShadowMap", function() {
        return m
    }),
    n.d(e, "BinaryTextureLoader", function() {
        return Hh
    }),
    n.d(e, "Bone", function() {
        return Ja
    }),
    n.d(e, "BooleanKeyframeTrack", function() {
        return zs
    }),
    n.d(e, "BoundingBoxHelper", function() {
        return zh
    }),
    n.d(e, "Box2", function() {
        return ju
    }),
    n.d(e, "Box3", function() {
        return Bn
    }),
    n.d(e, "Box3Helper", function() {
        return sh
    }),
    n.d(e, "BoxBufferGeometry", function() {
        return yr
    }),
    n.d(e, "BoxGeometry", function() {
        return vr
    }),
    n.d(e, "BoxHelper", function() {
        return oh
    }),
    n.d(e, "BufferAttribute", function() {
        return Kn
    }),
    n.d(e, "BufferGeometry", function() {
        return pr
    }),
    n.d(e, "BufferGeometryLoader", function() {
        return Hc
    }),
    n.d(e, "ByteType", function() {
        return Rt
    }),
    n.d(e, "Cache", function() {
        return qs
    }),
    n.d(e, "Camera", function() {
        return Sr
    }),
    n.d(e, "CameraHelper", function() {
        return ah
    }),
    n.d(e, "CanvasRenderer", function() {
        return kh
    }),
    n.d(e, "CanvasTexture", function() {
        return io
    }),
    n.d(e, "CatmullRomCurve3", function() {
        return lc
    }),
    n.d(e, "CineonToneMapping", function() {
        return ut
    }),
    n.d(e, "CircleBufferGeometry", function() {
        return ys
    }),
    n.d(e, "CircleGeometry", function() {
        return vs
    }),
    n.d(e, "ClampToEdgeWrapping", function() {
        return bt
    }),
    n.d(e, "Clock", function() {
        return lu
    }),
    n.d(e, "ClosedSplineCurve3", function() {
        return Ih
    }),
    n.d(e, "Color", function() {
        return jn
    }),
    n.d(e, "ColorKeyframeTrack", function() {
        return Us
    }),
    n.d(e, "CompressedTexture", function() {
        return ro
    }),
    n.d(e, "CompressedTextureLoader", function() {
        return Ks
    }),
    n.d(e, "ConeBufferGeometry", function() {
        return gs
    }),
    n.d(e, "ConeGeometry", function() {
        return ms
    }),
    n.d(e, "CubeCamera", function() {
        return Cr
    }),
    n.d(e, "CubeGeometry", function() {
        return vr
    }),
    n.d(e, "CubeReflectionMapping", function() {
        return dt
    }),
    n.d(e, "CubeRefractionMapping", function() {
        return pt
    }),
    n.d(e, "CubeTexture", function() {
        return ti
    }),
    n.d(e, "CubeTextureLoader", function() {
        return ec
    }),
    n.d(e, "CubeUVReflectionMapping", function() {
        return vt
    }),
    n.d(e, "CubeUVRefractionMapping", function() {
        return yt
    }),
    n.d(e, "CubicBezierCurve", function() {
        return mc
    }),
    n.d(e, "CubicBezierCurve3", function() {
        return gc
    }),
    n.d(e, "CubicInterpolant", function() {
        return Is
    }),
    n.d(e, "CullFaceBack", function() {
        return h
    }),
    n.d(e, "CullFaceFront", function() {
        return l
    }),
    n.d(e, "CullFaceFrontBack", function() {
        return d
    }),
    n.d(e, "CullFaceNone", function() {
        return u
    }),
    n.d(e, "Curve", function() {
        return rc
    }),
    n.d(e, "CurvePath", function() {
        return Mc
    }),
    n.d(e, "CustomBlending", function() {
        return C
    }),
    n.d(e, "CylinderBufferGeometry", function() {
        return fs
    }),
    n.d(e, "CylinderGeometry", function() {
        return ps
    }),
    n.d(e, "Cylindrical", function() {
        return ku
    }),
    n.d(e, "DataTexture", function() {
        return Ir
    }),
    n.d(e, "DataTexture2DArray", function() {
        return ei
    }),
    n.d(e, "DataTexture3D", function() {
        return ni
    }),
    n.d(e, "DataTextureLoader", function() {
        return $s
    }),
    n.d(e, "DefaultLoadingManager", function() {
        return Ys
    }),
    n.d(e, "DepthFormat", function() {
        return qt
    }),
    n.d(e, "DepthStencilFormat", function() {
        return Xt
    }),
    n.d(e, "DepthTexture", function() {
        return ao
    }),
    n.d(e, "DirectionalLight", function() {
        return Dc
    }),
    n.d(e, "DirectionalLightHelper", function() {
        return ih
    }),
    n.d(e, "DirectionalLightShadow", function() {
        return Ic
    }),
    n.d(e, "DiscreteInterpolant", function() {
        return Ns
    }),
    n.d(e, "DodecahedronBufferGeometry", function() {
        return xo
    }),
    n.d(e, "DodecahedronGeometry", function() {
        return yo
    }),
    n.d(e, "DoubleSide", function() {
        return b
    }),
    n.d(e, "DstAlphaFactor", function() {
        return k
    }),
    n.d(e, "DstColorFactor", function() {
        return W
    }),
    n.d(e, "DynamicBufferAttribute", function() {
        return Mh
    }),
    n.d(e, "EdgesGeometry", function() {
        return ds
    }),
    n.d(e, "EdgesHelper", function() {
        return Uh
    }),
    n.d(e, "EllipseCurve", function() {
        return ic
    }),
    n.d(e, "EqualDepth", function() {
        return K
    }),
    n.d(e, "EquirectangularReflectionMapping", function() {
        return ft
    }),
    n.d(e, "EquirectangularRefractionMapping", function() {
        return mt
    }),
    n.d(e, "Euler", function() {
        return ln
    }),
    n.d(e, "EventDispatcher", function() {
        return r
    }),
    n.d(e, "ExtrudeBufferGeometry", function() {
        return Ko
    }),
    n.d(e, "ExtrudeGeometry", function() {
        return Qo
    }),
    n.d(e, "Face3", function() {
        return Yn
    }),
    n.d(e, "Face4", function() {
        return lh
    }),
    n.d(e, "FaceColors", function() {
        return E
    }),
    n.d(e, "FaceNormalsHelper", function() {
        return rh
    }),
    n.d(e, "FileLoader", function() {
        return Zs
    }),
    n.d(e, "FlatShading", function() {
        return w
    }),
    n.d(e, "Float32Attribute", function() {
        return Ch
    }),
    n.d(e, "Float32BufferAttribute", function() {
        return or
    }),
    n.d(e, "Float64Attribute", function() {
        return Oh
    }),
    n.d(e, "Float64BufferAttribute", function() {
        return sr
    }),
    n.d(e, "FloatType", function() {
        return Dt
    }),
    n.d(e, "Fog", function() {
        return Ha
    }),
    n.d(e, "FogExp2", function() {
        return Fa
    }),
    n.d(e, "Font", function() {
        return tu
    }),
    n.d(e, "FontLoader", function() {
        return nu
    }),
    n.d(e, "FrontFaceDirectionCCW", function() {
        return f
    }),
    n.d(e, "FrontFaceDirectionCW", function() {
        return p
    }),
    n.d(e, "FrontSide", function() {
        return y
    }),
    n.d(e, "Frustum", function() {
        return Nr
    }),
    n.d(e, "GammaEncoding", function() {
        return Oe
    }),
    n.d(e, "Geometry", function() {
        return gr
    }),
    n.d(e, "GeometryUtils", function() {
        return Vh
    }),
    n.d(e, "GreaterDepth", function() {
        return tt
    }),
    n.d(e, "GreaterEqualDepth", function() {
        return $
    }),
    n.d(e, "GridHelper", function() {
        return th
    }),
    n.d(e, "Group", function() {
        return Ta
    }),
    n.d(e, "HalfFloatType", function() {
        return Nt
    }),
    n.d(e, "HemisphereLight", function() {
        return Ac
    }),
    n.d(e, "HemisphereLightHelper", function() {
        return Ku
    }),
    n.d(e, "HemisphereLightProbe", function() {
        return cu
    }),
    n.d(e, "IcosahedronBufferGeometry", function() {
        return vo
    }),
    n.d(e, "IcosahedronGeometry", function() {
        return go
    }),
    n.d(e, "ImageBitmapLoader", function() {
        return Kc
    }),
    n.d(e, "ImageLoader", function() {
        return tc
    }),
    n.d(e, "ImageUtils", function() {
        return rn
    }),
    n.d(e, "ImmediateRenderObject", function() {
        return qu
    }),
    n.d(e, "InstancedBufferAttribute", function() {
        return Fc
    }),
    n.d(e, "InstancedBufferGeometry", function() {
        return Gc
    }),
    n.d(e, "InstancedInterleavedBuffer", function() {
        return Uu
    }),
    n.d(e, "Int16Attribute", function() {
        return Ah
    }),
    n.d(e, "Int16BufferAttribute", function() {
        return nr
    }),
    n.d(e, "Int32Attribute", function() {
        return Rh
    }),
    n.d(e, "Int32BufferAttribute", function() {
        return ir
    }),
    n.d(e, "Int8Attribute", function() {
        return Eh
    }),
    n.d(e, "Int8BufferAttribute", function() {
        return $n
    }),
    n.d(e, "IntType", function() {
        return Ot
    }),
    n.d(e, "InterleavedBuffer", function() {
        return Va
    }),
    n.d(e, "InterleavedBufferAttribute", function() {
        return ka
    }),
    n.d(e, "Interpolant", function() {
        return Os
    }),
    n.d(e, "InterpolateDiscrete", function() {
        return we
    }),
    n.d(e, "InterpolateLinear", function() {
        return _e
    }),
    n.d(e, "InterpolateSmooth", function() {
        return Me
    }),
    n.d(e, "JSONLoader", function() {
        return jh
    }),
    n.d(e, "KeyframeTrack", function() {
        return Bs
    }),
    n.d(e, "LOD", function() {
        return qa
    }),
    n.d(e, "LatheBufferGeometry", function() {
        return cs
    }),
    n.d(e, "LatheGeometry", function() {
        return ss
    }),
    n.d(e, "Layers", function() {
        return dn
    }),
    n.d(e, "LensFlare", function() {
        return qh
    }),
    n.d(e, "LessDepth", function() {
        return Z
    }),
    n.d(e, "LessEqualDepth", function() {
        return Q
    }),
    n.d(e, "Light", function() {
        return Tc
    }),
    n.d(e, "LightProbe", function() {
        return su
    }),
    n.d(e, "LightProbeHelper", function() {
        return $u
    }),
    n.d(e, "LightShadow", function() {
        return Lc
    }),
    n.d(e, "Line", function() {
        return Qa
    }),
    n.d(e, "Line3", function() {
        return Wu
    }),
    n.d(e, "LineBasicMaterial", function() {
        return Za
    }),
    n.d(e, "LineCurve", function() {
        return vc
    }),
    n.d(e, "LineCurve3", function() {
        return yc
    }),
    n.d(e, "LineDashedMaterial", function() {
        return Rs
    }),
    n.d(e, "LineLoop", function() {
        return $a
    }),
    n.d(e, "LinePieces", function() {
        return ph
    }),
    n.d(e, "LineSegments", function() {
        return Ka
    }),
    n.d(e, "LineStrip", function() {
        return dh
    }),
    n.d(e, "LinearEncoding", function() {
        return Pe
    }),
    n.d(e, "LinearFilter", function() {
        return St
    }),
    n.d(e, "LinearInterpolant", function() {
        return Ds
    }),
    n.d(e, "LinearMipMapLinearFilter", function() {
        return At
    }),
    n.d(e, "LinearMipMapNearestFilter", function() {
        return Tt
    }),
    n.d(e, "LinearToneMapping", function() {
        return ot
    }),
    n.d(e, "Loader", function() {
        return ru
    }),
    n.d(e, "LoaderUtils", function() {
        return Uc
    }),
    n.d(e, "LoadingManager", function() {
        return Xs
    }),
    n.d(e, "LogLuvEncoding", function() {
        return De
    }),
    n.d(e, "LoopOnce", function() {
        return ye
    }),
    n.d(e, "LoopPingPong", function() {
        return be
    }),
    n.d(e, "LoopRepeat", function() {
        return xe
    }),
    n.d(e, "LuminanceAlphaFormat", function() {
        return jt
    }),
    n.d(e, "LuminanceFormat", function() {
        return kt
    }),
    n.d(e, "MOUSE", function() {
        return c
    }),
    n.d(e, "Material", function() {
        return Zn
    }),
    n.d(e, "MaterialLoader", function() {
        return zc
    }),
    n.d(e, "Math", function() {
        return Ve
    }),
    n.d(e, "Matrix3", function() {
        return qe
    }),
    n.d(e, "Matrix4", function() {
        return hn
    }),
    n.d(e, "MaxEquation", function() {
        return B
    }),
    n.d(e, "Mesh", function() {
        return fr
    }),
    n.d(e, "MeshBasicMaterial", function() {
        return Qn
    }),
    n.d(e, "MeshDepthMaterial", function() {
        return ba
    }),
    n.d(e, "MeshDistanceMaterial", function() {
        return wa
    }),
    n.d(e, "MeshFaceMaterial", function() {
        return fh
    }),
    n.d(e, "MeshLambertMaterial", function() {
        return As
    }),
    n.d(e, "MeshMatcapMaterial", function() {
        return Ls
    }),
    n.d(e, "MeshNormalMaterial", function() {
        return Ts
    }),
    n.d(e, "MeshPhongMaterial", function() {
        return Es
    }),
    n.d(e, "MeshPhysicalMaterial", function() {
        return Ms
    }),
    n.d(e, "MeshStandardMaterial", function() {
        return _s
    }),
    n.d(e, "MeshToonMaterial", function() {
        return Ss
    }),
    n.d(e, "MinEquation", function() {
        return N
    }),
    n.d(e, "MirroredRepeatWrapping", function() {
        return wt
    }),
    n.d(e, "MixOperation", function() {
        return rt
    }),
    n.d(e, "MultiMaterial", function() {
        return mh
    }),
    n.d(e, "MultiplyBlending", function() {
        return P
    }),
    n.d(e, "MultiplyOperation", function() {
        return nt
    }),
    n.d(e, "NearestFilter", function() {
        return _t
    }),
    n.d(e, "NearestMipMapLinearFilter", function() {
        return Et
    }),
    n.d(e, "NearestMipMapNearestFilter", function() {
        return Mt
    }),
    n.d(e, "NeverDepth", function() {
        return Y
    }),
    n.d(e, "NoBlending", function() {
        return T
    }),
    n.d(e, "NoColors", function() {
        return M
    }),
    n.d(e, "NoToneMapping", function() {
        return at
    }),
    n.d(e, "NormalBlending", function() {
        return A
    }),
    n.d(e, "NotEqualDepth", function() {
        return et
    }),
    n.d(e, "NumberKeyframeTrack", function() {
        return Gs
    }),
    n.d(e, "Object3D", function() {
        return Dn
    }),
    n.d(e, "ObjectLoader", function() {
        return kc
    }),
    n.d(e, "ObjectSpaceNormalMap", function() {
        return He
    }),
    n.d(e, "OctahedronBufferGeometry", function() {
        return mo
    }),
    n.d(e, "OctahedronGeometry", function() {
        return fo
    }),
    n.d(e, "OneFactor", function() {
        return U
    }),
    n.d(e, "OneMinusDstAlphaFactor", function() {
        return j
    }),
    n.d(e, "OneMinusDstColorFactor", function() {
        return q
    }),
    n.d(e, "OneMinusSrcAlphaFactor", function() {
        return V
    }),
    n.d(e, "OneMinusSrcColorFactor", function() {
        return F
    }),
    n.d(e, "OrthographicCamera", function() {
        return Oc
    }),
    n.d(e, "PCFShadowMap", function() {
        return g
    }),
    n.d(e, "PCFSoftShadowMap", function() {
        return v
    }),
    n.d(e, "ParametricBufferGeometry", function() {
        return co
    }),
    n.d(e, "ParametricGeometry", function() {
        return so
    }),
    n.d(e, "Particle", function() {
        return vh
    }),
    n.d(e, "ParticleBasicMaterial", function() {
        return bh
    }),
    n.d(e, "ParticleSystem", function() {
        return yh
    }),
    n.d(e, "ParticleSystemMaterial", function() {
        return wh
    }),
    n.d(e, "Path", function() {
        return Ec
    }),
    n.d(e, "PerspectiveCamera", function() {
        return Tr
    }),
    n.d(e, "Plane", function() {
        return Dr
    }),
    n.d(e, "PlaneBufferGeometry", function() {
        return Vr
    }),
    n.d(e, "PlaneGeometry", function() {
        return Hr
    }),
    n.d(e, "PlaneHelper", function() {
        return ch
    }),
    n.d(e, "PointCloud", function() {
        return gh
    }),
    n.d(e, "PointCloudMaterial", function() {
        return xh
    }),
    n.d(e, "PointLight", function() {
        return Cc
    }),
    n.d(e, "PointLightHelper", function() {
        return Zu
    }),
    n.d(e, "Points", function() {
        return eo
    }),
    n.d(e, "PointsMaterial", function() {
        return to
    }),
    n.d(e, "PolarGridHelper", function() {
        return eh
    }),
    n.d(e, "PolyhedronBufferGeometry", function() {
        return ho
    }),
    n.d(e, "PolyhedronGeometry", function() {
        return uo
    }),
    n.d(e, "PositionalAudio", function() {
        return fu
    }),
    n.d(e, "PositionalAudioHelper", function() {
        return nh
    }),
    n.d(e, "PropertyBinding", function() {
        return Iu
    }),
    n.d(e, "PropertyMixer", function() {
        return gu
    }),
    n.d(e, "QuadraticBezierCurve", function() {
        return xc
    }),
    n.d(e, "QuadraticBezierCurve3", function() {
        return bc
    }),
    n.d(e, "Quaternion", function() {
        return je
    }),
    n.d(e, "QuaternionKeyframeTrack", function() {
        return Hs
    }),
    n.d(e, "QuaternionLinearInterpolant", function() {
        return Fs
    }),
    n.d(e, "REVISION", function() {
        return s
    }),
    n.d(e, "RGBADepthPacking", function() {
        return Ge
    }),
    n.d(e, "RGBAFormat", function() {
        return Vt
    }),
    n.d(e, "RGBA_ASTC_10x10_Format", function() {
        return me
    }),
    n.d(e, "RGBA_ASTC_10x5_Format", function() {
        return de
    }),
    n.d(e, "RGBA_ASTC_10x6_Format", function() {
        return pe
    }),
    n.d(e, "RGBA_ASTC_10x8_Format", function() {
        return fe
    }),
    n.d(e, "RGBA_ASTC_12x10_Format", function() {
        return ge
    }),
    n.d(e, "RGBA_ASTC_12x12_Format", function() {
        return ve
    }),
    n.d(e, "RGBA_ASTC_4x4_Format", function() {
        return ie
    }),
    n.d(e, "RGBA_ASTC_5x4_Format", function() {
        return ae
    }),
    n.d(e, "RGBA_ASTC_5x5_Format", function() {
        return oe
    }),
    n.d(e, "RGBA_ASTC_6x5_Format", function() {
        return se
    }),
    n.d(e, "RGBA_ASTC_6x6_Format", function() {
        return ce
    }),
    n.d(e, "RGBA_ASTC_8x5_Format", function() {
        return ue
    }),
    n.d(e, "RGBA_ASTC_8x6_Format", function() {
        return he
    }),
    n.d(e, "RGBA_ASTC_8x8_Format", function() {
        return le
    }),
    n.d(e, "RGBA_PVRTC_2BPPV1_Format", function() {
        return ne
    }),
    n.d(e, "RGBA_PVRTC_4BPPV1_Format", function() {
        return ee
    }),
    n.d(e, "RGBA_S3TC_DXT1_Format", function() {
        return Zt
    }),
    n.d(e, "RGBA_S3TC_DXT3_Format", function() {
        return Qt
    }),
    n.d(e, "RGBA_S3TC_DXT5_Format", function() {
        return Kt
    }),
    n.d(e, "RGBDEncoding", function() {
        return ze
    }),
    n.d(e, "RGBEEncoding", function() {
        return Ie
    }),
    n.d(e, "RGBEFormat", function() {
        return Wt
    }),
    n.d(e, "RGBFormat", function() {
        return Ht
    }),
    n.d(e, "RGBM16Encoding", function() {
        return Be
    }),
    n.d(e, "RGBM7Encoding", function() {
        return Ne
    }),
    n.d(e, "RGB_ETC1_Format", function() {
        return re
    }),
    n.d(e, "RGB_PVRTC_2BPPV1_Format", function() {
        return te
    }),
    n.d(e, "RGB_PVRTC_4BPPV1_Format", function() {
        return $t
    }),
    n.d(e, "RGB_S3TC_DXT1_Format", function() {
        return Jt
    }),
    n.d(e, "RawShaderMaterial", function() {
        return ws
    }),
    n.d(e, "Ray", function() {
        return Un
    }),
    n.d(e, "Raycaster", function() {
        return Gu
    }),
    n.d(e, "RectAreaLight", function() {
        return Bc
    }),
    n.d(e, "RectAreaLightHelper", function() {
        return Qu
    }),
    n.d(e, "RedFormat", function() {
        return Yt
    }),
    n.d(e, "ReinhardToneMapping", function() {
        return st
    }),
    n.d(e, "RepeatWrapping", function() {
        return xt
    }),
    n.d(e, "ReverseSubtractEquation", function() {
        return D
    }),
    n.d(e, "RingBufferGeometry", function() {
        return os
    }),
    n.d(e, "RingGeometry", function() {
        return as
    }),
    n.d(e, "Scene", function() {
        return Nn
    }),
    n.d(e, "SceneUtils", function() {
        return Wh
    }),
    n.d(e, "ShaderChunk", function() {
        return Br
    }),
    n.d(e, "ShaderLib", function() {
        return Ur
    }),
    n.d(e, "ShaderMaterial", function() {
        return Er
    }),
    n.d(e, "ShadowMaterial", function() {
        return bs
    }),
    n.d(e, "Shape", function() {
        return Sc
    }),
    n.d(e, "ShapeBufferGeometry", function() {
        return hs
    }),
    n.d(e, "ShapeGeometry", function() {
        return us
    }),
    n.d(e, "ShapePath", function() {
        return $c
    }),
    n.d(e, "ShapeUtils", function() {
        return Yo
    }),
    n.d(e, "ShortType", function() {
        return Pt
    }),
    n.d(e, "Skeleton", function() {
        return Ya
    }),
    n.d(e, "SkeletonHelper", function() {
        return Ju
    }),
    n.d(e, "SkinnedMesh", function() {
        return Xa
    }),
    n.d(e, "SmoothShading", function() {
        return _
    }),
    n.d(e, "Sphere", function() {
        return zn
    }),
    n.d(e, "SphereBufferGeometry", function() {
        return is
    }),
    n.d(e, "SphereGeometry", function() {
        return rs
    }),
    n.d(e, "Spherical", function() {
        return Vu
    }),
    n.d(e, "SphericalHarmonics3", function() {
        return ou
    }),
    n.d(e, "SphericalReflectionMapping", function() {
        return gt
    }),
    n.d(e, "Spline", function() {
        return Nh
    }),
    n.d(e, "SplineCurve", function() {
        return wc
    }),
    n.d(e, "SplineCurve3", function() {
        return Dh
    }),
    n.d(e, "SpotLight", function() {
        return Pc
    }),
    n.d(e, "SpotLightHelper", function() {
        return Yu
    }),
    n.d(e, "SpotLightShadow", function() {
        return Rc
    }),
    n.d(e, "Sprite", function() {
        return Wa
    }),
    n.d(e, "SpriteMaterial", function() {
        return ja
    }),
    n.d(e, "SrcAlphaFactor", function() {
        return H
    }),
    n.d(e, "SrcAlphaSaturateFactor", function() {
        return X
    }),
    n.d(e, "SrcColorFactor", function() {
        return G
    }),
    n.d(e, "StereoCamera", function() {
        return hu
    }),
    n.d(e, "StringKeyframeTrack", function() {
        return Vs
    }),
    n.d(e, "SubtractEquation", function() {
        return I
    }),
    n.d(e, "SubtractiveBlending", function() {
        return R
    }),
    n.d(e, "TangentSpaceNormalMap", function() {
        return Fe
    }),
    n.d(e, "TetrahedronBufferGeometry", function() {
        return po
    }),
    n.d(e, "TetrahedronGeometry", function() {
        return lo
    }),
    n.d(e, "TextBufferGeometry", function() {
        return ns
    }),
    n.d(e, "TextGeometry", function() {
        return es
    }),
    n.d(e, "Texture", function() {
        return on
    }),
    n.d(e, "TextureLoader", function() {
        return nc
    }),
    n.d(e, "TorusBufferGeometry", function() {
        return So
    }),
    n.d(e, "TorusGeometry", function() {
        return Eo
    }),
    n.d(e, "TorusKnotBufferGeometry", function() {
        return Mo
    }),
    n.d(e, "TorusKnotGeometry", function() {
        return _o
    }),
    n.d(e, "Triangle", function() {
        return Gn
    }),
    n.d(e, "TriangleFanDrawMode", function() {
        return Re
    }),
    n.d(e, "TriangleStripDrawMode", function() {
        return Le
    }),
    n.d(e, "TrianglesDrawMode", function() {
        return Ae
    }),
    n.d(e, "TubeBufferGeometry", function() {
        return wo
    }),
    n.d(e, "TubeGeometry", function() {
        return bo
    }),
    n.d(e, "UVMapping", function() {
        return lt
    }),
    n.d(e, "Uint16Attribute", function() {
        return Lh
    }),
    n.d(e, "Uint16BufferAttribute", function() {
        return rr
    }),
    n.d(e, "Uint32Attribute", function() {
        return Ph
    }),
    n.d(e, "Uint32BufferAttribute", function() {
        return ar
    }),
    n.d(e, "Uint8Attribute", function() {
        return Sh
    }),
    n.d(e, "Uint8BufferAttribute", function() {
        return tr
    }),
    n.d(e, "Uint8ClampedAttribute", function() {
        return Th
    }),
    n.d(e, "Uint8ClampedBufferAttribute", function() {
        return er
    }),
    n.d(e, "Uncharted2ToneMapping", function() {
        return ct
    }),
    n.d(e, "Uniform", function() {
        return zu
    }),
    n.d(e, "UniformsLib", function() {
        return zr
    }),
    n.d(e, "UniformsUtils", function() {
        return wr
    }),
    n.d(e, "UnsignedByteType", function() {
        return Lt
    }),
    n.d(e, "UnsignedInt248Type", function() {
        return Gt
    }),
    n.d(e, "UnsignedIntType", function() {
        return It
    }),
    n.d(e, "UnsignedShort4444Type", function() {
        return Bt
    }),
    n.d(e, "UnsignedShort5551Type", function() {
        return zt
    }),
    n.d(e, "UnsignedShort565Type", function() {
        return Ut
    }),
    n.d(e, "UnsignedShortType", function() {
        return Ct
    }),
    n.d(e, "Vector2", function() {
        return ke
    }),
    n.d(e, "Vector3", function() {
        return We
    }),
    n.d(e, "Vector4", function() {
        return sn
    }),
    n.d(e, "VectorKeyframeTrack", function() {
        return ks
    }),
    n.d(e, "Vertex", function() {
        return _h
    }),
    n.d(e, "VertexColors", function() {
        return S
    }),
    n.d(e, "VertexNormalsHelper", function() {
        return Xu
    }),
    n.d(e, "VideoTexture", function() {
        return no
    }),
    n.d(e, "WebGLMultisampleRenderTarget", function() {
        return un
    }),
    n.d(e, "WebGLRenderTarget", function() {
        return cn
    }),
    n.d(e, "WebGLRenderTargetCube", function() {
        return Or
    }),
    n.d(e, "WebGLRenderer", function() {
        return Ga
    }),
    n.d(e, "WebGLUtils", function() {
        return Sa
    }),
    n.d(e, "WireframeGeometry", function() {
        return oo
    }),
    n.d(e, "WireframeHelper", function() {
        return Gh
    }),
    n.d(e, "WrapAroundEnding", function() {
        return Te
    }),
    n.d(e, "XHRLoader", function() {
        return Fh
    }),
    n.d(e, "ZeroCurvatureEnding", function() {
        return Ee
    }),
    n.d(e, "ZeroFactor", function() {
        return z
    }),
    n.d(e, "ZeroSlopeEnding", function() {
        return Se
    }),
    n.d(e, "sRGBEncoding", function() {
        return Ce
    }),
    void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)),
    void 0 === Number.isInteger && (Number.isInteger = function(t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t
    }
    ),
    void 0 === Math.sign && (Math.sign = function(t) {
        return t < 0 ? -1 : t > 0 ? 1 : +t
    }
    ),
    "name"in Function.prototype == !1 && Object.defineProperty(Function.prototype, "name", {
        get: function() {
            return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
        }
    }),
    void 0 === Object.assign && (Object.assign = function(t) {
        if (null == t)
            throw new TypeError("Cannot convert undefined or null to object");
        for (var e = Object(t), n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            if (null != r)
                for (var i in r)
                    Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
        }
        return e
    }
    ),
    Object.assign(r.prototype, {
        addEventListener: function(t, e) {
            void 0 === this._listeners && (this._listeners = {});
            var n = this._listeners;
            void 0 === n[t] && (n[t] = []),
            -1 === n[t].indexOf(e) && n[t].push(e)
        },
        hasEventListener: function(t, e) {
            if (void 0 === this._listeners)
                return !1;
            var n = this._listeners;
            return void 0 !== n[t] && -1 !== n[t].indexOf(e)
        },
        removeEventListener: function(t, e) {
            if (void 0 !== this._listeners) {
                var n = this._listeners[t];
                if (void 0 !== n) {
                    var r = n.indexOf(e);
                    -1 !== r && n.splice(r, 1)
                }
            }
        },
        dispatchEvent: function(t) {
            if (void 0 !== this._listeners) {
                var e = this._listeners[t.type];
                if (void 0 !== e) {
                    t.target = this;
                    for (var n = e.slice(0), r = 0, i = n.length; r < i; r++)
                        n[r].call(this, t)
                }
            }
        }
    });
    var i, a, o, s = "106", c = {
        LEFT: 0,
        MIDDLE: 1,
        RIGHT: 2
    }, u = 0, h = 1, l = 2, d = 3, p = 0, f = 1, m = 0, g = 1, v = 2, y = 0, x = 1, b = 2, w = 1, _ = 2, M = 0, E = 1, S = 2, T = 0, A = 1, L = 2, R = 3, P = 4, C = 5, O = 100, I = 101, D = 102, N = 103, B = 104, z = 200, U = 201, G = 202, F = 203, H = 204, V = 205, k = 206, j = 207, W = 208, q = 209, X = 210, Y = 0, J = 1, Z = 2, Q = 3, K = 4, $ = 5, tt = 6, et = 7, nt = 0, rt = 1, it = 2, at = 0, ot = 1, st = 2, ct = 3, ut = 4, ht = 5, lt = 300, dt = 301, pt = 302, ft = 303, mt = 304, gt = 305, vt = 306, yt = 307, xt = 1e3, bt = 1001, wt = 1002, _t = 1003, Mt = 1004, Et = 1005, St = 1006, Tt = 1007, At = 1008, Lt = 1009, Rt = 1010, Pt = 1011, Ct = 1012, Ot = 1013, It = 1014, Dt = 1015, Nt = 1016, Bt = 1017, zt = 1018, Ut = 1019, Gt = 1020, Ft = 1021, Ht = 1022, Vt = 1023, kt = 1024, jt = 1025, Wt = Vt, qt = 1026, Xt = 1027, Yt = 1028, Jt = 33776, Zt = 33777, Qt = 33778, Kt = 33779, $t = 35840, te = 35841, ee = 35842, ne = 35843, re = 36196, ie = 37808, ae = 37809, oe = 37810, se = 37811, ce = 37812, ue = 37813, he = 37814, le = 37815, de = 37816, pe = 37817, fe = 37818, me = 37819, ge = 37820, ve = 37821, ye = 2200, xe = 2201, be = 2202, we = 2300, _e = 2301, Me = 2302, Ee = 2400, Se = 2401, Te = 2402, Ae = 0, Le = 1, Re = 2, Pe = 3e3, Ce = 3001, Oe = 3007, Ie = 3002, De = 3003, Ne = 3004, Be = 3005, ze = 3006, Ue = 3200, Ge = 3201, Fe = 0, He = 1, Ve = {
        DEG2RAD: Math.PI / 180,
        RAD2DEG: 180 / Math.PI,
        generateUUID: function() {
            for (var t = [], e = 0; e < 256; e++)
                t[e] = (e < 16 ? "0" : "") + e.toString(16);
            return function() {
                var e = 4294967295 * Math.random() | 0
                  , n = 4294967295 * Math.random() | 0
                  , r = 4294967295 * Math.random() | 0
                  , i = 4294967295 * Math.random() | 0;
                return (t[255 & e] + t[e >> 8 & 255] + t[e >> 16 & 255] + t[e >> 24 & 255] + "-" + t[255 & n] + t[n >> 8 & 255] + "-" + t[n >> 16 & 15 | 64] + t[n >> 24 & 255] + "-" + t[63 & r | 128] + t[r >> 8 & 255] + "-" + t[r >> 16 & 255] + t[r >> 24 & 255] + t[255 & i] + t[i >> 8 & 255] + t[i >> 16 & 255] + t[i >> 24 & 255]).toUpperCase()
            }
        }(),
        clamp: function(t, e, n) {
            return Math.max(e, Math.min(n, t))
        },
        euclideanModulo: function(t, e) {
            return (t % e + e) % e
        },
        mapLinear: function(t, e, n, r, i) {
            return r + (t - e) * (i - r) / (n - e)
        },
        lerp: function(t, e, n) {
            return (1 - n) * t + n * e
        },
        smoothstep: function(t, e, n) {
            return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * (3 - 2 * t)
        },
        smootherstep: function(t, e, n) {
            return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10)
        },
        randInt: function(t, e) {
            return t + Math.floor(Math.random() * (e - t + 1))
        },
        randFloat: function(t, e) {
            return t + Math.random() * (e - t)
        },
        randFloatSpread: function(t) {
            return t * (.5 - Math.random())
        },
        degToRad: function(t) {
            return t * Ve.DEG2RAD
        },
        radToDeg: function(t) {
            return t * Ve.RAD2DEG
        },
        isPowerOfTwo: function(t) {
            return 0 == (t & t - 1) && 0 !== t
        },
        ceilPowerOfTwo: function(t) {
            return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2))
        },
        floorPowerOfTwo: function(t) {
            return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
        }
    };
    function ke(t, e) {
        this.x = t || 0,
        this.y = e || 0
    }
    function je(t, e, n, r) {
        this._x = t || 0,
        this._y = e || 0,
        this._z = n || 0,
        this._w = void 0 !== r ? r : 1
    }
    function We(t, e, n) {
        this.x = t || 0,
        this.y = e || 0,
        this.z = n || 0
    }
    function qe() {
        this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1],
        arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
    }
    Object.defineProperties(ke.prototype, {
        width: {
            get: function() {
                return this.x
            },
            set: function(t) {
                this.x = t
            }
        },
        height: {
            get: function() {
                return this.y
            },
            set: function(t) {
                this.y = t
            }
        }
    }),
    Object.assign(ke.prototype, {
        isVector2: !0,
        set: function(t, e) {
            return this.x = t,
            this.y = e,
            this
        },
        setScalar: function(t) {
            return this.x = t,
            this.y = t,
            this
        },
        setX: function(t) {
            return this.x = t,
            this
        },
        setY: function(t) {
            return this.y = t,
            this
        },
        setComponent: function(t, e) {
            switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            default:
                throw new Error("index is out of range: " + t)
            }
            return this
        },
        getComponent: function(t) {
            switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw new Error("index is out of range: " + t)
            }
        },
        clone: function() {
            return new this.constructor(this.x,this.y)
        },
        copy: function(t) {
            return this.x = t.x,
            this.y = t.y,
            this
        },
        add: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
            this.addVectors(t, e)) : (this.x += t.x,
            this.y += t.y,
            this)
        },
        addScalar: function(t) {
            return this.x += t,
            this.y += t,
            this
        },
        addVectors: function(t, e) {
            return this.x = t.x + e.x,
            this.y = t.y + e.y,
            this
        },
        addScaledVector: function(t, e) {
            return this.x += t.x * e,
            this.y += t.y * e,
            this
        },
        sub: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
            this.subVectors(t, e)) : (this.x -= t.x,
            this.y -= t.y,
            this)
        },
        subScalar: function(t) {
            return this.x -= t,
            this.y -= t,
            this
        },
        subVectors: function(t, e) {
            return this.x = t.x - e.x,
            this.y = t.y - e.y,
            this
        },
        multiply: function(t) {
            return this.x *= t.x,
            this.y *= t.y,
            this
        },
        multiplyScalar: function(t) {
            return this.x *= t,
            this.y *= t,
            this
        },
        divide: function(t) {
            return this.x /= t.x,
            this.y /= t.y,
            this
        },
        divideScalar: function(t) {
            return this.multiplyScalar(1 / t)
        },
        applyMatrix3: function(t) {
            var e = this.x
              , n = this.y
              , r = t.elements;
            return this.x = r[0] * e + r[3] * n + r[6],
            this.y = r[1] * e + r[4] * n + r[7],
            this
        },
        min: function(t) {
            return this.x = Math.min(this.x, t.x),
            this.y = Math.min(this.y, t.y),
            this
        },
        max: function(t) {
            return this.x = Math.max(this.x, t.x),
            this.y = Math.max(this.y, t.y),
            this
        },
        clamp: function(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)),
            this.y = Math.max(t.y, Math.min(e.y, this.y)),
            this
        },
        clampScalar: function(t, e) {
            return this.x = Math.max(t, Math.min(e, this.x)),
            this.y = Math.max(t, Math.min(e, this.y)),
            this
        },
        clampLength: function(t, e) {
            var n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
        },
        floor: function() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this
        },
        round: function() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this
        },
        roundToZero: function() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
            this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
            this
        },
        negate: function() {
            return this.x = -this.x,
            this.y = -this.y,
            this
        },
        dot: function(t) {
            return this.x * t.x + this.y * t.y
        },
        cross: function(t) {
            return this.x * t.y - this.y * t.x
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        },
        manhattanLength: function() {
            return Math.abs(this.x) + Math.abs(this.y)
        },
        normalize: function() {
            return this.divideScalar(this.length() || 1)
        },
        angle: function() {
            var t = Math.atan2(this.y, this.x);
            return t < 0 && (t += 2 * Math.PI),
            t
        },
        distanceTo: function(t) {
            return Math.sqrt(this.distanceToSquared(t))
        },
        distanceToSquared: function(t) {
            var e = this.x - t.x
              , n = this.y - t.y;
            return e * e + n * n
        },
        manhattanDistanceTo: function(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
        },
        setLength: function(t) {
            return this.normalize().multiplyScalar(t)
        },
        lerp: function(t, e) {
            return this.x += (t.x - this.x) * e,
            this.y += (t.y - this.y) * e,
            this
        },
        lerpVectors: function(t, e, n) {
            return this.subVectors(e, t).multiplyScalar(n).add(t)
        },
        equals: function(t) {
            return t.x === this.x && t.y === this.y
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0),
            this.x = t[e],
            this.y = t[e + 1],
            this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []),
            void 0 === e && (e = 0),
            t[e] = this.x,
            t[e + 1] = this.y,
            t
        },
        fromBufferAttribute: function(t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),
            this.x = t.getX(e),
            this.y = t.getY(e),
            this
        },
        rotateAround: function(t, e) {
            var n = Math.cos(e)
              , r = Math.sin(e)
              , i = this.x - t.x
              , a = this.y - t.y;
            return this.x = i * n - a * r + t.x,
            this.y = i * r + a * n + t.y,
            this
        }
    }),
    Object.assign(je, {
        slerp: function(t, e, n, r) {
            return n.copy(t).slerp(e, r)
        },
        slerpFlat: function(t, e, n, r, i, a, o) {
            var s = n[r + 0]
              , c = n[r + 1]
              , u = n[r + 2]
              , h = n[r + 3]
              , l = i[a + 0]
              , d = i[a + 1]
              , p = i[a + 2]
              , f = i[a + 3];
            if (h !== f || s !== l || c !== d || u !== p) {
                var m = 1 - o
                  , g = s * l + c * d + u * p + h * f
                  , v = g >= 0 ? 1 : -1
                  , y = 1 - g * g;
                if (y > Number.EPSILON) {
                    var x = Math.sqrt(y)
                      , b = Math.atan2(x, g * v);
                    m = Math.sin(m * b) / x,
                    o = Math.sin(o * b) / x
                }
                var w = o * v;
                if (s = s * m + l * w,
                c = c * m + d * w,
                u = u * m + p * w,
                h = h * m + f * w,
                m === 1 - o) {
                    var _ = 1 / Math.sqrt(s * s + c * c + u * u + h * h);
                    s *= _,
                    c *= _,
                    u *= _,
                    h *= _
                }
            }
            t[e] = s,
            t[e + 1] = c,
            t[e + 2] = u,
            t[e + 3] = h
        }
    }),
    Object.defineProperties(je.prototype, {
        x: {
            get: function() {
                return this._x
            },
            set: function(t) {
                this._x = t,
                this._onChangeCallback()
            }
        },
        y: {
            get: function() {
                return this._y
            },
            set: function(t) {
                this._y = t,
                this._onChangeCallback()
            }
        },
        z: {
            get: function() {
                return this._z
            },
            set: function(t) {
                this._z = t,
                this._onChangeCallback()
            }
        },
        w: {
            get: function() {
                return this._w
            },
            set: function(t) {
                this._w = t,
                this._onChangeCallback()
            }
        }
    }),
    Object.assign(je.prototype, {
        isQuaternion: !0,
        set: function(t, e, n, r) {
            return this._x = t,
            this._y = e,
            this._z = n,
            this._w = r,
            this._onChangeCallback(),
            this
        },
        clone: function() {
            return new this.constructor(this._x,this._y,this._z,this._w)
        },
        copy: function(t) {
            return this._x = t.x,
            this._y = t.y,
            this._z = t.z,
            this._w = t.w,
            this._onChangeCallback(),
            this
        },
        setFromEuler: function(t, e) {
            if (!t || !t.isEuler)
                throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
            var n = t._x
              , r = t._y
              , i = t._z
              , a = t.order
              , o = Math.cos
              , s = Math.sin
              , c = o(n / 2)
              , u = o(r / 2)
              , h = o(i / 2)
              , l = s(n / 2)
              , d = s(r / 2)
              , p = s(i / 2);
            return "XYZ" === a ? (this._x = l * u * h + c * d * p,
            this._y = c * d * h - l * u * p,
            this._z = c * u * p + l * d * h,
            this._w = c * u * h - l * d * p) : "YXZ" === a ? (this._x = l * u * h + c * d * p,
            this._y = c * d * h - l * u * p,
            this._z = c * u * p - l * d * h,
            this._w = c * u * h + l * d * p) : "ZXY" === a ? (this._x = l * u * h - c * d * p,
            this._y = c * d * h + l * u * p,
            this._z = c * u * p + l * d * h,
            this._w = c * u * h - l * d * p) : "ZYX" === a ? (this._x = l * u * h - c * d * p,
            this._y = c * d * h + l * u * p,
            this._z = c * u * p - l * d * h,
            this._w = c * u * h + l * d * p) : "YZX" === a ? (this._x = l * u * h + c * d * p,
            this._y = c * d * h + l * u * p,
            this._z = c * u * p - l * d * h,
            this._w = c * u * h - l * d * p) : "XZY" === a && (this._x = l * u * h - c * d * p,
            this._y = c * d * h - l * u * p,
            this._z = c * u * p + l * d * h,
            this._w = c * u * h + l * d * p),
            !1 !== e && this._onChangeCallback(),
            this
        },
        setFromAxisAngle: function(t, e) {
            var n = e / 2
              , r = Math.sin(n);
            return this._x = t.x * r,
            this._y = t.y * r,
            this._z = t.z * r,
            this._w = Math.cos(n),
            this._onChangeCallback(),
            this
        },
        setFromRotationMatrix: function(t) {
            var e, n = t.elements, r = n[0], i = n[4], a = n[8], o = n[1], s = n[5], c = n[9], u = n[2], h = n[6], l = n[10], d = r + s + l;
            return d > 0 ? (e = .5 / Math.sqrt(d + 1),
            this._w = .25 / e,
            this._x = (h - c) * e,
            this._y = (a - u) * e,
            this._z = (o - i) * e) : r > s && r > l ? (e = 2 * Math.sqrt(1 + r - s - l),
            this._w = (h - c) / e,
            this._x = .25 * e,
            this._y = (i + o) / e,
            this._z = (a + u) / e) : s > l ? (e = 2 * Math.sqrt(1 + s - r - l),
            this._w = (a - u) / e,
            this._x = (i + o) / e,
            this._y = .25 * e,
            this._z = (c + h) / e) : (e = 2 * Math.sqrt(1 + l - r - s),
            this._w = (o - i) / e,
            this._x = (a + u) / e,
            this._y = (c + h) / e,
            this._z = .25 * e),
            this._onChangeCallback(),
            this
        },
        setFromUnitVectors: function(t, e) {
            var n = t.dot(e) + 1;
            return n < 1e-6 ? (n = 0,
            Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y,
            this._y = t.x,
            this._z = 0,
            this._w = n) : (this._x = 0,
            this._y = -t.z,
            this._z = t.y,
            this._w = n)) : (this._x = t.y * e.z - t.z * e.y,
            this._y = t.z * e.x - t.x * e.z,
            this._z = t.x * e.y - t.y * e.x,
            this._w = n),
            this.normalize()
        },
        angleTo: function(t) {
            return 2 * Math.acos(Math.abs(Ve.clamp(this.dot(t), -1, 1)))
        },
        rotateTowards: function(t, e) {
            var n = this.angleTo(t);
            if (0 === n)
                return this;
            var r = Math.min(1, e / n);
            return this.slerp(t, r),
            this
        },
        inverse: function() {
            return this.conjugate()
        },
        conjugate: function() {
            return this._x *= -1,
            this._y *= -1,
            this._z *= -1,
            this._onChangeCallback(),
            this
        },
        dot: function(t) {
            return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
        },
        lengthSq: function() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        },
        length: function() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
        },
        normalize: function() {
            var t = this.length();
            return 0 === t ? (this._x = 0,
            this._y = 0,
            this._z = 0,
            this._w = 1) : (t = 1 / t,
            this._x = this._x * t,
            this._y = this._y * t,
            this._z = this._z * t,
            this._w = this._w * t),
            this._onChangeCallback(),
            this
        },
        multiply: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),
            this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t)
        },
        premultiply: function(t) {
            return this.multiplyQuaternions(t, this)
        },
        multiplyQuaternions: function(t, e) {
            var n = t._x
              , r = t._y
              , i = t._z
              , a = t._w
              , o = e._x
              , s = e._y
              , c = e._z
              , u = e._w;
            return this._x = n * u + a * o + r * c - i * s,
            this._y = r * u + a * s + i * o - n * c,
            this._z = i * u + a * c + n * s - r * o,
            this._w = a * u - n * o - r * s - i * c,
            this._onChangeCallback(),
            this
        },
        slerp: function(t, e) {
            if (0 === e)
                return this;
            if (1 === e)
                return this.copy(t);
            var n = this._x
              , r = this._y
              , i = this._z
              , a = this._w
              , o = a * t._w + n * t._x + r * t._y + i * t._z;
            if (o < 0 ? (this._w = -t._w,
            this._x = -t._x,
            this._y = -t._y,
            this._z = -t._z,
            o = -o) : this.copy(t),
            o >= 1)
                return this._w = a,
                this._x = n,
                this._y = r,
                this._z = i,
                this;
            var s = 1 - o * o;
            if (s <= Number.EPSILON) {
                var c = 1 - e;
                return this._w = c * a + e * this._w,
                this._x = c * n + e * this._x,
                this._y = c * r + e * this._y,
                this._z = c * i + e * this._z,
                this.normalize(),
                this._onChangeCallback(),
                this
            }
            var u = Math.sqrt(s)
              , h = Math.atan2(u, o)
              , l = Math.sin((1 - e) * h) / u
              , d = Math.sin(e * h) / u;
            return this._w = a * l + this._w * d,
            this._x = n * l + this._x * d,
            this._y = r * l + this._y * d,
            this._z = i * l + this._z * d,
            this._onChangeCallback(),
            this
        },
        equals: function(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0),
            this._x = t[e],
            this._y = t[e + 1],
            this._z = t[e + 2],
            this._w = t[e + 3],
            this._onChangeCallback(),
            this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []),
            void 0 === e && (e = 0),
            t[e] = this._x,
            t[e + 1] = this._y,
            t[e + 2] = this._z,
            t[e + 3] = this._w,
            t
        },
        _onChange: function(t) {
            return this._onChangeCallback = t,
            this
        },
        _onChangeCallback: function() {}
    }),
    Object.assign(We.prototype, {
        isVector3: !0,
        set: function(t, e, n) {
            return this.x = t,
            this.y = e,
            this.z = n,
            this
        },
        setScalar: function(t) {
            return this.x = t,
            this.y = t,
            this.z = t,
            this
        },
        setX: function(t) {
            return this.x = t,
            this
        },
        setY: function(t) {
            return this.y = t,
            this
        },
        setZ: function(t) {
            return this.z = t,
            this
        },
        setComponent: function(t, e) {
            switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            case 2:
                this.z = e;
                break;
            default:
                throw new Error("index is out of range: " + t)
            }
            return this
        },
        getComponent: function(t) {
            switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw new Error("index is out of range: " + t)
            }
        },
        clone: function() {
            return new this.constructor(this.x,this.y,this.z)
        },
        copy: function(t) {
            return this.x = t.x,
            this.y = t.y,
            this.z = t.z,
            this
        },
        add: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
            this.addVectors(t, e)) : (this.x += t.x,
            this.y += t.y,
            this.z += t.z,
            this)
        },
        addScalar: function(t) {
            return this.x += t,
            this.y += t,
            this.z += t,
            this
        },
        addVectors: function(t, e) {
            return this.x = t.x + e.x,
            this.y = t.y + e.y,
            this.z = t.z + e.z,
            this
        },
        addScaledVector: function(t, e) {
            return this.x += t.x * e,
            this.y += t.y * e,
            this.z += t.z * e,
            this
        },
        sub: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
            this.subVectors(t, e)) : (this.x -= t.x,
            this.y -= t.y,
            this.z -= t.z,
            this)
        },
        subScalar: function(t) {
            return this.x -= t,
            this.y -= t,
            this.z -= t,
            this
        },
        subVectors: function(t, e) {
            return this.x = t.x - e.x,
            this.y = t.y - e.y,
            this.z = t.z - e.z,
            this
        },
        multiply: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),
            this.multiplyVectors(t, e)) : (this.x *= t.x,
            this.y *= t.y,
            this.z *= t.z,
            this)
        },
        multiplyScalar: function(t) {
            return this.x *= t,
            this.y *= t,
            this.z *= t,
            this
        },
        multiplyVectors: function(t, e) {
            return this.x = t.x * e.x,
            this.y = t.y * e.y,
            this.z = t.z * e.z,
            this
        },
        applyEuler: (a = new je,
        function(t) {
            return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),
            this.applyQuaternion(a.setFromEuler(t))
        }
        ),
        applyAxisAngle: function() {
            var t = new je;
            return function(e, n) {
                return this.applyQuaternion(t.setFromAxisAngle(e, n))
            }
        }(),
        applyMatrix3: function(t) {
            var e = this.x
              , n = this.y
              , r = this.z
              , i = t.elements;
            return this.x = i[0] * e + i[3] * n + i[6] * r,
            this.y = i[1] * e + i[4] * n + i[7] * r,
            this.z = i[2] * e + i[5] * n + i[8] * r,
            this
        },
        applyMatrix4: function(t) {
            var e = this.x
              , n = this.y
              , r = this.z
              , i = t.elements
              , a = 1 / (i[3] * e + i[7] * n + i[11] * r + i[15]);
            return this.x = (i[0] * e + i[4] * n + i[8] * r + i[12]) * a,
            this.y = (i[1] * e + i[5] * n + i[9] * r + i[13]) * a,
            this.z = (i[2] * e + i[6] * n + i[10] * r + i[14]) * a,
            this
        },
        applyQuaternion: function(t) {
            var e = this.x
              , n = this.y
              , r = this.z
              , i = t.x
              , a = t.y
              , o = t.z
              , s = t.w
              , c = s * e + a * r - o * n
              , u = s * n + o * e - i * r
              , h = s * r + i * n - a * e
              , l = -i * e - a * n - o * r;
            return this.x = c * s + l * -i + u * -o - h * -a,
            this.y = u * s + l * -a + h * -i - c * -o,
            this.z = h * s + l * -o + c * -a - u * -i,
            this
        },
        project: function(t) {
            return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)
        },
        unproject: function(t) {
            return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)
        },
        transformDirection: function(t) {
            var e = this.x
              , n = this.y
              , r = this.z
              , i = t.elements;
            return this.x = i[0] * e + i[4] * n + i[8] * r,
            this.y = i[1] * e + i[5] * n + i[9] * r,
            this.z = i[2] * e + i[6] * n + i[10] * r,
            this.normalize()
        },
        divide: function(t) {
            return this.x /= t.x,
            this.y /= t.y,
            this.z /= t.z,
            this
        },
        divideScalar: function(t) {
            return this.multiplyScalar(1 / t)
        },
        min: function(t) {
            return this.x = Math.min(this.x, t.x),
            this.y = Math.min(this.y, t.y),
            this.z = Math.min(this.z, t.z),
            this
        },
        max: function(t) {
            return this.x = Math.max(this.x, t.x),
            this.y = Math.max(this.y, t.y),
            this.z = Math.max(this.z, t.z),
            this
        },
        clamp: function(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)),
            this.y = Math.max(t.y, Math.min(e.y, this.y)),
            this.z = Math.max(t.z, Math.min(e.z, this.z)),
            this
        },
        clampScalar: function(t, e) {
            return this.x = Math.max(t, Math.min(e, this.x)),
            this.y = Math.max(t, Math.min(e, this.y)),
            this.z = Math.max(t, Math.min(e, this.z)),
            this
        },
        clampLength: function(t, e) {
            var n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
        },
        floor: function() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this.z = Math.floor(this.z),
            this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this.z = Math.ceil(this.z),
            this
        },
        round: function() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this.z = Math.round(this.z),
            this
        },
        roundToZero: function() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
            this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
            this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
            this
        },
        negate: function() {
            return this.x = -this.x,
            this.y = -this.y,
            this.z = -this.z,
            this
        },
        dot: function(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        },
        manhattanLength: function() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
        },
        normalize: function() {
            return this.divideScalar(this.length() || 1)
        },
        setLength: function(t) {
            return this.normalize().multiplyScalar(t)
        },
        lerp: function(t, e) {
            return this.x += (t.x - this.x) * e,
            this.y += (t.y - this.y) * e,
            this.z += (t.z - this.z) * e,
            this
        },
        lerpVectors: function(t, e, n) {
            return this.subVectors(e, t).multiplyScalar(n).add(t)
        },
        cross: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),
            this.crossVectors(t, e)) : this.crossVectors(this, t)
        },
        crossVectors: function(t, e) {
            var n = t.x
              , r = t.y
              , i = t.z
              , a = e.x
              , o = e.y
              , s = e.z;
            return this.x = r * s - i * o,
            this.y = i * a - n * s,
            this.z = n * o - r * a,
            this
        },
        projectOnVector: function(t) {
            var e = t.dot(this) / t.lengthSq();
            return this.copy(t).multiplyScalar(e)
        },
        projectOnPlane: (i = new We,
        function(t) {
            return i.copy(this).projectOnVector(t),
            this.sub(i)
        }
        ),
        reflect: function() {
            var t = new We;
            return function(e) {
                return this.sub(t.copy(e).multiplyScalar(2 * this.dot(e)))
            }
        }(),
        angleTo: function(t) {
            var e = this.dot(t) / Math.sqrt(this.lengthSq() * t.lengthSq());
            return Math.acos(Ve.clamp(e, -1, 1))
        },
        distanceTo: function(t) {
            return Math.sqrt(this.distanceToSquared(t))
        },
        distanceToSquared: function(t) {
            var e = this.x - t.x
              , n = this.y - t.y
              , r = this.z - t.z;
            return e * e + n * n + r * r
        },
        manhattanDistanceTo: function(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
        },
        setFromSpherical: function(t) {
            return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
        },
        setFromSphericalCoords: function(t, e, n) {
            var r = Math.sin(e) * t;
            return this.x = r * Math.sin(n),
            this.y = Math.cos(e) * t,
            this.z = r * Math.cos(n),
            this
        },
        setFromCylindrical: function(t) {
            return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
        },
        setFromCylindricalCoords: function(t, e, n) {
            return this.x = t * Math.sin(e),
            this.y = n,
            this.z = t * Math.cos(e),
            this
        },
        setFromMatrixPosition: function(t) {
            var e = t.elements;
            return this.x = e[12],
            this.y = e[13],
            this.z = e[14],
            this
        },
        setFromMatrixScale: function(t) {
            var e = this.setFromMatrixColumn(t, 0).length()
              , n = this.setFromMatrixColumn(t, 1).length()
              , r = this.setFromMatrixColumn(t, 2).length();
            return this.x = e,
            this.y = n,
            this.z = r,
            this
        },
        setFromMatrixColumn: function(t, e) {
            return this.fromArray(t.elements, 4 * e)
        },
        equals: function(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0),
            this.x = t[e],
            this.y = t[e + 1],
            this.z = t[e + 2],
            this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []),
            void 0 === e && (e = 0),
            t[e] = this.x,
            t[e + 1] = this.y,
            t[e + 2] = this.z,
            t
        },
        fromBufferAttribute: function(t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),
            this.x = t.getX(e),
            this.y = t.getY(e),
            this.z = t.getZ(e),
            this
        }
    }),
    Object.assign(qe.prototype, {
        isMatrix3: !0,
        set: function(t, e, n, r, i, a, o, s, c) {
            var u = this.elements;
            return u[0] = t,
            u[1] = r,
            u[2] = o,
            u[3] = e,
            u[4] = i,
            u[5] = s,
            u[6] = n,
            u[7] = a,
            u[8] = c,
            this
        },
        identity: function() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
            this
        },
        clone: function() {
            return (new this.constructor).fromArray(this.elements)
        },
        copy: function(t) {
            var e = this.elements
              , n = t.elements;
            return e[0] = n[0],
            e[1] = n[1],
            e[2] = n[2],
            e[3] = n[3],
            e[4] = n[4],
            e[5] = n[5],
            e[6] = n[6],
            e[7] = n[7],
            e[8] = n[8],
            this
        },
        setFromMatrix4: function(t) {
            var e = t.elements;
            return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]),
            this
        },
        applyToBufferAttribute: function() {
            var t = new We;
            return function(e) {
                for (var n = 0, r = e.count; n < r; n++)
                    t.x = e.getX(n),
                    t.y = e.getY(n),
                    t.z = e.getZ(n),
                    t.applyMatrix3(this),
                    e.setXYZ(n, t.x, t.y, t.z);
                return e
            }
        }(),
        multiply: function(t) {
            return this.multiplyMatrices(this, t)
        },
        premultiply: function(t) {
            return this.multiplyMatrices(t, this)
        },
        multiplyMatrices: function(t, e) {
            var n = t.elements
              , r = e.elements
              , i = this.elements
              , a = n[0]
              , o = n[3]
              , s = n[6]
              , c = n[1]
              , u = n[4]
              , h = n[7]
              , l = n[2]
              , d = n[5]
              , p = n[8]
              , f = r[0]
              , m = r[3]
              , g = r[6]
              , v = r[1]
              , y = r[4]
              , x = r[7]
              , b = r[2]
              , w = r[5]
              , _ = r[8];
            return i[0] = a * f + o * v + s * b,
            i[3] = a * m + o * y + s * w,
            i[6] = a * g + o * x + s * _,
            i[1] = c * f + u * v + h * b,
            i[4] = c * m + u * y + h * w,
            i[7] = c * g + u * x + h * _,
            i[2] = l * f + d * v + p * b,
            i[5] = l * m + d * y + p * w,
            i[8] = l * g + d * x + p * _,
            this
        },
        multiplyScalar: function(t) {
            var e = this.elements;
            return e[0] *= t,
            e[3] *= t,
            e[6] *= t,
            e[1] *= t,
            e[4] *= t,
            e[7] *= t,
            e[2] *= t,
            e[5] *= t,
            e[8] *= t,
            this
        },
        determinant: function() {
            var t = this.elements
              , e = t[0]
              , n = t[1]
              , r = t[2]
              , i = t[3]
              , a = t[4]
              , o = t[5]
              , s = t[6]
              , c = t[7]
              , u = t[8];
            return e * a * u - e * o * c - n * i * u + n * o * s + r * i * c - r * a * s
        },
        getInverse: function(t, e) {
            t && t.isMatrix4 && console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");
            var n = t.elements
              , r = this.elements
              , i = n[0]
              , a = n[1]
              , o = n[2]
              , s = n[3]
              , c = n[4]
              , u = n[5]
              , h = n[6]
              , l = n[7]
              , d = n[8]
              , p = d * c - u * l
              , f = u * h - d * s
              , m = l * s - c * h
              , g = i * p + a * f + o * m;
            if (0 === g) {
                var v = "THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0";
                if (!0 === e)
                    throw new Error(v);
                return console.warn(v),
                this.identity()
            }
            var y = 1 / g;
            return r[0] = p * y,
            r[1] = (o * l - d * a) * y,
            r[2] = (u * a - o * c) * y,
            r[3] = f * y,
            r[4] = (d * i - o * h) * y,
            r[5] = (o * s - u * i) * y,
            r[6] = m * y,
            r[7] = (a * h - l * i) * y,
            r[8] = (c * i - a * s) * y,
            this
        },
        transpose: function() {
            var t, e = this.elements;
            return t = e[1],
            e[1] = e[3],
            e[3] = t,
            t = e[2],
            e[2] = e[6],
            e[6] = t,
            t = e[5],
            e[5] = e[7],
            e[7] = t,
            this
        },
        getNormalMatrix: function(t) {
            return this.setFromMatrix4(t).getInverse(this).transpose()
        },
        transposeIntoArray: function(t) {
            var e = this.elements;
            return t[0] = e[0],
            t[1] = e[3],
            t[2] = e[6],
            t[3] = e[1],
            t[4] = e[4],
            t[5] = e[7],
            t[6] = e[2],
            t[7] = e[5],
            t[8] = e[8],
            this
        },
        setUvTransform: function(t, e, n, r, i, a, o) {
            var s = Math.cos(i)
              , c = Math.sin(i);
            this.set(n * s, n * c, -n * (s * a + c * o) + a + t, -r * c, r * s, -r * (-c * a + s * o) + o + e, 0, 0, 1)
        },
        scale: function(t, e) {
            var n = this.elements;
            return n[0] *= t,
            n[3] *= t,
            n[6] *= t,
            n[1] *= e,
            n[4] *= e,
            n[7] *= e,
            this
        },
        rotate: function(t) {
            var e = Math.cos(t)
              , n = Math.sin(t)
              , r = this.elements
              , i = r[0]
              , a = r[3]
              , o = r[6]
              , s = r[1]
              , c = r[4]
              , u = r[7];
            return r[0] = e * i + n * s,
            r[3] = e * a + n * c,
            r[6] = e * o + n * u,
            r[1] = -n * i + e * s,
            r[4] = -n * a + e * c,
            r[7] = -n * o + e * u,
            this
        },
        translate: function(t, e) {
            var n = this.elements;
            return n[0] += t * n[2],
            n[3] += t * n[5],
            n[6] += t * n[8],
            n[1] += e * n[2],
            n[4] += e * n[5],
            n[7] += e * n[8],
            this
        },
        equals: function(t) {
            for (var e = this.elements, n = t.elements, r = 0; r < 9; r++)
                if (e[r] !== n[r])
                    return !1;
            return !0
        },
        fromArray: function(t, e) {
            void 0 === e && (e = 0);
            for (var n = 0; n < 9; n++)
                this.elements[n] = t[n + e];
            return this
        },
        toArray: function(t, e) {
            void 0 === t && (t = []),
            void 0 === e && (e = 0);
            var n = this.elements;
            return t[e] = n[0],
            t[e + 1] = n[1],
            t[e + 2] = n[2],
            t[e + 3] = n[3],
            t[e + 4] = n[4],
            t[e + 5] = n[5],
            t[e + 6] = n[6],
            t[e + 7] = n[7],
            t[e + 8] = n[8],
            t
        }
    });
    var Xe, Ye, Je, Ze, Qe, Ke, $e, tn, en, nn, rn = {
        getDataURL: function(t) {
            var e;
            if ("undefined" == typeof HTMLCanvasElement)
                return t.src;
            if (t instanceof HTMLCanvasElement)
                e = t;
            else {
                void 0 === o && (o = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")),
                o.width = t.width,
                o.height = t.height;
                var n = o.getContext("2d");
                t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height),
                e = o
            }
            return e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png")
        }
    }, an = 0;
    function on(t, e, n, r, i, a, o, s, c, u) {
        Object.defineProperty(this, "id", {
            value: an++
        }),
        this.uuid = Ve.generateUUID(),
        this.name = "",
        this.image = void 0 !== t ? t : on.DEFAULT_IMAGE,
        this.mipmaps = [],
        this.mapping = void 0 !== e ? e : on.DEFAULT_MAPPING,
        this.wrapS = void 0 !== n ? n : bt,
        this.wrapT = void 0 !== r ? r : bt,
        this.magFilter = void 0 !== i ? i : St,
        this.minFilter = void 0 !== a ? a : At,
        this.anisotropy = void 0 !== c ? c : 1,
        this.format = void 0 !== o ? o : Vt,
        this.type = void 0 !== s ? s : Lt,
        this.offset = new ke(0,0),
        this.repeat = new ke(1,1),
        this.center = new ke(0,0),
        this.rotation = 0,
        this.matrixAutoUpdate = !0,
        this.matrix = new qe,
        this.generateMipmaps = !0,
        this.premultiplyAlpha = !1,
        this.flipY = !0,
        this.unpackAlignment = 4,
        this.encoding = void 0 !== u ? u : Pe,
        this.version = 0,
        this.onUpdate = null
    }
    function sn(t, e, n, r) {
        this.x = t || 0,
        this.y = e || 0,
        this.z = n || 0,
        this.w = void 0 !== r ? r : 1
    }
    function cn(t, e, n) {
        this.width = t,
        this.height = e,
        this.scissor = new sn(0,0,t,e),
        this.scissorTest = !1,
        this.viewport = new sn(0,0,t,e),
        n = n || {},
        this.texture = new on(void 0,void 0,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),
        this.texture.image = {},
        this.texture.image.width = t,
        this.texture.image.height = e,
        this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps,
        this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : St,
        this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer,
        this.stencilBuffer = void 0 === n.stencilBuffer || n.stencilBuffer,
        this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null
    }
    function un(t, e, n) {
        cn.call(this, t, e, n),
        this.samples = 4
    }
    function hn() {
        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
    }
    function ln(t, e, n, r) {
        this._x = t || 0,
        this._y = e || 0,
        this._z = n || 0,
        this._order = r || ln.DefaultOrder
    }
    function dn() {
        this.mask = 1
    }
    on.DEFAULT_IMAGE = void 0,
    on.DEFAULT_MAPPING = lt,
    on.prototype = Object.assign(Object.create(r.prototype), {
        constructor: on,
        isTexture: !0,
        updateMatrix: function() {
            this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.name = t.name,
            this.image = t.image,
            this.mipmaps = t.mipmaps.slice(0),
            this.mapping = t.mapping,
            this.wrapS = t.wrapS,
            this.wrapT = t.wrapT,
            this.magFilter = t.magFilter,
            this.minFilter = t.minFilter,
            this.anisotropy = t.anisotropy,
            this.format = t.format,
            this.type = t.type,
            this.offset.copy(t.offset),
            this.repeat.copy(t.repeat),
            this.center.copy(t.center),
            this.rotation = t.rotation,
            this.matrixAutoUpdate = t.matrixAutoUpdate,
            this.matrix.copy(t.matrix),
            this.generateMipmaps = t.generateMipmaps,
            this.premultiplyAlpha = t.premultiplyAlpha,
            this.flipY = t.flipY,
            this.unpackAlignment = t.unpackAlignment,
            this.encoding = t.encoding,
            this
        },
        toJSON: function(t) {
            var e = void 0 === t || "string" == typeof t;
            if (!e && void 0 !== t.textures[this.uuid])
                return t.textures[this.uuid];
            var n = {
                metadata: {
                    version: 4.5,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                mapping: this.mapping,
                repeat: [this.repeat.x, this.repeat.y],
                offset: [this.offset.x, this.offset.y],
                center: [this.center.x, this.center.y],
                rotation: this.rotation,
                wrap: [this.wrapS, this.wrapT],
                format: this.format,
                type: this.type,
                encoding: this.encoding,
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY,
                premultiplyAlpha: this.premultiplyAlpha,
                unpackAlignment: this.unpackAlignment
            };
            if (void 0 !== this.image) {
                var r = this.image;
                if (void 0 === r.uuid && (r.uuid = Ve.generateUUID()),
                !e && void 0 === t.images[r.uuid]) {
                    var i;
                    if (Array.isArray(r)) {
                        i = [];
                        for (var a = 0, o = r.length; a < o; a++)
                            i.push(rn.getDataURL(r[a]))
                    } else
                        i = rn.getDataURL(r);
                    t.images[r.uuid] = {
                        uuid: r.uuid,
                        url: i
                    }
                }
                n.image = r.uuid
            }
            return e || (t.textures[this.uuid] = n),
            n
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        },
        transformUv: function(t) {
            if (this.mapping !== lt)
                return t;
            if (t.applyMatrix3(this.matrix),
            t.x < 0 || t.x > 1)
                switch (this.wrapS) {
                case xt:
                    t.x = t.x - Math.floor(t.x);
                    break;
                case bt:
                    t.x = t.x < 0 ? 0 : 1;
                    break;
                case wt:
                    1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
                }
            if (t.y < 0 || t.y > 1)
                switch (this.wrapT) {
                case xt:
                    t.y = t.y - Math.floor(t.y);
                    break;
                case bt:
                    t.y = t.y < 0 ? 0 : 1;
                    break;
                case wt:
                    1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
                }
            return this.flipY && (t.y = 1 - t.y),
            t
        }
    }),
    Object.defineProperty(on.prototype, "needsUpdate", {
        set: function(t) {
            !0 === t && this.version++
        }
    }),
    Object.defineProperties(sn.prototype, {
        width: {
            get: function() {
                return this.z
            },
            set: function(t) {
                this.z = t
            }
        },
        height: {
            get: function() {
                return this.w
            },
            set: function(t) {
                this.w = t
            }
        }
    }),
    Object.assign(sn.prototype, {
        isVector4: !0,
        set: function(t, e, n, r) {
            return this.x = t,
            this.y = e,
            this.z = n,
            this.w = r,
            this
        },
        setScalar: function(t) {
            return this.x = t,
            this.y = t,
            this.z = t,
            this.w = t,
            this
        },
        setX: function(t) {
            return this.x = t,
            this
        },
        setY: function(t) {
            return this.y = t,
            this
        },
        setZ: function(t) {
            return this.z = t,
            this
        },
        setW: function(t) {
            return this.w = t,
            this
        },
        setComponent: function(t, e) {
            switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            case 2:
                this.z = e;
                break;
            case 3:
                this.w = e;
                break;
            default:
                throw new Error("index is out of range: " + t)
            }
            return this
        },
        getComponent: function(t) {
            switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw new Error("index is out of range: " + t)
            }
        },
        clone: function() {
            return new this.constructor(this.x,this.y,this.z,this.w)
        },
        copy: function(t) {
            return this.x = t.x,
            this.y = t.y,
            this.z = t.z,
            this.w = void 0 !== t.w ? t.w : 1,
            this
        },
        add: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
            this.addVectors(t, e)) : (this.x += t.x,
            this.y += t.y,
            this.z += t.z,
            this.w += t.w,
            this)
        },
        addScalar: function(t) {
            return this.x += t,
            this.y += t,
            this.z += t,
            this.w += t,
            this
        },
        addVectors: function(t, e) {
            return this.x = t.x + e.x,
            this.y = t.y + e.y,
            this.z = t.z + e.z,
            this.w = t.w + e.w,
            this
        },
        addScaledVector: function(t, e) {
            return this.x += t.x * e,
            this.y += t.y * e,
            this.z += t.z * e,
            this.w += t.w * e,
            this
        },
        sub: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
            this.subVectors(t, e)) : (this.x -= t.x,
            this.y -= t.y,
            this.z -= t.z,
            this.w -= t.w,
            this)
        },
        subScalar: function(t) {
            return this.x -= t,
            this.y -= t,
            this.z -= t,
            this.w -= t,
            this
        },
        subVectors: function(t, e) {
            return this.x = t.x - e.x,
            this.y = t.y - e.y,
            this.z = t.z - e.z,
            this.w = t.w - e.w,
            this
        },
        multiplyScalar: function(t) {
            return this.x *= t,
            this.y *= t,
            this.z *= t,
            this.w *= t,
            this
        },
        applyMatrix4: function(t) {
            var e = this.x
              , n = this.y
              , r = this.z
              , i = this.w
              , a = t.elements;
            return this.x = a[0] * e + a[4] * n + a[8] * r + a[12] * i,
            this.y = a[1] * e + a[5] * n + a[9] * r + a[13] * i,
            this.z = a[2] * e + a[6] * n + a[10] * r + a[14] * i,
            this.w = a[3] * e + a[7] * n + a[11] * r + a[15] * i,
            this
        },
        divideScalar: function(t) {
            return this.multiplyScalar(1 / t)
        },
        setAxisAngleFromQuaternion: function(t) {
            this.w = 2 * Math.acos(t.w);
            var e = Math.sqrt(1 - t.w * t.w);
            return e < 1e-4 ? (this.x = 1,
            this.y = 0,
            this.z = 0) : (this.x = t.x / e,
            this.y = t.y / e,
            this.z = t.z / e),
            this
        },
        setAxisAngleFromRotationMatrix: function(t) {
            var e, n, r, i, a = t.elements, o = a[0], s = a[4], c = a[8], u = a[1], h = a[5], l = a[9], d = a[2], p = a[6], f = a[10];
            if (Math.abs(s - u) < .01 && Math.abs(c - d) < .01 && Math.abs(l - p) < .01) {
                if (Math.abs(s + u) < .1 && Math.abs(c + d) < .1 && Math.abs(l + p) < .1 && Math.abs(o + h + f - 3) < .1)
                    return this.set(1, 0, 0, 0),
                    this;
                e = Math.PI;
                var m = (o + 1) / 2
                  , g = (h + 1) / 2
                  , v = (f + 1) / 2
                  , y = (s + u) / 4
                  , x = (c + d) / 4
                  , b = (l + p) / 4;
                return m > g && m > v ? m < .01 ? (n = 0,
                r = .707106781,
                i = .707106781) : (r = y / (n = Math.sqrt(m)),
                i = x / n) : g > v ? g < .01 ? (n = .707106781,
                r = 0,
                i = .707106781) : (n = y / (r = Math.sqrt(g)),
                i = b / r) : v < .01 ? (n = .707106781,
                r = .707106781,
                i = 0) : (n = x / (i = Math.sqrt(v)),
                r = b / i),
                this.set(n, r, i, e),
                this
            }
            var w = Math.sqrt((p - l) * (p - l) + (c - d) * (c - d) + (u - s) * (u - s));
            return Math.abs(w) < .001 && (w = 1),
            this.x = (p - l) / w,
            this.y = (c - d) / w,
            this.z = (u - s) / w,
            this.w = Math.acos((o + h + f - 1) / 2),
            this
        },
        min: function(t) {
            return this.x = Math.min(this.x, t.x),
            this.y = Math.min(this.y, t.y),
            this.z = Math.min(this.z, t.z),
            this.w = Math.min(this.w, t.w),
            this
        },
        max: function(t) {
            return this.x = Math.max(this.x, t.x),
            this.y = Math.max(this.y, t.y),
            this.z = Math.max(this.z, t.z),
            this.w = Math.max(this.w, t.w),
            this
        },
        clamp: function(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)),
            this.y = Math.max(t.y, Math.min(e.y, this.y)),
            this.z = Math.max(t.z, Math.min(e.z, this.z)),
            this.w = Math.max(t.w, Math.min(e.w, this.w)),
            this
        },
        clampScalar: function(t, e) {
            return void 0 === Xe && (Xe = new sn,
            Ye = new sn),
            Xe.set(t, t, t, t),
            Ye.set(e, e, e, e),
            this.clamp(Xe, Ye)
        },
        clampLength: function(t, e) {
            var n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
        },
        floor: function() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this.z = Math.floor(this.z),
            this.w = Math.floor(this.w),
            this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this.z = Math.ceil(this.z),
            this.w = Math.ceil(this.w),
            this
        },
        round: function() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this.z = Math.round(this.z),
            this.w = Math.round(this.w),
            this
        },
        roundToZero: function() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
            this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
            this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
            this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w),
            this
        },
        negate: function() {
            return this.x = -this.x,
            this.y = -this.y,
            this.z = -this.z,
            this.w = -this.w,
            this
        },
        dot: function(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        },
        manhattanLength: function() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
        },
        normalize: function() {
            return this.divideScalar(this.length() || 1)
        },
        setLength: function(t) {
            return this.normalize().multiplyScalar(t)
        },
        lerp: function(t, e) {
            return this.x += (t.x - this.x) * e,
            this.y += (t.y - this.y) * e,
            this.z += (t.z - this.z) * e,
            this.w += (t.w - this.w) * e,
            this
        },
        lerpVectors: function(t, e, n) {
            return this.subVectors(e, t).multiplyScalar(n).add(t)
        },
        equals: function(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0),
            this.x = t[e],
            this.y = t[e + 1],
            this.z = t[e + 2],
            this.w = t[e + 3],
            this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []),
            void 0 === e && (e = 0),
            t[e] = this.x,
            t[e + 1] = this.y,
            t[e + 2] = this.z,
            t[e + 3] = this.w,
            t
        },
        fromBufferAttribute: function(t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),
            this.x = t.getX(e),
            this.y = t.getY(e),
            this.z = t.getZ(e),
            this.w = t.getW(e),
            this
        }
    }),
    cn.prototype = Object.assign(Object.create(r.prototype), {
        constructor: cn,
        isWebGLRenderTarget: !0,
        setSize: function(t, e) {
            this.width === t && this.height === e || (this.width = t,
            this.height = e,
            this.texture.image.width = t,
            this.texture.image.height = e,
            this.dispose()),
            this.viewport.set(0, 0, t, e),
            this.scissor.set(0, 0, t, e)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.width = t.width,
            this.height = t.height,
            this.viewport.copy(t.viewport),
            this.texture = t.texture.clone(),
            this.depthBuffer = t.depthBuffer,
            this.stencilBuffer = t.stencilBuffer,
            this.depthTexture = t.depthTexture,
            this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }),
    un.prototype = Object.assign(Object.create(cn.prototype), {
        constructor: un,
        isWebGLMultisampleRenderTarget: !0,
        copy: function(t) {
            return cn.prototype.copy.call(this, t),
            this.samples = t.samples,
            this
        }
    }),
    Object.assign(hn.prototype, {
        isMatrix4: !0,
        set: function(t, e, n, r, i, a, o, s, c, u, h, l, d, p, f, m) {
            var g = this.elements;
            return g[0] = t,
            g[4] = e,
            g[8] = n,
            g[12] = r,
            g[1] = i,
            g[5] = a,
            g[9] = o,
            g[13] = s,
            g[2] = c,
            g[6] = u,
            g[10] = h,
            g[14] = l,
            g[3] = d,
            g[7] = p,
            g[11] = f,
            g[15] = m,
            this
        },
        identity: function() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
            this
        },
        clone: function() {
            return (new hn).fromArray(this.elements)
        },
        copy: function(t) {
            var e = this.elements
              , n = t.elements;
            return e[0] = n[0],
            e[1] = n[1],
            e[2] = n[2],
            e[3] = n[3],
            e[4] = n[4],
            e[5] = n[5],
            e[6] = n[6],
            e[7] = n[7],
            e[8] = n[8],
            e[9] = n[9],
            e[10] = n[10],
            e[11] = n[11],
            e[12] = n[12],
            e[13] = n[13],
            e[14] = n[14],
            e[15] = n[15],
            this
        },
        copyPosition: function(t) {
            var e = this.elements
              , n = t.elements;
            return e[12] = n[12],
            e[13] = n[13],
            e[14] = n[14],
            this
        },
        extractBasis: function(t, e, n) {
            return t.setFromMatrixColumn(this, 0),
            e.setFromMatrixColumn(this, 1),
            n.setFromMatrixColumn(this, 2),
            this
        },
        makeBasis: function(t, e, n) {
            return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1),
            this
        },
        extractRotation: function() {
            var t = new We;
            return function(e) {
                var n = this.elements
                  , r = e.elements
                  , i = 1 / t.setFromMatrixColumn(e, 0).length()
                  , a = 1 / t.setFromMatrixColumn(e, 1).length()
                  , o = 1 / t.setFromMatrixColumn(e, 2).length();
                return n[0] = r[0] * i,
                n[1] = r[1] * i,
                n[2] = r[2] * i,
                n[3] = 0,
                n[4] = r[4] * a,
                n[5] = r[5] * a,
                n[6] = r[6] * a,
                n[7] = 0,
                n[8] = r[8] * o,
                n[9] = r[9] * o,
                n[10] = r[10] * o,
                n[11] = 0,
                n[12] = 0,
                n[13] = 0,
                n[14] = 0,
                n[15] = 1,
                this
            }
        }(),
        makeRotationFromEuler: function(t) {
            t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            var e = this.elements
              , n = t.x
              , r = t.y
              , i = t.z
              , a = Math.cos(n)
              , o = Math.sin(n)
              , s = Math.cos(r)
              , c = Math.sin(r)
              , u = Math.cos(i)
              , h = Math.sin(i);
            if ("XYZ" === t.order) {
                var l = a * u
                  , d = a * h
                  , p = o * u
                  , f = o * h;
                e[0] = s * u,
                e[4] = -s * h,
                e[8] = c,
                e[1] = d + p * c,
                e[5] = l - f * c,
                e[9] = -o * s,
                e[2] = f - l * c,
                e[6] = p + d * c,
                e[10] = a * s
            } else if ("YXZ" === t.order) {
                var m = s * u
                  , g = s * h
                  , v = c * u
                  , y = c * h;
                e[0] = m + y * o,
                e[4] = v * o - g,
                e[8] = a * c,
                e[1] = a * h,
                e[5] = a * u,
                e[9] = -o,
                e[2] = g * o - v,
                e[6] = y + m * o,
                e[10] = a * s
            } else if ("ZXY" === t.order) {
                m = s * u,
                g = s * h,
                v = c * u,
                y = c * h;
                e[0] = m - y * o,
                e[4] = -a * h,
                e[8] = v + g * o,
                e[1] = g + v * o,
                e[5] = a * u,
                e[9] = y - m * o,
                e[2] = -a * c,
                e[6] = o,
                e[10] = a * s
            } else if ("ZYX" === t.order) {
                l = a * u,
                d = a * h,
                p = o * u,
                f = o * h;
                e[0] = s * u,
                e[4] = p * c - d,
                e[8] = l * c + f,
                e[1] = s * h,
                e[5] = f * c + l,
                e[9] = d * c - p,
                e[2] = -c,
                e[6] = o * s,
                e[10] = a * s
            } else if ("YZX" === t.order) {
                var x = a * s
                  , b = a * c
                  , w = o * s
                  , _ = o * c;
                e[0] = s * u,
                e[4] = _ - x * h,
                e[8] = w * h + b,
                e[1] = h,
                e[5] = a * u,
                e[9] = -o * u,
                e[2] = -c * u,
                e[6] = b * h + w,
                e[10] = x - _ * h
            } else if ("XZY" === t.order) {
                x = a * s,
                b = a * c,
                w = o * s,
                _ = o * c;
                e[0] = s * u,
                e[4] = -h,
                e[8] = c * u,
                e[1] = x * h + _,
                e[5] = a * u,
                e[9] = b * h - w,
                e[2] = w * h - b,
                e[6] = o * u,
                e[10] = _ * h + x
            }
            return e[3] = 0,
            e[7] = 0,
            e[11] = 0,
            e[12] = 0,
            e[13] = 0,
            e[14] = 0,
            e[15] = 1,
            this
        },
        makeRotationFromQuaternion: (tn = new We(0,0,0),
        en = new We(1,1,1),
        function(t) {
            return this.compose(tn, t, en)
        }
        ),
        lookAt: (Qe = new We,
        Ke = new We,
        $e = new We,
        function(t, e, n) {
            var r = this.elements;
            return $e.subVectors(t, e),
            0 === $e.lengthSq() && ($e.z = 1),
            $e.normalize(),
            Qe.crossVectors(n, $e),
            0 === Qe.lengthSq() && (1 === Math.abs(n.z) ? $e.x += 1e-4 : $e.z += 1e-4,
            $e.normalize(),
            Qe.crossVectors(n, $e)),
            Qe.normalize(),
            Ke.crossVectors($e, Qe),
            r[0] = Qe.x,
            r[4] = Ke.x,
            r[8] = $e.x,
            r[1] = Qe.y,
            r[5] = Ke.y,
            r[9] = $e.y,
            r[2] = Qe.z,
            r[6] = Ke.z,
            r[10] = $e.z,
            this
        }
        ),
        multiply: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),
            this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
        },
        premultiply: function(t) {
            return this.multiplyMatrices(t, this)
        },
        multiplyMatrices: function(t, e) {
            var n = t.elements
              , r = e.elements
              , i = this.elements
              , a = n[0]
              , o = n[4]
              , s = n[8]
              , c = n[12]
              , u = n[1]
              , h = n[5]
              , l = n[9]
              , d = n[13]
              , p = n[2]
              , f = n[6]
              , m = n[10]
              , g = n[14]
              , v = n[3]
              , y = n[7]
              , x = n[11]
              , b = n[15]
              , w = r[0]
              , _ = r[4]
              , M = r[8]
              , E = r[12]
              , S = r[1]
              , T = r[5]
              , A = r[9]
              , L = r[13]
              , R = r[2]
              , P = r[6]
              , C = r[10]
              , O = r[14]
              , I = r[3]
              , D = r[7]
              , N = r[11]
              , B = r[15];
            return i[0] = a * w + o * S + s * R + c * I,
            i[4] = a * _ + o * T + s * P + c * D,
            i[8] = a * M + o * A + s * C + c * N,
            i[12] = a * E + o * L + s * O + c * B,
            i[1] = u * w + h * S + l * R + d * I,
            i[5] = u * _ + h * T + l * P + d * D,
            i[9] = u * M + h * A + l * C + d * N,
            i[13] = u * E + h * L + l * O + d * B,
            i[2] = p * w + f * S + m * R + g * I,
            i[6] = p * _ + f * T + m * P + g * D,
            i[10] = p * M + f * A + m * C + g * N,
            i[14] = p * E + f * L + m * O + g * B,
            i[3] = v * w + y * S + x * R + b * I,
            i[7] = v * _ + y * T + x * P + b * D,
            i[11] = v * M + y * A + x * C + b * N,
            i[15] = v * E + y * L + x * O + b * B,
            this
        },
        multiplyScalar: function(t) {
            var e = this.elements;
            return e[0] *= t,
            e[4] *= t,
            e[8] *= t,
            e[12] *= t,
            e[1] *= t,
            e[5] *= t,
            e[9] *= t,
            e[13] *= t,
            e[2] *= t,
            e[6] *= t,
            e[10] *= t,
            e[14] *= t,
            e[3] *= t,
            e[7] *= t,
            e[11] *= t,
            e[15] *= t,
            this
        },
        applyToBufferAttribute: function() {
            var t = new We;
            return function(e) {
                for (var n = 0, r = e.count; n < r; n++)
                    t.x = e.getX(n),
                    t.y = e.getY(n),
                    t.z = e.getZ(n),
                    t.applyMatrix4(this),
                    e.setXYZ(n, t.x, t.y, t.z);
                return e
            }
        }(),
        determinant: function() {
            var t = this.elements
              , e = t[0]
              , n = t[4]
              , r = t[8]
              , i = t[12]
              , a = t[1]
              , o = t[5]
              , s = t[9]
              , c = t[13]
              , u = t[2]
              , h = t[6]
              , l = t[10]
              , d = t[14];
            return t[3] * (+i * s * h - r * c * h - i * o * l + n * c * l + r * o * d - n * s * d) + t[7] * (+e * s * d - e * c * l + i * a * l - r * a * d + r * c * u - i * s * u) + t[11] * (+e * c * h - e * o * d - i * a * h + n * a * d + i * o * u - n * c * u) + t[15] * (-r * o * u - e * s * h + e * o * l + r * a * h - n * a * l + n * s * u)
        },
        transpose: function() {
            var t, e = this.elements;
            return t = e[1],
            e[1] = e[4],
            e[4] = t,
            t = e[2],
            e[2] = e[8],
            e[8] = t,
            t = e[6],
            e[6] = e[9],
            e[9] = t,
            t = e[3],
            e[3] = e[12],
            e[12] = t,
            t = e[7],
            e[7] = e[13],
            e[13] = t,
            t = e[11],
            e[11] = e[14],
            e[14] = t,
            this
        },
        setPosition: function(t, e, n) {
            var r = this.elements;
            return t.isVector3 ? (r[12] = t.x,
            r[13] = t.y,
            r[14] = t.z) : (r[12] = t,
            r[13] = e,
            r[14] = n),
            this
        },
        getInverse: function(t, e) {
            var n = this.elements
              , r = t.elements
              , i = r[0]
              , a = r[1]
              , o = r[2]
              , s = r[3]
              , c = r[4]
              , u = r[5]
              , h = r[6]
              , l = r[7]
              , d = r[8]
              , p = r[9]
              , f = r[10]
              , m = r[11]
              , g = r[12]
              , v = r[13]
              , y = r[14]
              , x = r[15]
              , b = p * y * l - v * f * l + v * h * m - u * y * m - p * h * x + u * f * x
              , w = g * f * l - d * y * l - g * h * m + c * y * m + d * h * x - c * f * x
              , _ = d * v * l - g * p * l + g * u * m - c * v * m - d * u * x + c * p * x
              , M = g * p * h - d * v * h - g * u * f + c * v * f + d * u * y - c * p * y
              , E = i * b + a * w + o * _ + s * M;
            if (0 === E) {
                var S = "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0";
                if (!0 === e)
                    throw new Error(S);
                return console.warn(S),
                this.identity()
            }
            var T = 1 / E;
            return n[0] = b * T,
            n[1] = (v * f * s - p * y * s - v * o * m + a * y * m + p * o * x - a * f * x) * T,
            n[2] = (u * y * s - v * h * s + v * o * l - a * y * l - u * o * x + a * h * x) * T,
            n[3] = (p * h * s - u * f * s - p * o * l + a * f * l + u * o * m - a * h * m) * T,
            n[4] = w * T,
            n[5] = (d * y * s - g * f * s + g * o * m - i * y * m - d * o * x + i * f * x) * T,
            n[6] = (g * h * s - c * y * s - g * o * l + i * y * l + c * o * x - i * h * x) * T,
            n[7] = (c * f * s - d * h * s + d * o * l - i * f * l - c * o * m + i * h * m) * T,
            n[8] = _ * T,
            n[9] = (g * p * s - d * v * s - g * a * m + i * v * m + d * a * x - i * p * x) * T,
            n[10] = (c * v * s - g * u * s + g * a * l - i * v * l - c * a * x + i * u * x) * T,
            n[11] = (d * u * s - c * p * s - d * a * l + i * p * l + c * a * m - i * u * m) * T,
            n[12] = M * T,
            n[13] = (d * v * o - g * p * o + g * a * f - i * v * f - d * a * y + i * p * y) * T,
            n[14] = (g * u * o - c * v * o - g * a * h + i * v * h + c * a * y - i * u * y) * T,
            n[15] = (c * p * o - d * u * o + d * a * h - i * p * h - c * a * f + i * u * f) * T,
            this
        },
        scale: function(t) {
            var e = this.elements
              , n = t.x
              , r = t.y
              , i = t.z;
            return e[0] *= n,
            e[4] *= r,
            e[8] *= i,
            e[1] *= n,
            e[5] *= r,
            e[9] *= i,
            e[2] *= n,
            e[6] *= r,
            e[10] *= i,
            e[3] *= n,
            e[7] *= r,
            e[11] *= i,
            this
        },
        getMaxScaleOnAxis: function() {
            var t = this.elements
              , e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2]
              , n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6]
              , r = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
            return Math.sqrt(Math.max(e, n, r))
        },
        makeTranslation: function(t, e, n) {
            return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1),
            this
        },
        makeRotationX: function(t) {
            var e = Math.cos(t)
              , n = Math.sin(t);
            return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1),
            this
        },
        makeRotationY: function(t) {
            var e = Math.cos(t)
              , n = Math.sin(t);
            return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1),
            this
        },
        makeRotationZ: function(t) {
            var e = Math.cos(t)
              , n = Math.sin(t);
            return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
            this
        },
        makeRotationAxis: function(t, e) {
            var n = Math.cos(e)
              , r = Math.sin(e)
              , i = 1 - n
              , a = t.x
              , o = t.y
              , s = t.z
              , c = i * a
              , u = i * o;
            return this.set(c * a + n, c * o - r * s, c * s + r * o, 0, c * o + r * s, u * o + n, u * s - r * a, 0, c * s - r * o, u * s + r * a, i * s * s + n, 0, 0, 0, 0, 1),
            this
        },
        makeScale: function(t, e, n) {
            return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1),
            this
        },
        makeShear: function(t, e, n) {
            return this.set(1, e, n, 0, t, 1, n, 0, t, e, 1, 0, 0, 0, 0, 1),
            this
        },
        compose: function(t, e, n) {
            var r = this.elements
              , i = e._x
              , a = e._y
              , o = e._z
              , s = e._w
              , c = i + i
              , u = a + a
              , h = o + o
              , l = i * c
              , d = i * u
              , p = i * h
              , f = a * u
              , m = a * h
              , g = o * h
              , v = s * c
              , y = s * u
              , x = s * h
              , b = n.x
              , w = n.y
              , _ = n.z;
            return r[0] = (1 - (f + g)) * b,
            r[1] = (d + x) * b,
            r[2] = (p - y) * b,
            r[3] = 0,
            r[4] = (d - x) * w,
            r[5] = (1 - (l + g)) * w,
            r[6] = (m + v) * w,
            r[7] = 0,
            r[8] = (p + y) * _,
            r[9] = (m - v) * _,
            r[10] = (1 - (l + f)) * _,
            r[11] = 0,
            r[12] = t.x,
            r[13] = t.y,
            r[14] = t.z,
            r[15] = 1,
            this
        },
        decompose: (Je = new We,
        Ze = new hn,
        function(t, e, n) {
            var r = this.elements
              , i = Je.set(r[0], r[1], r[2]).length()
              , a = Je.set(r[4], r[5], r[6]).length()
              , o = Je.set(r[8], r[9], r[10]).length();
            this.determinant() < 0 && (i = -i),
            t.x = r[12],
            t.y = r[13],
            t.z = r[14],
            Ze.copy(this);
            var s = 1 / i
              , c = 1 / a
              , u = 1 / o;
            return Ze.elements[0] *= s,
            Ze.elements[1] *= s,
            Ze.elements[2] *= s,
            Ze.elements[4] *= c,
            Ze.elements[5] *= c,
            Ze.elements[6] *= c,
            Ze.elements[8] *= u,
            Ze.elements[9] *= u,
            Ze.elements[10] *= u,
            e.setFromRotationMatrix(Ze),
            n.x = i,
            n.y = a,
            n.z = o,
            this
        }
        ),
        makePerspective: function(t, e, n, r, i, a) {
            void 0 === a && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
            var o = this.elements
              , s = 2 * i / (e - t)
              , c = 2 * i / (n - r)
              , u = (e + t) / (e - t)
              , h = (n + r) / (n - r)
              , l = -(a + i) / (a - i)
              , d = -2 * a * i / (a - i);
            return o[0] = s,
            o[4] = 0,
            o[8] = u,
            o[12] = 0,
            o[1] = 0,
            o[5] = c,
            o[9] = h,
            o[13] = 0,
            o[2] = 0,
            o[6] = 0,
            o[10] = l,
            o[14] = d,
            o[3] = 0,
            o[7] = 0,
            o[11] = -1,
            o[15] = 0,
            this
        },
        makeOrthographic: function(t, e, n, r, i, a) {
            var o = this.elements
              , s = 1 / (e - t)
              , c = 1 / (n - r)
              , u = 1 / (a - i)
              , h = (e + t) * s
              , l = (n + r) * c
              , d = (a + i) * u;
            return o[0] = 2 * s,
            o[4] = 0,
            o[8] = 0,
            o[12] = -h,
            o[1] = 0,
            o[5] = 2 * c,
            o[9] = 0,
            o[13] = -l,
            o[2] = 0,
            o[6] = 0,
            o[10] = -2 * u,
            o[14] = -d,
            o[3] = 0,
            o[7] = 0,
            o[11] = 0,
            o[15] = 1,
            this
        },
        equals: function(t) {
            for (var e = this.elements, n = t.elements, r = 0; r < 16; r++)
                if (e[r] !== n[r])
                    return !1;
            return !0
        },
        fromArray: function(t, e) {
            void 0 === e && (e = 0);
            for (var n = 0; n < 16; n++)
                this.elements[n] = t[n + e];
            return this
        },
        toArray: function(t, e) {
            void 0 === t && (t = []),
            void 0 === e && (e = 0);
            var n = this.elements;
            return t[e] = n[0],
            t[e + 1] = n[1],
            t[e + 2] = n[2],
            t[e + 3] = n[3],
            t[e + 4] = n[4],
            t[e + 5] = n[5],
            t[e + 6] = n[6],
            t[e + 7] = n[7],
            t[e + 8] = n[8],
            t[e + 9] = n[9],
            t[e + 10] = n[10],
            t[e + 11] = n[11],
            t[e + 12] = n[12],
            t[e + 13] = n[13],
            t[e + 14] = n[14],
            t[e + 15] = n[15],
            t
        }
    }),
    ln.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"],
    ln.DefaultOrder = "XYZ",
    Object.defineProperties(ln.prototype, {
        x: {
            get: function() {
                return this._x
            },
            set: function(t) {
                this._x = t,
                this._onChangeCallback()
            }
        },
        y: {
            get: function() {
                return this._y
            },
            set: function(t) {
                this._y = t,
                this._onChangeCallback()
            }
        },
        z: {
            get: function() {
                return this._z
            },
            set: function(t) {
                this._z = t,
                this._onChangeCallback()
            }
        },
        order: {
            get: function() {
                return this._order
            },
            set: function(t) {
                this._order = t,
                this._onChangeCallback()
            }
        }
    }),
    Object.assign(ln.prototype, {
        isEuler: !0,
        set: function(t, e, n, r) {
            return this._x = t,
            this._y = e,
            this._z = n,
            this._order = r || this._order,
            this._onChangeCallback(),
            this
        },
        clone: function() {
            return new this.constructor(this._x,this._y,this._z,this._order)
        },
        copy: function(t) {
            return this._x = t._x,
            this._y = t._y,
            this._z = t._z,
            this._order = t._order,
            this._onChangeCallback(),
            this
        },
        setFromRotationMatrix: function(t, e, n) {
            var r = Ve.clamp
              , i = t.elements
              , a = i[0]
              , o = i[4]
              , s = i[8]
              , c = i[1]
              , u = i[5]
              , h = i[9]
              , l = i[2]
              , d = i[6]
              , p = i[10];
            return "XYZ" === (e = e || this._order) ? (this._y = Math.asin(r(s, -1, 1)),
            Math.abs(s) < .99999 ? (this._x = Math.atan2(-h, p),
            this._z = Math.atan2(-o, a)) : (this._x = Math.atan2(d, u),
            this._z = 0)) : "YXZ" === e ? (this._x = Math.asin(-r(h, -1, 1)),
            Math.abs(h) < .99999 ? (this._y = Math.atan2(s, p),
            this._z = Math.atan2(c, u)) : (this._y = Math.atan2(-l, a),
            this._z = 0)) : "ZXY" === e ? (this._x = Math.asin(r(d, -1, 1)),
            Math.abs(d) < .99999 ? (this._y = Math.atan2(-l, p),
            this._z = Math.atan2(-o, u)) : (this._y = 0,
            this._z = Math.atan2(c, a))) : "ZYX" === e ? (this._y = Math.asin(-r(l, -1, 1)),
            Math.abs(l) < .99999 ? (this._x = Math.atan2(d, p),
            this._z = Math.atan2(c, a)) : (this._x = 0,
            this._z = Math.atan2(-o, u))) : "YZX" === e ? (this._z = Math.asin(r(c, -1, 1)),
            Math.abs(c) < .99999 ? (this._x = Math.atan2(-h, u),
            this._y = Math.atan2(-l, a)) : (this._x = 0,
            this._y = Math.atan2(s, p))) : "XZY" === e ? (this._z = Math.asin(-r(o, -1, 1)),
            Math.abs(o) < .99999 ? (this._x = Math.atan2(d, u),
            this._y = Math.atan2(s, a)) : (this._x = Math.atan2(-h, p),
            this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + e),
            this._order = e,
            !1 !== n && this._onChangeCallback(),
            this
        },
        setFromQuaternion: function() {
            var t = new hn;
            return function(e, n, r) {
                return t.makeRotationFromQuaternion(e),
                this.setFromRotationMatrix(t, n, r)
            }
        }(),
        setFromVector3: function(t, e) {
            return this.set(t.x, t.y, t.z, e || this._order)
        },
        reorder: (nn = new je,
        function(t) {
            return nn.setFromEuler(this),
            this.setFromQuaternion(nn, t)
        }
        ),
        equals: function(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
        },
        fromArray: function(t) {
            return this._x = t[0],
            this._y = t[1],
            this._z = t[2],
            void 0 !== t[3] && (this._order = t[3]),
            this._onChangeCallback(),
            this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []),
            void 0 === e && (e = 0),
            t[e] = this._x,
            t[e + 1] = this._y,
            t[e + 2] = this._z,
            t[e + 3] = this._order,
            t
        },
        toVector3: function(t) {
            return t ? t.set(this._x, this._y, this._z) : new We(this._x,this._y,this._z)
        },
        _onChange: function(t) {
            return this._onChangeCallback = t,
            this
        },
        _onChangeCallback: function() {}
    }),
    Object.assign(dn.prototype, {
        set: function(t) {
            this.mask = 1 << t | 0
        },
        enable: function(t) {
            this.mask |= 1 << t | 0
        },
        toggle: function(t) {
            this.mask ^= 1 << t | 0
        },
        disable: function(t) {
            this.mask &= ~(1 << t | 0)
        },
        test: function(t) {
            return 0 != (this.mask & t.mask)
        }
    });
    var pn, fn, mn, gn, vn, yn, xn, bn, wn, _n, Mn, En, Sn, Tn, An, Ln, Rn, Pn, Cn, On, In = 0;
    function Dn() {
        Object.defineProperty(this, "id", {
            value: In++
        }),
        this.uuid = Ve.generateUUID(),
        this.name = "",
        this.type = "Object3D",
        this.parent = null,
        this.children = [],
        this.up = Dn.DefaultUp.clone();
        var t = new We
          , e = new ln
          , n = new je
          , r = new We(1,1,1);
        e._onChange(function() {
            n.setFromEuler(e, !1)
        }),
        n._onChange(function() {
            e.setFromQuaternion(n, void 0, !1)
        }),
        Object.defineProperties(this, {
            position: {
                configurable: !0,
                enumerable: !0,
                value: t
            },
            rotation: {
                configurable: !0,
                enumerable: !0,
                value: e
            },
            quaternion: {
                configurable: !0,
                enumerable: !0,
                value: n
            },
            scale: {
                configurable: !0,
                enumerable: !0,
                value: r
            },
            modelViewMatrix: {
                value: new hn
            },
            normalMatrix: {
                value: new qe
            }
        }),
        this.matrix = new hn,
        this.matrixWorld = new hn,
        this.matrixAutoUpdate = Dn.DefaultMatrixAutoUpdate,
        this.matrixWorldNeedsUpdate = !1,
        this.layers = new dn,
        this.visible = !0,
        this.castShadow = !1,
        this.receiveShadow = !1,
        this.frustumCulled = !0,
        this.renderOrder = 0,
        this.userData = {}
    }
    function Nn() {
        Dn.call(this),
        this.type = "Scene",
        this.background = null,
        this.fog = null,
        this.overrideMaterial = null,
        this.autoUpdate = !0,
        "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
            detail: this
        }))
    }
    function Bn(t, e) {
        this.min = void 0 !== t ? t : new We(1 / 0,1 / 0,1 / 0),
        this.max = void 0 !== e ? e : new We(-1 / 0,-1 / 0,-1 / 0)
    }
    function zn(t, e) {
        this.center = void 0 !== t ? t : new We,
        this.radius = void 0 !== e ? e : 0
    }
    function Un(t, e) {
        this.origin = void 0 !== t ? t : new We,
        this.direction = void 0 !== e ? e : new We
    }
    function Gn(t, e, n) {
        this.a = void 0 !== t ? t : new We,
        this.b = void 0 !== e ? e : new We,
        this.c = void 0 !== n ? n : new We
    }
    Dn.DefaultUp = new We(0,1,0),
    Dn.DefaultMatrixAutoUpdate = !0,
    Dn.prototype = Object.assign(Object.create(r.prototype), {
        constructor: Dn,
        isObject3D: !0,
        onBeforeRender: function() {},
        onAfterRender: function() {},
        applyMatrix: function(t) {
            this.matrixAutoUpdate && this.updateMatrix(),
            this.matrix.premultiply(t),
            this.matrix.decompose(this.position, this.quaternion, this.scale)
        },
        applyQuaternion: function(t) {
            return this.quaternion.premultiply(t),
            this
        },
        setRotationFromAxisAngle: function(t, e) {
            this.quaternion.setFromAxisAngle(t, e)
        },
        setRotationFromEuler: function(t) {
            this.quaternion.setFromEuler(t, !0)
        },
        setRotationFromMatrix: function(t) {
            this.quaternion.setFromRotationMatrix(t)
        },
        setRotationFromQuaternion: function(t) {
            this.quaternion.copy(t)
        },
        rotateOnAxis: (vn = new je,
        function(t, e) {
            return vn.setFromAxisAngle(t, e),
            this.quaternion.multiply(vn),
            this
        }
        ),
        rotateOnWorldAxis: function() {
            var t = new je;
            return function(e, n) {
                return t.setFromAxisAngle(e, n),
                this.quaternion.premultiply(t),
                this
            }
        }(),
        rotateX: function() {
            var t = new We(1,0,0);
            return function(e) {
                return this.rotateOnAxis(t, e)
            }
        }(),
        rotateY: function() {
            var t = new We(0,1,0);
            return function(e) {
                return this.rotateOnAxis(t, e)
            }
        }(),
        rotateZ: function() {
            var t = new We(0,0,1);
            return function(e) {
                return this.rotateOnAxis(t, e)
            }
        }(),
        translateOnAxis: function() {
            var t = new We;
            return function(e, n) {
                return t.copy(e).applyQuaternion(this.quaternion),
                this.position.add(t.multiplyScalar(n)),
                this
            }
        }(),
        translateX: function() {
            var t = new We(1,0,0);
            return function(e) {
                return this.translateOnAxis(t, e)
            }
        }(),
        translateY: function() {
            var t = new We(0,1,0);
            return function(e) {
                return this.translateOnAxis(t, e)
            }
        }(),
        translateZ: function() {
            var t = new We(0,0,1);
            return function(e) {
                return this.translateOnAxis(t, e)
            }
        }(),
        localToWorld: function(t) {
            return t.applyMatrix4(this.matrixWorld)
        },
        worldToLocal: (gn = new hn,
        function(t) {
            return t.applyMatrix4(gn.getInverse(this.matrixWorld))
        }
        ),
        lookAt: function() {
            var t = new je
              , e = new hn
              , n = new We
              , r = new We;
            return function(i, a, o) {
                i.isVector3 ? n.copy(i) : n.set(i, a, o);
                var s = this.parent;
                this.updateWorldMatrix(!0, !1),
                r.setFromMatrixPosition(this.matrixWorld),
                this.isCamera || this.isLight ? e.lookAt(r, n, this.up) : e.lookAt(n, r, this.up),
                this.quaternion.setFromRotationMatrix(e),
                s && (e.extractRotation(s.matrixWorld),
                t.setFromRotationMatrix(e),
                this.quaternion.premultiply(t.inverse()))
            }
        }(),
        add: function(t) {
            if (arguments.length > 1) {
                for (var e = 0; e < arguments.length; e++)
                    this.add(arguments[e]);
                return this
            }
            return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t),
            this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t),
            t.parent = this,
            this.children.push(t),
            t.dispatchEvent({
                type: "added"
            })) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t),
            this)
        },
        remove: function(t) {
            if (arguments.length > 1) {
                for (var e = 0; e < arguments.length; e++)
                    this.remove(arguments[e]);
                return this
            }
            var n = this.children.indexOf(t);
            return -1 !== n && (t.parent = null,
            this.children.splice(n, 1),
            t.dispatchEvent({
                type: "removed"
            })),
            this
        },
        attach: (mn = new hn,
        function(t) {
            return this.updateWorldMatrix(!0, !1),
            mn.getInverse(this.matrixWorld),
            null !== t.parent && (t.parent.updateWorldMatrix(!0, !1),
            mn.multiply(t.parent.matrixWorld)),
            t.applyMatrix(mn),
            t.updateWorldMatrix(!1, !1),
            this.add(t),
            this
        }
        ),
        getObjectById: function(t) {
            return this.getObjectByProperty("id", t)
        },
        getObjectByName: function(t) {
            return this.getObjectByProperty("name", t)
        },
        getObjectByProperty: function(t, e) {
            if (this[t] === e)
                return this;
            for (var n = 0, r = this.children.length; n < r; n++) {
                var i = this.children[n].getObjectByProperty(t, e);
                if (void 0 !== i)
                    return i
            }
        },
        getWorldPosition: function(t) {
            return void 0 === t && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"),
            t = new We),
            this.updateMatrixWorld(!0),
            t.setFromMatrixPosition(this.matrixWorld)
        },
        getWorldQuaternion: (pn = new We,
        fn = new We,
        function(t) {
            return void 0 === t && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),
            t = new je),
            this.updateMatrixWorld(!0),
            this.matrixWorld.decompose(pn, t, fn),
            t
        }
        ),
        getWorldScale: function() {
            var t = new We
              , e = new je;
            return function(n) {
                return void 0 === n && (console.warn("THREE.Object3D: .getWorldScale() target is now required"),
                n = new We),
                this.updateMatrixWorld(!0),
                this.matrixWorld.decompose(t, e, n),
                n
            }
        }(),
        getWorldDirection: function(t) {
            void 0 === t && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"),
            t = new We),
            this.updateMatrixWorld(!0);
            var e = this.matrixWorld.elements;
            return t.set(e[8], e[9], e[10]).normalize()
        },
        raycast: function() {},
        traverse: function(t) {
            t(this);
            for (var e = this.children, n = 0, r = e.length; n < r; n++)
                e[n].traverse(t)
        },
        traverseVisible: function(t) {
            if (!1 !== this.visible) {
                t(this);
                for (var e = this.children, n = 0, r = e.length; n < r; n++)
                    e[n].traverseVisible(t)
            }
        },
        traverseAncestors: function(t) {
            var e = this.parent;
            null !== e && (t(e),
            e.traverseAncestors(t))
        },
        updateMatrix: function() {
            this.matrix.compose(this.position, this.quaternion, this.scale),
            this.matrixWorldNeedsUpdate = !0
        },
        updateMatrixWorld: function(t) {
            this.matrixAutoUpdate && this.updateMatrix(),
            (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
            this.matrixWorldNeedsUpdate = !1,
            t = !0);
            for (var e = this.children, n = 0, r = e.length; n < r; n++)
                e[n].updateMatrixWorld(t)
        },
        updateWorldMatrix: function(t, e) {
            var n = this.parent;
            if (!0 === t && null !== n && n.updateWorldMatrix(!0, !1),
            this.matrixAutoUpdate && this.updateMatrix(),
            null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
            !0 === e)
                for (var r = this.children, i = 0, a = r.length; i < a; i++)
                    r[i].updateWorldMatrix(!1, !0)
        },
        toJSON: function(t) {
            var e = void 0 === t || "string" == typeof t
              , n = {};
            e && (t = {
                geometries: {},
                materials: {},
                textures: {},
                images: {},
                shapes: {}
            },
            n.metadata = {
                version: 4.5,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            var r = {};
            function i(e, n) {
                return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)),
                n.uuid
            }
            if (r.uuid = this.uuid,
            r.type = this.type,
            "" !== this.name && (r.name = this.name),
            !0 === this.castShadow && (r.castShadow = !0),
            !0 === this.receiveShadow && (r.receiveShadow = !0),
            !1 === this.visible && (r.visible = !1),
            !1 === this.frustumCulled && (r.frustumCulled = !1),
            0 !== this.renderOrder && (r.renderOrder = this.renderOrder),
            "{}" !== JSON.stringify(this.userData) && (r.userData = this.userData),
            r.layers = this.layers.mask,
            r.matrix = this.matrix.toArray(),
            !1 === this.matrixAutoUpdate && (r.matrixAutoUpdate = !1),
            this.isMesh && this.drawMode !== Ae && (r.drawMode = this.drawMode),
            this.isMesh || this.isLine || this.isPoints) {
                r.geometry = i(t.geometries, this.geometry);
                var a = this.geometry.parameters;
                if (void 0 !== a && void 0 !== a.shapes) {
                    var o = a.shapes;
                    if (Array.isArray(o))
                        for (var s = 0, c = o.length; s < c; s++) {
                            var u = o[s];
                            i(t.shapes, u)
                        }
                    else
                        i(t.shapes, o)
                }
            }
            if (void 0 !== this.material)
                if (Array.isArray(this.material)) {
                    var h = [];
                    for (s = 0,
                    c = this.material.length; s < c; s++)
                        h.push(i(t.materials, this.material[s]));
                    r.material = h
                } else
                    r.material = i(t.materials, this.material);
            if (this.children.length > 0) {
                r.children = [];
                for (s = 0; s < this.children.length; s++)
                    r.children.push(this.children[s].toJSON(t).object)
            }
            if (e) {
                var l = m(t.geometries)
                  , d = m(t.materials)
                  , p = m(t.textures)
                  , f = m(t.images);
                o = m(t.shapes);
                l.length > 0 && (n.geometries = l),
                d.length > 0 && (n.materials = d),
                p.length > 0 && (n.textures = p),
                f.length > 0 && (n.images = f),
                o.length > 0 && (n.shapes = o)
            }
            return n.object = r,
            n;
            function m(t) {
                var e = [];
                for (var n in t) {
                    var r = t[n];
                    delete r.metadata,
                    e.push(r)
                }
                return e
            }
        },
        clone: function(t) {
            return (new this.constructor).copy(this, t)
        },
        copy: function(t, e) {
            if (void 0 === e && (e = !0),
            this.name = t.name,
            this.up.copy(t.up),
            this.position.copy(t.position),
            this.quaternion.copy(t.quaternion),
            this.scale.copy(t.scale),
            this.matrix.copy(t.matrix),
            this.matrixWorld.copy(t.matrixWorld),
            this.matrixAutoUpdate = t.matrixAutoUpdate,
            this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate,
            this.layers.mask = t.layers.mask,
            this.visible = t.visible,
            this.castShadow = t.castShadow,
            this.receiveShadow = t.receiveShadow,
            this.frustumCulled = t.frustumCulled,
            this.renderOrder = t.renderOrder,
            this.userData = JSON.parse(JSON.stringify(t.userData)),
            !0 === e)
                for (var n = 0; n < t.children.length; n++) {
                    var r = t.children[n];
                    this.add(r.clone())
                }
            return this
        }
    }),
    Nn.prototype = Object.assign(Object.create(Dn.prototype), {
        constructor: Nn,
        isScene: !0,
        copy: function(t, e) {
            return Dn.prototype.copy.call(this, t, e),
            null !== t.background && (this.background = t.background.clone()),
            null !== t.fog && (this.fog = t.fog.clone()),
            null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()),
            this.autoUpdate = t.autoUpdate,
            this.matrixAutoUpdate = t.matrixAutoUpdate,
            this
        },
        toJSON: function(t) {
            var e = Dn.prototype.toJSON.call(this, t);
            return null !== this.background && (e.object.background = this.background.toJSON(t)),
            null !== this.fog && (e.object.fog = this.fog.toJSON()),
            e
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }),
    Object.assign(Bn.prototype, {
        isBox3: !0,
        set: function(t, e) {
            return this.min.copy(t),
            this.max.copy(e),
            this
        },
        setFromArray: function(t) {
            for (var e = 1 / 0, n = 1 / 0, r = 1 / 0, i = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = t.length; s < c; s += 3) {
                var u = t[s]
                  , h = t[s + 1]
                  , l = t[s + 2];
                u < e && (e = u),
                h < n && (n = h),
                l < r && (r = l),
                u > i && (i = u),
                h > a && (a = h),
                l > o && (o = l)
            }
            return this.min.set(e, n, r),
            this.max.set(i, a, o),
            this
        },
        setFromBufferAttribute: function(t) {
            for (var e = 1 / 0, n = 1 / 0, r = 1 / 0, i = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = t.count; s < c; s++) {
                var u = t.getX(s)
                  , h = t.getY(s)
                  , l = t.getZ(s);
                u < e && (e = u),
                h < n && (n = h),
                l < r && (r = l),
                u > i && (i = u),
                h > a && (a = h),
                l > o && (o = l)
            }
            return this.min.set(e, n, r),
            this.max.set(i, a, o),
            this
        },
        setFromPoints: function(t) {
            this.makeEmpty();
            for (var e = 0, n = t.length; e < n; e++)
                this.expandByPoint(t[e]);
            return this
        },
        setFromCenterAndSize: function() {
            var t = new We;
            return function(e, n) {
                var r = t.copy(n).multiplyScalar(.5);
                return this.min.copy(e).sub(r),
                this.max.copy(e).add(r),
                this
            }
        }(),
        setFromObject: function(t) {
            return this.makeEmpty(),
            this.expandByObject(t)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.min.copy(t.min),
            this.max.copy(t.max),
            this
        },
        makeEmpty: function() {
            return this.min.x = this.min.y = this.min.z = 1 / 0,
            this.max.x = this.max.y = this.max.z = -1 / 0,
            this
        },
        isEmpty: function() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
        },
        getCenter: function(t) {
            return void 0 === t && (console.warn("THREE.Box3: .getCenter() target is now required"),
            t = new We),
            this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        getSize: function(t) {
            return void 0 === t && (console.warn("THREE.Box3: .getSize() target is now required"),
            t = new We),
            this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
        },
        expandByPoint: function(t) {
            return this.min.min(t),
            this.max.max(t),
            this
        },
        expandByVector: function(t) {
            return this.min.sub(t),
            this.max.add(t),
            this
        },
        expandByScalar: function(t) {
            return this.min.addScalar(-t),
            this.max.addScalar(t),
            this
        },
        expandByObject: function() {
            var t, e, n, r = new We;
            function i(i) {
                var a = i.geometry;
                if (void 0 !== a)
                    if (a.isGeometry) {
                        var o = a.vertices;
                        for (e = 0,
                        n = o.length; e < n; e++)
                            r.copy(o[e]),
                            r.applyMatrix4(i.matrixWorld),
                            t.expandByPoint(r)
                    } else if (a.isBufferGeometry) {
                        var s = a.attributes.position;
                        if (void 0 !== s)
                            for (e = 0,
                            n = s.count; e < n; e++)
                                r.fromBufferAttribute(s, e).applyMatrix4(i.matrixWorld),
                                t.expandByPoint(r)
                    }
            }
            return function(e) {
                return t = this,
                e.updateMatrixWorld(!0),
                e.traverse(i),
                this
            }
        }(),
        containsPoint: function(t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
        },
        containsBox: function(t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
        },
        getParameter: function(t, e) {
            return void 0 === e && (console.warn("THREE.Box3: .getParameter() target is now required"),
            e = new We),
            e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
        },
        intersectsBox: function(t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
        },
        intersectsSphere: (xn = new We,
        function(t) {
            return this.clampPoint(t.center, xn),
            xn.distanceToSquared(t.center) <= t.radius * t.radius
        }
        ),
        intersectsPlane: function(t) {
            var e, n;
            return t.normal.x > 0 ? (e = t.normal.x * this.min.x,
            n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x,
            n = t.normal.x * this.min.x),
            t.normal.y > 0 ? (e += t.normal.y * this.min.y,
            n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y,
            n += t.normal.y * this.min.y),
            t.normal.z > 0 ? (e += t.normal.z * this.min.z,
            n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z,
            n += t.normal.z * this.min.z),
            e <= -t.constant && n >= -t.constant
        },
        intersectsTriangle: function() {
            var t = new We
              , e = new We
              , n = new We
              , r = new We
              , i = new We
              , a = new We
              , o = new We
              , s = new We
              , c = new We
              , u = new We;
            function h(r) {
                var i, a;
                for (i = 0,
                a = r.length - 3; i <= a; i += 3) {
                    o.fromArray(r, i);
                    var s = c.x * Math.abs(o.x) + c.y * Math.abs(o.y) + c.z * Math.abs(o.z)
                      , u = t.dot(o)
                      , h = e.dot(o)
                      , l = n.dot(o);
                    if (Math.max(-Math.max(u, h, l), Math.min(u, h, l)) > s)
                        return !1
                }
                return !0
            }
            return function(o) {
                if (this.isEmpty())
                    return !1;
                this.getCenter(s),
                c.subVectors(this.max, s),
                t.subVectors(o.a, s),
                e.subVectors(o.b, s),
                n.subVectors(o.c, s),
                r.subVectors(e, t),
                i.subVectors(n, e),
                a.subVectors(t, n);
                var l = [0, -r.z, r.y, 0, -i.z, i.y, 0, -a.z, a.y, r.z, 0, -r.x, i.z, 0, -i.x, a.z, 0, -a.x, -r.y, r.x, 0, -i.y, i.x, 0, -a.y, a.x, 0];
                return !!h(l) && (!!h(l = [1, 0, 0, 0, 1, 0, 0, 0, 1]) && (u.crossVectors(r, i),
                h(l = [u.x, u.y, u.z])))
            }
        }(),
        clampPoint: function(t, e) {
            return void 0 === e && (console.warn("THREE.Box3: .clampPoint() target is now required"),
            e = new We),
            e.copy(t).clamp(this.min, this.max)
        },
        distanceToPoint: function() {
            var t = new We;
            return function(e) {
                return t.copy(e).clamp(this.min, this.max).sub(e).length()
            }
        }(),
        getBoundingSphere: function() {
            var t = new We;
            return function(e) {
                return void 0 === e && console.error("THREE.Box3: .getBoundingSphere() target is now required"),
                this.getCenter(e.center),
                e.radius = .5 * this.getSize(t).length(),
                e
            }
        }(),
        intersect: function(t) {
            return this.min.max(t.min),
            this.max.min(t.max),
            this.isEmpty() && this.makeEmpty(),
            this
        },
        union: function(t) {
            return this.min.min(t.min),
            this.max.max(t.max),
            this
        },
        applyMatrix4: (yn = [new We, new We, new We, new We, new We, new We, new We, new We],
        function(t) {
            return this.isEmpty() ? this : (yn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
            yn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
            yn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
            yn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
            yn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
            yn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
            yn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
            yn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
            this.setFromPoints(yn),
            this)
        }
        ),
        translate: function(t) {
            return this.min.add(t),
            this.max.add(t),
            this
        },
        equals: function(t) {
            return t.min.equals(this.min) && t.max.equals(this.max)
        }
    }),
    Object.assign(zn.prototype, {
        set: function(t, e) {
            return this.center.copy(t),
            this.radius = e,
            this
        },
        setFromPoints: (bn = new Bn,
        function(t, e) {
            var n = this.center;
            void 0 !== e ? n.copy(e) : bn.setFromPoints(t).getCenter(n);
            for (var r = 0, i = 0, a = t.length; i < a; i++)
                r = Math.max(r, n.distanceToSquared(t[i]));
            return this.radius = Math.sqrt(r),
            this
        }
        ),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.center.copy(t.center),
            this.radius = t.radius,
            this
        },
        empty: function() {
            return this.radius <= 0
        },
        containsPoint: function(t) {
            return t.distanceToSquared(this.center) <= this.radius * this.radius
        },
        distanceToPoint: function(t) {
            return t.distanceTo(this.center) - this.radius
        },
        intersectsSphere: function(t) {
            var e = this.radius + t.radius;
            return t.center.distanceToSquared(this.center) <= e * e
        },
        intersectsBox: function(t) {
            return t.intersectsSphere(this)
        },
        intersectsPlane: function(t) {
            return Math.abs(t.distanceToPoint(this.center)) <= this.radius
        },
        clampPoint: function(t, e) {
            var n = this.center.distanceToSquared(t);
            return void 0 === e && (console.warn("THREE.Sphere: .clampPoint() target is now required"),
            e = new We),
            e.copy(t),
            n > this.radius * this.radius && (e.sub(this.center).normalize(),
            e.multiplyScalar(this.radius).add(this.center)),
            e
        },
        getBoundingBox: function(t) {
            return void 0 === t && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"),
            t = new Bn),
            t.set(this.center, this.center),
            t.expandByScalar(this.radius),
            t
        },
        applyMatrix4: function(t) {
            return this.center.applyMatrix4(t),
            this.radius = this.radius * t.getMaxScaleOnAxis(),
            this
        },
        translate: function(t) {
            return this.center.add(t),
            this
        },
        equals: function(t) {
            return t.center.equals(this.center) && t.radius === this.radius
        }
    }),
    Object.assign(Un.prototype, {
        set: function(t, e) {
            return this.origin.copy(t),
            this.direction.copy(e),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.origin.copy(t.origin),
            this.direction.copy(t.direction),
            this
        },
        at: function(t, e) {
            return void 0 === e && (console.warn("THREE.Ray: .at() target is now required"),
            e = new We),
            e.copy(this.direction).multiplyScalar(t).add(this.origin)
        },
        lookAt: function(t) {
            return this.direction.copy(t).sub(this.origin).normalize(),
            this
        },
        recast: function() {
            var t = new We;
            return function(e) {
                return this.origin.copy(this.at(e, t)),
                this
            }
        }(),
        closestPointToPoint: function(t, e) {
            void 0 === e && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"),
            e = new We),
            e.subVectors(t, this.origin);
            var n = e.dot(this.direction);
            return n < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(n).add(this.origin)
        },
        distanceToPoint: function(t) {
            return Math.sqrt(this.distanceSqToPoint(t))
        },
        distanceSqToPoint: function() {
            var t = new We;
            return function(e) {
                var n = t.subVectors(e, this.origin).dot(this.direction);
                return n < 0 ? this.origin.distanceToSquared(e) : (t.copy(this.direction).multiplyScalar(n).add(this.origin),
                t.distanceToSquared(e))
            }
        }(),
        distanceSqToSegment: (_n = new We,
        Mn = new We,
        En = new We,
        function(t, e, n, r) {
            _n.copy(t).add(e).multiplyScalar(.5),
            Mn.copy(e).sub(t).normalize(),
            En.copy(this.origin).sub(_n);
            var i, a, o, s, c = .5 * t.distanceTo(e), u = -this.direction.dot(Mn), h = En.dot(this.direction), l = -En.dot(Mn), d = En.lengthSq(), p = Math.abs(1 - u * u);
            if (p > 0)
                if (a = u * h - l,
                s = c * p,
                (i = u * l - h) >= 0)
                    if (a >= -s)
                        if (a <= s) {
                            var f = 1 / p;
                            o = (i *= f) * (i + u * (a *= f) + 2 * h) + a * (u * i + a + 2 * l) + d
                        } else
                            a = c,
                            o = -(i = Math.max(0, -(u * a + h))) * i + a * (a + 2 * l) + d;
                    else
                        a = -c,
                        o = -(i = Math.max(0, -(u * a + h))) * i + a * (a + 2 * l) + d;
                else
                    a <= -s ? o = -(i = Math.max(0, -(-u * c + h))) * i + (a = i > 0 ? -c : Math.min(Math.max(-c, -l), c)) * (a + 2 * l) + d : a <= s ? (i = 0,
                    o = (a = Math.min(Math.max(-c, -l), c)) * (a + 2 * l) + d) : o = -(i = Math.max(0, -(u * c + h))) * i + (a = i > 0 ? c : Math.min(Math.max(-c, -l), c)) * (a + 2 * l) + d;
            else
                a = u > 0 ? -c : c,
                o = -(i = Math.max(0, -(u * a + h))) * i + a * (a + 2 * l) + d;
            return n && n.copy(this.direction).multiplyScalar(i).add(this.origin),
            r && r.copy(Mn).multiplyScalar(a).add(_n),
            o
        }
        ),
        intersectSphere: function() {
            var t = new We;
            return function(e, n) {
                t.subVectors(e.center, this.origin);
                var r = t.dot(this.direction)
                  , i = t.dot(t) - r * r
                  , a = e.radius * e.radius;
                if (i > a)
                    return null;
                var o = Math.sqrt(a - i)
                  , s = r - o
                  , c = r + o;
                return s < 0 && c < 0 ? null : s < 0 ? this.at(c, n) : this.at(s, n)
            }
        }(),
        intersectsSphere: function(t) {
            return this.distanceSqToPoint(t.center) <= t.radius * t.radius
        },
        distanceToPlane: function(t) {
            var e = t.normal.dot(this.direction);
            if (0 === e)
                return 0 === t.distanceToPoint(this.origin) ? 0 : null;
            var n = -(this.origin.dot(t.normal) + t.constant) / e;
            return n >= 0 ? n : null
        },
        intersectPlane: function(t, e) {
            var n = this.distanceToPlane(t);
            return null === n ? null : this.at(n, e)
        },
        intersectsPlane: function(t) {
            var e = t.distanceToPoint(this.origin);
            return 0 === e || t.normal.dot(this.direction) * e < 0
        },
        intersectBox: function(t, e) {
            var n, r, i, a, o, s, c = 1 / this.direction.x, u = 1 / this.direction.y, h = 1 / this.direction.z, l = this.origin;
            return c >= 0 ? (n = (t.min.x - l.x) * c,
            r = (t.max.x - l.x) * c) : (n = (t.max.x - l.x) * c,
            r = (t.min.x - l.x) * c),
            u >= 0 ? (i = (t.min.y - l.y) * u,
            a = (t.max.y - l.y) * u) : (i = (t.max.y - l.y) * u,
            a = (t.min.y - l.y) * u),
            n > a || i > r ? null : ((i > n || n != n) && (n = i),
            (a < r || r != r) && (r = a),
            h >= 0 ? (o = (t.min.z - l.z) * h,
            s = (t.max.z - l.z) * h) : (o = (t.max.z - l.z) * h,
            s = (t.min.z - l.z) * h),
            n > s || o > r ? null : ((o > n || n != n) && (n = o),
            (s < r || r != r) && (r = s),
            r < 0 ? null : this.at(n >= 0 ? n : r, e)))
        },
        intersectsBox: (wn = new We,
        function(t) {
            return null !== this.intersectBox(t, wn)
        }
        ),
        intersectTriangle: function() {
            var t = new We
              , e = new We
              , n = new We
              , r = new We;
            return function(i, a, o, s, c) {
                e.subVectors(a, i),
                n.subVectors(o, i),
                r.crossVectors(e, n);
                var u, h = this.direction.dot(r);
                if (h > 0) {
                    if (s)
                        return null;
                    u = 1
                } else {
                    if (!(h < 0))
                        return null;
                    u = -1,
                    h = -h
                }
                t.subVectors(this.origin, i);
                var l = u * this.direction.dot(n.crossVectors(t, n));
                if (l < 0)
                    return null;
                var d = u * this.direction.dot(e.cross(t));
                if (d < 0)
                    return null;
                if (l + d > h)
                    return null;
                var p = -u * t.dot(r);
                return p < 0 ? null : this.at(p / h, c)
            }
        }(),
        applyMatrix4: function(t) {
            return this.origin.applyMatrix4(t),
            this.direction.transformDirection(t),
            this
        },
        equals: function(t) {
            return t.origin.equals(this.origin) && t.direction.equals(this.direction)
        }
    }),
    Object.assign(Gn, {
        getNormal: (Tn = new We,
        function(t, e, n, r) {
            void 0 === r && (console.warn("THREE.Triangle: .getNormal() target is now required"),
            r = new We),
            r.subVectors(n, e),
            Tn.subVectors(t, e),
            r.cross(Tn);
            var i = r.lengthSq();
            return i > 0 ? r.multiplyScalar(1 / Math.sqrt(i)) : r.set(0, 0, 0)
        }
        ),
        getBarycoord: function() {
            var t = new We
              , e = new We
              , n = new We;
            return function(r, i, a, o, s) {
                t.subVectors(o, i),
                e.subVectors(a, i),
                n.subVectors(r, i);
                var c = t.dot(t)
                  , u = t.dot(e)
                  , h = t.dot(n)
                  , l = e.dot(e)
                  , d = e.dot(n)
                  , p = c * l - u * u;
                if (void 0 === s && (console.warn("THREE.Triangle: .getBarycoord() target is now required"),
                s = new We),
                0 === p)
                    return s.set(-2, -1, -1);
                var f = 1 / p
                  , m = (l * h - u * d) * f
                  , g = (c * d - u * h) * f;
                return s.set(1 - m - g, g, m)
            }
        }(),
        containsPoint: function() {
            var t = new We;
            return function(e, n, r, i) {
                return Gn.getBarycoord(e, n, r, i, t),
                t.x >= 0 && t.y >= 0 && t.x + t.y <= 1
            }
        }(),
        getUV: (Sn = new We,
        function(t, e, n, r, i, a, o, s) {
            return this.getBarycoord(t, e, n, r, Sn),
            s.set(0, 0),
            s.addScaledVector(i, Sn.x),
            s.addScaledVector(a, Sn.y),
            s.addScaledVector(o, Sn.z),
            s
        }
        ),
        isFrontFacing: function() {
            var t = new We
              , e = new We;
            return function(n, r, i, a) {
                return t.subVectors(i, r),
                e.subVectors(n, r),
                t.cross(e).dot(a) < 0
            }
        }()
    }),
    Object.assign(Gn.prototype, {
        set: function(t, e, n) {
            return this.a.copy(t),
            this.b.copy(e),
            this.c.copy(n),
            this
        },
        setFromPointsAndIndices: function(t, e, n, r) {
            return this.a.copy(t[e]),
            this.b.copy(t[n]),
            this.c.copy(t[r]),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.a.copy(t.a),
            this.b.copy(t.b),
            this.c.copy(t.c),
            this
        },
        getArea: function() {
            var t = new We
              , e = new We;
            return function() {
                return t.subVectors(this.c, this.b),
                e.subVectors(this.a, this.b),
                .5 * t.cross(e).length()
            }
        }(),
        getMidpoint: function(t) {
            return void 0 === t && (console.warn("THREE.Triangle: .getMidpoint() target is now required"),
            t = new We),
            t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
        },
        getNormal: function(t) {
            return Gn.getNormal(this.a, this.b, this.c, t)
        },
        getPlane: function(t) {
            return void 0 === t && (console.warn("THREE.Triangle: .getPlane() target is now required"),
            t = new We),
            t.setFromCoplanarPoints(this.a, this.b, this.c)
        },
        getBarycoord: function(t, e) {
            return Gn.getBarycoord(t, this.a, this.b, this.c, e)
        },
        getUV: function(t, e, n, r, i) {
            return Gn.getUV(t, this.a, this.b, this.c, e, n, r, i)
        },
        containsPoint: function(t) {
            return Gn.containsPoint(t, this.a, this.b, this.c)
        },
        isFrontFacing: function(t) {
            return Gn.isFrontFacing(this.a, this.b, this.c, t)
        },
        intersectsBox: function(t) {
            return t.intersectsTriangle(this)
        },
        closestPointToPoint: (An = new We,
        Ln = new We,
        Rn = new We,
        Pn = new We,
        Cn = new We,
        On = new We,
        function(t, e) {
            void 0 === e && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),
            e = new We);
            var n, r, i = this.a, a = this.b, o = this.c;
            An.subVectors(a, i),
            Ln.subVectors(o, i),
            Pn.subVectors(t, i);
            var s = An.dot(Pn)
              , c = Ln.dot(Pn);
            if (s <= 0 && c <= 0)
                return e.copy(i);
            Cn.subVectors(t, a);
            var u = An.dot(Cn)
              , h = Ln.dot(Cn);
            if (u >= 0 && h <= u)
                return e.copy(a);
            var l = s * h - u * c;
            if (l <= 0 && s >= 0 && u <= 0)
                return n = s / (s - u),
                e.copy(i).addScaledVector(An, n);
            On.subVectors(t, o);
            var d = An.dot(On)
              , p = Ln.dot(On);
            if (p >= 0 && d <= p)
                return e.copy(o);
            var f = d * c - s * p;
            if (f <= 0 && c >= 0 && p <= 0)
                return r = c / (c - p),
                e.copy(i).addScaledVector(Ln, r);
            var m = u * p - d * h;
            if (m <= 0 && h - u >= 0 && d - p >= 0)
                return Rn.subVectors(o, a),
                r = (h - u) / (h - u + (d - p)),
                e.copy(a).addScaledVector(Rn, r);
            var g = 1 / (m + f + l);
            return n = f * g,
            r = l * g,
            e.copy(i).addScaledVector(An, n).addScaledVector(Ln, r)
        }
        ),
        equals: function(t) {
            return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
        }
    });
    var Fn, Hn, Vn, kn = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };
    function jn(t, e, n) {
        return void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n)
    }
    function Wn(t, e, n) {
        return n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t
    }
    function qn(t) {
        return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4)
    }
    function Xn(t) {
        return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055
    }
    function Yn(t, e, n, r, i, a) {
        this.a = t,
        this.b = e,
        this.c = n,
        this.normal = r && r.isVector3 ? r : new We,
        this.vertexNormals = Array.isArray(r) ? r : [],
        this.color = i && i.isColor ? i : new jn,
        this.vertexColors = Array.isArray(i) ? i : [],
        this.materialIndex = void 0 !== a ? a : 0
    }
    Object.assign(jn.prototype, {
        isColor: !0,
        r: 1,
        g: 1,
        b: 1,
        set: function(t) {
            return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t),
            this
        },
        setScalar: function(t) {
            return this.r = t,
            this.g = t,
            this.b = t,
            this
        },
        setHex: function(t) {
            return t = Math.floor(t),
            this.r = (t >> 16 & 255) / 255,
            this.g = (t >> 8 & 255) / 255,
            this.b = (255 & t) / 255,
            this
        },
        setRGB: function(t, e, n) {
            return this.r = t,
            this.g = e,
            this.b = n,
            this
        },
        setHSL: function(t, e, n) {
            if (t = Ve.euclideanModulo(t, 1),
            e = Ve.clamp(e, 0, 1),
            n = Ve.clamp(n, 0, 1),
            0 === e)
                this.r = this.g = this.b = n;
            else {
                var r = n <= .5 ? n * (1 + e) : n + e - n * e
                  , i = 2 * n - r;
                this.r = Wn(i, r, t + 1 / 3),
                this.g = Wn(i, r, t),
                this.b = Wn(i, r, t - 1 / 3)
            }
            return this
        },
        setStyle: function(t) {
            function e(e) {
                void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
            }
            var n;
            if (n = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)) {
                var r, i = n[1], a = n[2];
                switch (i) {
                case "rgb":
                case "rgba":
                    if (r = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a))
                        return this.r = Math.min(255, parseInt(r[1], 10)) / 255,
                        this.g = Math.min(255, parseInt(r[2], 10)) / 255,
                        this.b = Math.min(255, parseInt(r[3], 10)) / 255,
                        e(r[5]),
                        this;
                    if (r = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a))
                        return this.r = Math.min(100, parseInt(r[1], 10)) / 100,
                        this.g = Math.min(100, parseInt(r[2], 10)) / 100,
                        this.b = Math.min(100, parseInt(r[3], 10)) / 100,
                        e(r[5]),
                        this;
                    break;
                case "hsl":
                case "hsla":
                    if (r = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
                        var o = parseFloat(r[1]) / 360
                          , s = parseInt(r[2], 10) / 100
                          , c = parseInt(r[3], 10) / 100;
                        return e(r[5]),
                        this.setHSL(o, s, c)
                    }
                }
            } else if (n = /^\#([A-Fa-f0-9]+)$/.exec(t)) {
                var u, h = (u = n[1]).length;
                if (3 === h)
                    return this.r = parseInt(u.charAt(0) + u.charAt(0), 16) / 255,
                    this.g = parseInt(u.charAt(1) + u.charAt(1), 16) / 255,
                    this.b = parseInt(u.charAt(2) + u.charAt(2), 16) / 255,
                    this;
                if (6 === h)
                    return this.r = parseInt(u.charAt(0) + u.charAt(1), 16) / 255,
                    this.g = parseInt(u.charAt(2) + u.charAt(3), 16) / 255,
                    this.b = parseInt(u.charAt(4) + u.charAt(5), 16) / 255,
                    this
            }
            t && t.length > 0 && (void 0 !== (u = kn[t]) ? this.setHex(u) : console.warn("THREE.Color: Unknown color " + t));
            return this
        },
        clone: function() {
            return new this.constructor(this.r,this.g,this.b)
        },
        copy: function(t) {
            return this.r = t.r,
            this.g = t.g,
            this.b = t.b,
            this
        },
        copyGammaToLinear: function(t, e) {
            return void 0 === e && (e = 2),
            this.r = Math.pow(t.r, e),
            this.g = Math.pow(t.g, e),
            this.b = Math.pow(t.b, e),
            this
        },
        copyLinearToGamma: function(t, e) {
            void 0 === e && (e = 2);
            var n = e > 0 ? 1 / e : 1;
            return this.r = Math.pow(t.r, n),
            this.g = Math.pow(t.g, n),
            this.b = Math.pow(t.b, n),
            this
        },
        convertGammaToLinear: function(t) {
            return this.copyGammaToLinear(this, t),
            this
        },
        convertLinearToGamma: function(t) {
            return this.copyLinearToGamma(this, t),
            this
        },
        copySRGBToLinear: function(t) {
            return this.r = qn(t.r),
            this.g = qn(t.g),
            this.b = qn(t.b),
            this
        },
        copyLinearToSRGB: function(t) {
            return this.r = Xn(t.r),
            this.g = Xn(t.g),
            this.b = Xn(t.b),
            this
        },
        convertSRGBToLinear: function() {
            return this.copySRGBToLinear(this),
            this
        },
        convertLinearToSRGB: function() {
            return this.copyLinearToSRGB(this),
            this
        },
        getHex: function() {
            return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
        },
        getHexString: function() {
            return ("000000" + this.getHex().toString(16)).slice(-6)
        },
        getHSL: function(t) {
            void 0 === t && (console.warn("THREE.Color: .getHSL() target is now required"),
            t = {
                h: 0,
                s: 0,
                l: 0
            });
            var e, n, r = this.r, i = this.g, a = this.b, o = Math.max(r, i, a), s = Math.min(r, i, a), c = (s + o) / 2;
            if (s === o)
                e = 0,
                n = 0;
            else {
                var u = o - s;
                switch (n = c <= .5 ? u / (o + s) : u / (2 - o - s),
                o) {
                case r:
                    e = (i - a) / u + (i < a ? 6 : 0);
                    break;
                case i:
                    e = (a - r) / u + 2;
                    break;
                case a:
                    e = (r - i) / u + 4
                }
                e /= 6
            }
            return t.h = e,
            t.s = n,
            t.l = c,
            t
        },
        getStyle: function() {
            return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
        },
        offsetHSL: (Vn = {},
        function(t, e, n) {
            return this.getHSL(Vn),
            Vn.h += t,
            Vn.s += e,
            Vn.l += n,
            this.setHSL(Vn.h, Vn.s, Vn.l),
            this
        }
        ),
        add: function(t) {
            return this.r += t.r,
            this.g += t.g,
            this.b += t.b,
            this
        },
        addColors: function(t, e) {
            return this.r = t.r + e.r,
            this.g = t.g + e.g,
            this.b = t.b + e.b,
            this
        },
        addScalar: function(t) {
            return this.r += t,
            this.g += t,
            this.b += t,
            this
        },
        sub: function(t) {
            return this.r = Math.max(0, this.r - t.r),
            this.g = Math.max(0, this.g - t.g),
            this.b = Math.max(0, this.b - t.b),
            this
        },
        multiply: function(t) {
            return this.r *= t.r,
            this.g *= t.g,
            this.b *= t.b,
            this
        },
        multiplyScalar: function(t) {
            return this.r *= t,
            this.g *= t,
            this.b *= t,
            this
        },
        lerp: function(t, e) {
            return this.r += (t.r - this.r) * e,
            this.g += (t.g - this.g) * e,
            this.b += (t.b - this.b) * e,
            this
        },
        lerpHSL: (Fn = {
            h: 0,
            s: 0,
            l: 0
        },
        Hn = {
            h: 0,
            s: 0,
            l: 0
        },
        function(t, e) {
            this.getHSL(Fn),
            t.getHSL(Hn);
            var n = Ve.lerp(Fn.h, Hn.h, e)
              , r = Ve.lerp(Fn.s, Hn.s, e)
              , i = Ve.lerp(Fn.l, Hn.l, e);
            return this.setHSL(n, r, i),
            this
        }
        ),
        equals: function(t) {
            return t.r === this.r && t.g === this.g && t.b === this.b
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0),
            this.r = t[e],
            this.g = t[e + 1],
            this.b = t[e + 2],
            this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []),
            void 0 === e && (e = 0),
            t[e] = this.r,
            t[e + 1] = this.g,
            t[e + 2] = this.b,
            t
        },
        toJSON: function() {
            return this.getHex()
        }
    }),
    Object.assign(Yn.prototype, {
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            this.a = t.a,
            this.b = t.b,
            this.c = t.c,
            this.normal.copy(t.normal),
            this.color.copy(t.color),
            this.materialIndex = t.materialIndex;
            for (var e = 0, n = t.vertexNormals.length; e < n; e++)
                this.vertexNormals[e] = t.vertexNormals[e].clone();
            for (e = 0,
            n = t.vertexColors.length; e < n; e++)
                this.vertexColors[e] = t.vertexColors[e].clone();
            return this
        }
    });
    var Jn = 0;
    function Zn() {
        Object.defineProperty(this, "id", {
            value: Jn++
        }),
        this.uuid = Ve.generateUUID(),
        this.name = "",
        this.type = "Material",
        this.fog = !0,
        this.lights = !0,
        this.blending = A,
        this.side = y,
        this.flatShading = !1,
        this.vertexTangents = !1,
        this.vertexColors = M,
        this.opacity = 1,
        this.transparent = !1,
        this.blendSrc = H,
        this.blendDst = V,
        this.blendEquation = O,
        this.blendSrcAlpha = null,
        this.blendDstAlpha = null,
        this.blendEquationAlpha = null,
        this.depthFunc = Q,
        this.depthTest = !0,
        this.depthWrite = !0,
        this.clippingPlanes = null,
        this.clipIntersection = !1,
        this.clipShadows = !1,
        this.shadowSide = null,
        this.colorWrite = !0,
        this.precision = null,
        this.polygonOffset = !1,
        this.polygonOffsetFactor = 0,
        this.polygonOffsetUnits = 0,
        this.dithering = !1,
        this.alphaTest = 0,
        this.premultipliedAlpha = !1,
        this.visible = !0,
        this.userData = {},
        this.needsUpdate = !0
    }
    function Qn(t) {
        Zn.call(this),
        this.type = "MeshBasicMaterial",
        this.color = new jn(16777215),
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.combine = nt,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.skinning = !1,
        this.morphTargets = !1,
        this.lights = !1,
        this.setValues(t)
    }
    function Kn(t, e, n) {
        if (Array.isArray(t))
            throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.name = "",
        this.array = t,
        this.itemSize = e,
        this.count = void 0 !== t ? t.length / e : 0,
        this.normalized = !0 === n,
        this.dynamic = !1,
        this.updateRange = {
            offset: 0,
            count: -1
        },
        this.version = 0
    }
    function $n(t, e, n) {
        Kn.call(this, new Int8Array(t), e, n)
    }
    function tr(t, e, n) {
        Kn.call(this, new Uint8Array(t), e, n)
    }
    function er(t, e, n) {
        Kn.call(this, new Uint8ClampedArray(t), e, n)
    }
    function nr(t, e, n) {
        Kn.call(this, new Int16Array(t), e, n)
    }
    function rr(t, e, n) {
        Kn.call(this, new Uint16Array(t), e, n)
    }
    function ir(t, e, n) {
        Kn.call(this, new Int32Array(t), e, n)
    }
    function ar(t, e, n) {
        Kn.call(this, new Uint32Array(t), e, n)
    }
    function or(t, e, n) {
        Kn.call(this, new Float32Array(t), e, n)
    }
    function sr(t, e, n) {
        Kn.call(this, new Float64Array(t), e, n)
    }
    function cr() {
        this.vertices = [],
        this.normals = [],
        this.colors = [],
        this.uvs = [],
        this.uvs2 = [],
        this.groups = [],
        this.morphTargets = {},
        this.skinWeights = [],
        this.skinIndices = [],
        this.boundingBox = null,
        this.boundingSphere = null,
        this.verticesNeedUpdate = !1,
        this.normalsNeedUpdate = !1,
        this.colorsNeedUpdate = !1,
        this.uvsNeedUpdate = !1,
        this.groupsNeedUpdate = !1
    }
    function ur(t) {
        if (0 === t.length)
            return -1 / 0;
        for (var e = t[0], n = 1, r = t.length; n < r; ++n)
            t[n] > e && (e = t[n]);
        return e
    }
    Zn.prototype = Object.assign(Object.create(r.prototype), {
        constructor: Zn,
        isMaterial: !0,
        onBeforeCompile: function() {},
        setValues: function(t) {
            if (void 0 !== t)
                for (var e in t) {
                    var n = t[e];
                    if (void 0 !== n)
                        if ("shading" !== e) {
                            var r = this[e];
                            void 0 !== r ? r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[e] = n : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
                        } else
                            console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."),
                            this.flatShading = n === w;
                    else
                        console.warn("THREE.Material: '" + e + "' parameter is undefined.")
                }
        },
        toJSON: function(t) {
            var e = void 0 === t || "string" == typeof t;
            e && (t = {
                textures: {},
                images: {}
            });
            var n = {
                metadata: {
                    version: 4.5,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };
            function r(t) {
                var e = [];
                for (var n in t) {
                    var r = t[n];
                    delete r.metadata,
                    e.push(r)
                }
                return e
            }
            if (n.uuid = this.uuid,
            n.type = this.type,
            "" !== this.name && (n.name = this.name),
            this.color && this.color.isColor && (n.color = this.color.getHex()),
            void 0 !== this.roughness && (n.roughness = this.roughness),
            void 0 !== this.metalness && (n.metalness = this.metalness),
            this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()),
            this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity),
            this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
            void 0 !== this.shininess && (n.shininess = this.shininess),
            void 0 !== this.clearCoat && (n.clearCoat = this.clearCoat),
            void 0 !== this.clearCoatRoughness && (n.clearCoatRoughness = this.clearCoatRoughness),
            this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
            this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid),
            this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid),
            this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid),
            this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid,
            n.aoMapIntensity = this.aoMapIntensity),
            this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid,
            n.bumpScale = this.bumpScale),
            this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid,
            n.normalMapType = this.normalMapType,
            n.normalScale = this.normalScale.toArray()),
            this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid,
            n.displacementScale = this.displacementScale,
            n.displacementBias = this.displacementBias),
            this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
            this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
            this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
            this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid),
            this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid,
            n.reflectivity = this.reflectivity,
            n.refractionRatio = this.refractionRatio,
            void 0 !== this.combine && (n.combine = this.combine),
            void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity)),
            this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid),
            void 0 !== this.size && (n.size = this.size),
            void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation),
            this.blending !== A && (n.blending = this.blending),
            !0 === this.flatShading && (n.flatShading = this.flatShading),
            this.side !== y && (n.side = this.side),
            this.vertexColors !== M && (n.vertexColors = this.vertexColors),
            this.opacity < 1 && (n.opacity = this.opacity),
            !0 === this.transparent && (n.transparent = this.transparent),
            n.depthFunc = this.depthFunc,
            n.depthTest = this.depthTest,
            n.depthWrite = this.depthWrite,
            this.rotation && 0 !== this.rotation && (n.rotation = this.rotation),
            !0 === this.polygonOffset && (n.polygonOffset = !0),
            0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor),
            0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits),
            this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth),
            void 0 !== this.dashSize && (n.dashSize = this.dashSize),
            void 0 !== this.gapSize && (n.gapSize = this.gapSize),
            void 0 !== this.scale && (n.scale = this.scale),
            !0 === this.dithering && (n.dithering = !0),
            this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
            !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha),
            !0 === this.wireframe && (n.wireframe = this.wireframe),
            this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth),
            "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap),
            "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin),
            !0 === this.morphTargets && (n.morphTargets = !0),
            !0 === this.morphNormals && (n.morphNormals = !0),
            !0 === this.skinning && (n.skinning = !0),
            !1 === this.visible && (n.visible = !1),
            "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData),
            e) {
                var i = r(t.textures)
                  , a = r(t.images);
                i.length > 0 && (n.textures = i),
                a.length > 0 && (n.images = a)
            }
            return n
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            this.name = t.name,
            this.fog = t.fog,
            this.lights = t.lights,
            this.blending = t.blending,
            this.side = t.side,
            this.flatShading = t.flatShading,
            this.vertexColors = t.vertexColors,
            this.opacity = t.opacity,
            this.transparent = t.transparent,
            this.blendSrc = t.blendSrc,
            this.blendDst = t.blendDst,
            this.blendEquation = t.blendEquation,
            this.blendSrcAlpha = t.blendSrcAlpha,
            this.blendDstAlpha = t.blendDstAlpha,
            this.blendEquationAlpha = t.blendEquationAlpha,
            this.depthFunc = t.depthFunc,
            this.depthTest = t.depthTest,
            this.depthWrite = t.depthWrite,
            this.colorWrite = t.colorWrite,
            this.precision = t.precision,
            this.polygonOffset = t.polygonOffset,
            this.polygonOffsetFactor = t.polygonOffsetFactor,
            this.polygonOffsetUnits = t.polygonOffsetUnits,
            this.dithering = t.dithering,
            this.alphaTest = t.alphaTest,
            this.premultipliedAlpha = t.premultipliedAlpha,
            this.visible = t.visible,
            this.userData = JSON.parse(JSON.stringify(t.userData)),
            this.clipShadows = t.clipShadows,
            this.clipIntersection = t.clipIntersection;
            var e = t.clippingPlanes
              , n = null;
            if (null !== e) {
                var r = e.length;
                n = new Array(r);
                for (var i = 0; i !== r; ++i)
                    n[i] = e[i].clone()
            }
            return this.clippingPlanes = n,
            this.shadowSide = t.shadowSide,
            this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }),
    Qn.prototype = Object.create(Zn.prototype),
    Qn.prototype.constructor = Qn,
    Qn.prototype.isMeshBasicMaterial = !0,
    Qn.prototype.copy = function(t) {
        return Zn.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this.map = t.map,
        this.lightMap = t.lightMap,
        this.lightMapIntensity = t.lightMapIntensity,
        this.aoMap = t.aoMap,
        this.aoMapIntensity = t.aoMapIntensity,
        this.specularMap = t.specularMap,
        this.alphaMap = t.alphaMap,
        this.envMap = t.envMap,
        this.combine = t.combine,
        this.reflectivity = t.reflectivity,
        this.refractionRatio = t.refractionRatio,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.wireframeLinecap = t.wireframeLinecap,
        this.wireframeLinejoin = t.wireframeLinejoin,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this
    }
    ,
    Object.defineProperty(Kn.prototype, "needsUpdate", {
        set: function(t) {
            !0 === t && this.version++
        }
    }),
    Object.assign(Kn.prototype, {
        isBufferAttribute: !0,
        onUploadCallback: function() {},
        setArray: function(t) {
            if (Array.isArray(t))
                throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            return this.count = void 0 !== t ? t.length / this.itemSize : 0,
            this.array = t,
            this
        },
        setDynamic: function(t) {
            return this.dynamic = t,
            this
        },
        copy: function(t) {
            return this.name = t.name,
            this.array = new t.array.constructor(t.array),
            this.itemSize = t.itemSize,
            this.count = t.count,
            this.normalized = t.normalized,
            this.dynamic = t.dynamic,
            this
        },
        copyAt: function(t, e, n) {
            t *= this.itemSize,
            n *= e.itemSize;
            for (var r = 0, i = this.itemSize; r < i; r++)
                this.array[t + r] = e.array[n + r];
            return this
        },
        copyArray: function(t) {
            return this.array.set(t),
            this
        },
        copyColorsArray: function(t) {
            for (var e = this.array, n = 0, r = 0, i = t.length; r < i; r++) {
                var a = t[r];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", r),
                a = new jn),
                e[n++] = a.r,
                e[n++] = a.g,
                e[n++] = a.b
            }
            return this
        },
        copyVector2sArray: function(t) {
            for (var e = this.array, n = 0, r = 0, i = t.length; r < i; r++) {
                var a = t[r];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", r),
                a = new ke),
                e[n++] = a.x,
                e[n++] = a.y
            }
            return this
        },
        copyVector3sArray: function(t) {
            for (var e = this.array, n = 0, r = 0, i = t.length; r < i; r++) {
                var a = t[r];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", r),
                a = new We),
                e[n++] = a.x,
                e[n++] = a.y,
                e[n++] = a.z
            }
            return this
        },
        copyVector4sArray: function(t) {
            for (var e = this.array, n = 0, r = 0, i = t.length; r < i; r++) {
                var a = t[r];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", r),
                a = new sn),
                e[n++] = a.x,
                e[n++] = a.y,
                e[n++] = a.z,
                e[n++] = a.w
            }
            return this
        },
        set: function(t, e) {
            return void 0 === e && (e = 0),
            this.array.set(t, e),
            this
        },
        getX: function(t) {
            return this.array[t * this.itemSize]
        },
        setX: function(t, e) {
            return this.array[t * this.itemSize] = e,
            this
        },
        getY: function(t) {
            return this.array[t * this.itemSize + 1]
        },
        setY: function(t, e) {
            return this.array[t * this.itemSize + 1] = e,
            this
        },
        getZ: function(t) {
            return this.array[t * this.itemSize + 2]
        },
        setZ: function(t, e) {
            return this.array[t * this.itemSize + 2] = e,
            this
        },
        getW: function(t) {
            return this.array[t * this.itemSize + 3]
        },
        setW: function(t, e) {
            return this.array[t * this.itemSize + 3] = e,
            this
        },
        setXY: function(t, e, n) {
            return t *= this.itemSize,
            this.array[t + 0] = e,
            this.array[t + 1] = n,
            this
        },
        setXYZ: function(t, e, n, r) {
            return t *= this.itemSize,
            this.array[t + 0] = e,
            this.array[t + 1] = n,
            this.array[t + 2] = r,
            this
        },
        setXYZW: function(t, e, n, r, i) {
            return t *= this.itemSize,
            this.array[t + 0] = e,
            this.array[t + 1] = n,
            this.array[t + 2] = r,
            this.array[t + 3] = i,
            this
        },
        onUpload: function(t) {
            return this.onUploadCallback = t,
            this
        },
        clone: function() {
            return new this.constructor(this.array,this.itemSize).copy(this)
        },
        toJSON: function() {
            return {
                itemSize: this.itemSize,
                type: this.array.constructor.name,
                array: Array.prototype.slice.call(this.array),
                normalized: this.normalized
            }
        }
    }),
    $n.prototype = Object.create(Kn.prototype),
    $n.prototype.constructor = $n,
    tr.prototype = Object.create(Kn.prototype),
    tr.prototype.constructor = tr,
    er.prototype = Object.create(Kn.prototype),
    er.prototype.constructor = er,
    nr.prototype = Object.create(Kn.prototype),
    nr.prototype.constructor = nr,
    rr.prototype = Object.create(Kn.prototype),
    rr.prototype.constructor = rr,
    ir.prototype = Object.create(Kn.prototype),
    ir.prototype.constructor = ir,
    ar.prototype = Object.create(Kn.prototype),
    ar.prototype.constructor = ar,
    or.prototype = Object.create(Kn.prototype),
    or.prototype.constructor = or,
    sr.prototype = Object.create(Kn.prototype),
    sr.prototype.constructor = sr,
    Object.assign(cr.prototype, {
        computeGroups: function(t) {
            for (var e, n = [], r = void 0, i = t.faces, a = 0; a < i.length; a++) {
                var o = i[a];
                o.materialIndex !== r && (r = o.materialIndex,
                void 0 !== e && (e.count = 3 * a - e.start,
                n.push(e)),
                e = {
                    start: 3 * a,
                    materialIndex: r
                })
            }
            void 0 !== e && (e.count = 3 * a - e.start,
            n.push(e)),
            this.groups = n
        },
        fromGeometry: function(t) {
            var e, n = t.faces, r = t.vertices, i = t.faceVertexUvs, a = i[0] && i[0].length > 0, o = i[1] && i[1].length > 0, s = t.morphTargets, c = s.length;
            if (c > 0) {
                e = [];
                for (var u = 0; u < c; u++)
                    e[u] = {
                        name: s[u].name,
                        data: []
                    };
                this.morphTargets.position = e
            }
            var h, l = t.morphNormals, d = l.length;
            if (d > 0) {
                h = [];
                for (u = 0; u < d; u++)
                    h[u] = {
                        name: l[u].name,
                        data: []
                    };
                this.morphTargets.normal = h
            }
            var p = t.skinIndices
              , f = t.skinWeights
              , m = p.length === r.length
              , g = f.length === r.length;
            r.length > 0 && 0 === n.length && console.error("THREE.DirectGeometry: Faceless geometries are not supported.");
            for (u = 0; u < n.length; u++) {
                var v = n[u];
                this.vertices.push(r[v.a], r[v.b], r[v.c]);
                var y = v.vertexNormals;
                if (3 === y.length)
                    this.normals.push(y[0], y[1], y[2]);
                else {
                    var x = v.normal;
                    this.normals.push(x, x, x)
                }
                var b, w = v.vertexColors;
                if (3 === w.length)
                    this.colors.push(w[0], w[1], w[2]);
                else {
                    var _ = v.color;
                    this.colors.push(_, _, _)
                }
                if (!0 === a)
                    void 0 !== (b = i[0][u]) ? this.uvs.push(b[0], b[1], b[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", u),
                    this.uvs.push(new ke, new ke, new ke));
                if (!0 === o)
                    void 0 !== (b = i[1][u]) ? this.uvs2.push(b[0], b[1], b[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", u),
                    this.uvs2.push(new ke, new ke, new ke));
                for (var M = 0; M < c; M++) {
                    var E = s[M].vertices;
                    e[M].data.push(E[v.a], E[v.b], E[v.c])
                }
                for (M = 0; M < d; M++) {
                    var S = l[M].vertexNormals[u];
                    h[M].data.push(S.a, S.b, S.c)
                }
                m && this.skinIndices.push(p[v.a], p[v.b], p[v.c]),
                g && this.skinWeights.push(f[v.a], f[v.b], f[v.c])
            }
            return this.computeGroups(t),
            this.verticesNeedUpdate = t.verticesNeedUpdate,
            this.normalsNeedUpdate = t.normalsNeedUpdate,
            this.colorsNeedUpdate = t.colorsNeedUpdate,
            this.uvsNeedUpdate = t.uvsNeedUpdate,
            this.groupsNeedUpdate = t.groupsNeedUpdate,
            null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()),
            null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()),
            this
        }
    });
    var hr, lr, dr = 1;
    function pr() {
        Object.defineProperty(this, "id", {
            value: dr += 2
        }),
        this.uuid = Ve.generateUUID(),
        this.name = "",
        this.type = "BufferGeometry",
        this.index = null,
        this.attributes = {},
        this.morphAttributes = {},
        this.groups = [],
        this.boundingBox = null,
        this.boundingSphere = null,
        this.drawRange = {
            start: 0,
            count: 1 / 0
        },
        this.userData = {}
    }
    function fr(t, e) {
        Dn.call(this),
        this.type = "Mesh",
        this.geometry = void 0 !== t ? t : new pr,
        this.material = void 0 !== e ? e : new Qn({
            color: 16777215 * Math.random()
        }),
        this.drawMode = Ae,
        this.updateMorphTargets()
    }
    pr.prototype = Object.assign(Object.create(r.prototype), {
        constructor: pr,
        isBufferGeometry: !0,
        getIndex: function() {
            return this.index
        },
        setIndex: function(t) {
            Array.isArray(t) ? this.index = new (ur(t) > 65535 ? ar : rr)(t,1) : this.index = t
        },
        addAttribute: function(t, e) {
            return e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),
            this.setIndex(e),
            this) : (this.attributes[t] = e,
            this) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),
            this.addAttribute(t, new Kn(arguments[1],arguments[2])))
        },
        getAttribute: function(t) {
            return this.attributes[t]
        },
        removeAttribute: function(t) {
            return delete this.attributes[t],
            this
        },
        addGroup: function(t, e, n) {
            this.groups.push({
                start: t,
                count: e,
                materialIndex: void 0 !== n ? n : 0
            })
        },
        clearGroups: function() {
            this.groups = []
        },
        setDrawRange: function(t, e) {
            this.drawRange.start = t,
            this.drawRange.count = e
        },
        applyMatrix: function(t) {
            var e = this.attributes.position;
            void 0 !== e && (t.applyToBufferAttribute(e),
            e.needsUpdate = !0);
            var n = this.attributes.normal;
            void 0 !== n && ((new qe).getNormalMatrix(t).applyToBufferAttribute(n),
            n.needsUpdate = !0);
            var r = this.attributes.tangent;
            void 0 !== r && ((new qe).getNormalMatrix(t).applyToBufferAttribute(r),
            r.needsUpdate = !0);
            return null !== this.boundingBox && this.computeBoundingBox(),
            null !== this.boundingSphere && this.computeBoundingSphere(),
            this
        },
        rotateX: function() {
            var t = new hn;
            return function(e) {
                return t.makeRotationX(e),
                this.applyMatrix(t),
                this
            }
        }(),
        rotateY: function() {
            var t = new hn;
            return function(e) {
                return t.makeRotationY(e),
                this.applyMatrix(t),
                this
            }
        }(),
        rotateZ: function() {
            var t = new hn;
            return function(e) {
                return t.makeRotationZ(e),
                this.applyMatrix(t),
                this
            }
        }(),
        translate: function() {
            var t = new hn;
            return function(e, n, r) {
                return t.makeTranslation(e, n, r),
                this.applyMatrix(t),
                this
            }
        }(),
        scale: function() {
            var t = new hn;
            return function(e, n, r) {
                return t.makeScale(e, n, r),
                this.applyMatrix(t),
                this
            }
        }(),
        lookAt: (lr = new Dn,
        function(t) {
            lr.lookAt(t),
            lr.updateMatrix(),
            this.applyMatrix(lr.matrix)
        }
        ),
        center: (hr = new We,
        function() {
            return this.computeBoundingBox(),
            this.boundingBox.getCenter(hr).negate(),
            this.translate(hr.x, hr.y, hr.z),
            this
        }
        ),
        setFromObject: function(t) {
            var e = t.geometry;
            if (t.isPoints || t.isLine) {
                var n = new or(3 * e.vertices.length,3)
                  , r = new or(3 * e.colors.length,3);
                if (this.addAttribute("position", n.copyVector3sArray(e.vertices)),
                this.addAttribute("color", r.copyColorsArray(e.colors)),
                e.lineDistances && e.lineDistances.length === e.vertices.length) {
                    var i = new or(e.lineDistances.length,1);
                    this.addAttribute("lineDistance", i.copyArray(e.lineDistances))
                }
                null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()),
                null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone())
            } else
                t.isMesh && e && e.isGeometry && this.fromGeometry(e);
            return this
        },
        setFromPoints: function(t) {
            for (var e = [], n = 0, r = t.length; n < r; n++) {
                var i = t[n];
                e.push(i.x, i.y, i.z || 0)
            }
            return this.addAttribute("position", new or(e,3)),
            this
        },
        updateFromObject: function(t) {
            var e, n = t.geometry;
            if (t.isMesh) {
                var r = n.__directGeometry;
                if (!0 === n.elementsNeedUpdate && (r = void 0,
                n.elementsNeedUpdate = !1),
                void 0 === r)
                    return this.fromGeometry(n);
                r.verticesNeedUpdate = n.verticesNeedUpdate,
                r.normalsNeedUpdate = n.normalsNeedUpdate,
                r.colorsNeedUpdate = n.colorsNeedUpdate,
                r.uvsNeedUpdate = n.uvsNeedUpdate,
                r.groupsNeedUpdate = n.groupsNeedUpdate,
                n.verticesNeedUpdate = !1,
                n.normalsNeedUpdate = !1,
                n.colorsNeedUpdate = !1,
                n.uvsNeedUpdate = !1,
                n.groupsNeedUpdate = !1,
                n = r
            }
            return !0 === n.verticesNeedUpdate && (void 0 !== (e = this.attributes.position) && (e.copyVector3sArray(n.vertices),
            e.needsUpdate = !0),
            n.verticesNeedUpdate = !1),
            !0 === n.normalsNeedUpdate && (void 0 !== (e = this.attributes.normal) && (e.copyVector3sArray(n.normals),
            e.needsUpdate = !0),
            n.normalsNeedUpdate = !1),
            !0 === n.colorsNeedUpdate && (void 0 !== (e = this.attributes.color) && (e.copyColorsArray(n.colors),
            e.needsUpdate = !0),
            n.colorsNeedUpdate = !1),
            n.uvsNeedUpdate && (void 0 !== (e = this.attributes.uv) && (e.copyVector2sArray(n.uvs),
            e.needsUpdate = !0),
            n.uvsNeedUpdate = !1),
            n.lineDistancesNeedUpdate && (void 0 !== (e = this.attributes.lineDistance) && (e.copyArray(n.lineDistances),
            e.needsUpdate = !0),
            n.lineDistancesNeedUpdate = !1),
            n.groupsNeedUpdate && (n.computeGroups(t.geometry),
            this.groups = n.groups,
            n.groupsNeedUpdate = !1),
            this
        },
        fromGeometry: function(t) {
            return t.__directGeometry = (new cr).fromGeometry(t),
            this.fromDirectGeometry(t.__directGeometry)
        },
        fromDirectGeometry: function(t) {
            var e = new Float32Array(3 * t.vertices.length);
            if (this.addAttribute("position", new Kn(e,3).copyVector3sArray(t.vertices)),
            t.normals.length > 0) {
                var n = new Float32Array(3 * t.normals.length);
                this.addAttribute("normal", new Kn(n,3).copyVector3sArray(t.normals))
            }
            if (t.colors.length > 0) {
                var r = new Float32Array(3 * t.colors.length);
                this.addAttribute("color", new Kn(r,3).copyColorsArray(t.colors))
            }
            if (t.uvs.length > 0) {
                var i = new Float32Array(2 * t.uvs.length);
                this.addAttribute("uv", new Kn(i,2).copyVector2sArray(t.uvs))
            }
            if (t.uvs2.length > 0) {
                var a = new Float32Array(2 * t.uvs2.length);
                this.addAttribute("uv2", new Kn(a,2).copyVector2sArray(t.uvs2))
            }
            for (var o in this.groups = t.groups,
            t.morphTargets) {
                for (var s = [], c = t.morphTargets[o], u = 0, h = c.length; u < h; u++) {
                    var l = c[u]
                      , d = new or(3 * l.data.length,3);
                    d.name = l.name,
                    s.push(d.copyVector3sArray(l.data))
                }
                this.morphAttributes[o] = s
            }
            if (t.skinIndices.length > 0) {
                var p = new or(4 * t.skinIndices.length,4);
                this.addAttribute("skinIndex", p.copyVector4sArray(t.skinIndices))
            }
            if (t.skinWeights.length > 0) {
                var f = new or(4 * t.skinWeights.length,4);
                this.addAttribute("skinWeight", f.copyVector4sArray(t.skinWeights))
            }
            return null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()),
            null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()),
            this
        },
        computeBoundingBox: function() {
            var t = new Bn;
            return function() {
                null === this.boundingBox && (this.boundingBox = new Bn);
                var e = this.attributes.position
                  , n = this.morphAttributes.position;
                if (void 0 !== e) {
                    if (this.boundingBox.setFromBufferAttribute(e),
                    n)
                        for (var r = 0, i = n.length; r < i; r++) {
                            var a = n[r];
                            t.setFromBufferAttribute(a),
                            this.boundingBox.expandByPoint(t.min),
                            this.boundingBox.expandByPoint(t.max)
                        }
                } else
                    this.boundingBox.makeEmpty();
                (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
            }
        }(),
        computeBoundingSphere: function() {
            var t = new Bn
              , e = new Bn
              , n = new We;
            return function() {
                null === this.boundingSphere && (this.boundingSphere = new zn);
                var r = this.attributes.position
                  , i = this.morphAttributes.position;
                if (r) {
                    var a = this.boundingSphere.center;
                    if (t.setFromBufferAttribute(r),
                    i)
                        for (var o = 0, s = i.length; o < s; o++) {
                            var c = i[o];
                            e.setFromBufferAttribute(c),
                            t.expandByPoint(e.min),
                            t.expandByPoint(e.max)
                        }
                    t.getCenter(a);
                    var u = 0;
                    for (o = 0,
                    s = r.count; o < s; o++)
                        n.fromBufferAttribute(r, o),
                        u = Math.max(u, a.distanceToSquared(n));
                    if (i)
                        for (o = 0,
                        s = i.length; o < s; o++)
                            for (var h = 0, l = (c = i[o]).count; h < l; h++)
                                n.fromBufferAttribute(c, h),
                                u = Math.max(u, a.distanceToSquared(n));
                    this.boundingSphere.radius = Math.sqrt(u),
                    isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
                }
            }
        }(),
        computeFaceNormals: function() {},
        computeVertexNormals: function() {
            var t = this.index
              , e = this.attributes;
            if (e.position) {
                var n = e.position.array;
                if (void 0 === e.normal)
                    this.addAttribute("normal", new Kn(new Float32Array(n.length),3));
                else
                    for (var r = e.normal.array, i = 0, a = r.length; i < a; i++)
                        r[i] = 0;
                var o, s, c, u = e.normal.array, h = new We, l = new We, d = new We, p = new We, f = new We;
                if (t) {
                    var m = t.array;
                    for (i = 0,
                    a = t.count; i < a; i += 3)
                        o = 3 * m[i + 0],
                        s = 3 * m[i + 1],
                        c = 3 * m[i + 2],
                        h.fromArray(n, o),
                        l.fromArray(n, s),
                        d.fromArray(n, c),
                        p.subVectors(d, l),
                        f.subVectors(h, l),
                        p.cross(f),
                        u[o] += p.x,
                        u[o + 1] += p.y,
                        u[o + 2] += p.z,
                        u[s] += p.x,
                        u[s + 1] += p.y,
                        u[s + 2] += p.z,
                        u[c] += p.x,
                        u[c + 1] += p.y,
                        u[c + 2] += p.z
                } else
                    for (i = 0,
                    a = n.length; i < a; i += 9)
                        h.fromArray(n, i),
                        l.fromArray(n, i + 3),
                        d.fromArray(n, i + 6),
                        p.subVectors(d, l),
                        f.subVectors(h, l),
                        p.cross(f),
                        u[i] = p.x,
                        u[i + 1] = p.y,
                        u[i + 2] = p.z,
                        u[i + 3] = p.x,
                        u[i + 4] = p.y,
                        u[i + 5] = p.z,
                        u[i + 6] = p.x,
                        u[i + 7] = p.y,
                        u[i + 8] = p.z;
                this.normalizeNormals(),
                e.normal.needsUpdate = !0
            }
        },
        merge: function(t, e) {
            if (t && t.isBufferGeometry) {
                void 0 === e && (e = 0,
                console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
                var n = this.attributes;
                for (var r in n)
                    if (void 0 !== t.attributes[r])
                        for (var i = n[r].array, a = t.attributes[r], o = a.array, s = a.itemSize * e, c = Math.min(o.length, i.length - s), u = 0, h = s; u < c; u++,
                        h++)
                            i[h] = o[u];
                return this
            }
            console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t)
        },
        normalizeNormals: function() {
            var t = new We;
            return function() {
                for (var e = this.attributes.normal, n = 0, r = e.count; n < r; n++)
                    t.x = e.getX(n),
                    t.y = e.getY(n),
                    t.z = e.getZ(n),
                    t.normalize(),
                    e.setXYZ(n, t.x, t.y, t.z)
            }
        }(),
        toNonIndexed: function() {
            function t(t, e) {
                for (var n = t.array, r = t.itemSize, i = new n.constructor(e.length * r), a = 0, o = 0, s = 0, c = e.length; s < c; s++) {
                    a = e[s] * r;
                    for (var u = 0; u < r; u++)
                        i[o++] = n[a++]
                }
                return new Kn(i,r)
            }
            if (null === this.index)
                return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),
                this;
            var e = new pr
              , n = this.index.array
              , r = this.attributes;
            for (var i in r) {
                var a = t(r[i], n);
                e.addAttribute(i, a)
            }
            var o = this.morphAttributes;
            for (i in o) {
                for (var s = [], c = o[i], u = 0, h = c.length; u < h; u++) {
                    a = t(c[u], n);
                    s.push(a)
                }
                e.morphAttributes[i] = s
            }
            for (var l = this.groups, d = (u = 0,
            l.length); u < d; u++) {
                var p = l[u];
                e.addGroup(p.start, p.count, p.materialIndex)
            }
            return e
        },
        toJSON: function() {
            var t = {
                metadata: {
                    version: 4.5,
                    type: "BufferGeometry",
                    generator: "BufferGeometry.toJSON"
                }
            };
            if (t.uuid = this.uuid,
            t.type = this.type,
            "" !== this.name && (t.name = this.name),
            Object.keys(this.userData).length > 0 && (t.userData = this.userData),
            void 0 !== this.parameters) {
                var e = this.parameters;
                for (var n in e)
                    void 0 !== e[n] && (t[n] = e[n]);
                return t
            }
            t.data = {
                attributes: {}
            };
            var r = this.index;
            null !== r && (t.data.index = {
                type: r.array.constructor.name,
                array: Array.prototype.slice.call(r.array)
            });
            var i = this.attributes;
            for (var n in i) {
                var a = (d = i[n]).toJSON();
                "" !== d.name && (a.name = d.name),
                t.data.attributes[n] = a
            }
            var o = {}
              , s = !1;
            for (var n in this.morphAttributes) {
                for (var c = this.morphAttributes[n], u = [], h = 0, l = c.length; h < l; h++) {
                    var d;
                    a = (d = c[h]).toJSON();
                    "" !== d.name && (a.name = d.name),
                    u.push(a)
                }
                u.length > 0 && (o[n] = u,
                s = !0)
            }
            s && (t.data.morphAttributes = o);
            var p = this.groups;
            p.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(p)));
            var f = this.boundingSphere;
            return null !== f && (t.data.boundingSphere = {
                center: f.center.toArray(),
                radius: f.radius
            }),
            t
        },
        clone: function() {
            return (new pr).copy(this)
        },
        copy: function(t) {
            var e, n, r;
            this.index = null,
            this.attributes = {},
            this.morphAttributes = {},
            this.groups = [],
            this.boundingBox = null,
            this.boundingSphere = null,
            this.name = t.name;
            var i = t.index;
            null !== i && this.setIndex(i.clone());
            var a = t.attributes;
            for (e in a) {
                var o = a[e];
                this.addAttribute(e, o.clone())
            }
            var s = t.morphAttributes;
            for (e in s) {
                var c = []
                  , u = s[e];
                for (n = 0,
                r = u.length; n < r; n++)
                    c.push(u[n].clone());
                this.morphAttributes[e] = c
            }
            var h = t.groups;
            for (n = 0,
            r = h.length; n < r; n++) {
                var l = h[n];
                this.addGroup(l.start, l.count, l.materialIndex)
            }
            var d = t.boundingBox;
            null !== d && (this.boundingBox = d.clone());
            var p = t.boundingSphere;
            return null !== p && (this.boundingSphere = p.clone()),
            this.drawRange.start = t.drawRange.start,
            this.drawRange.count = t.drawRange.count,
            this.userData = t.userData,
            this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }),
    fr.prototype = Object.assign(Object.create(Dn.prototype), {
        constructor: fr,
        isMesh: !0,
        setDrawMode: function(t) {
            this.drawMode = t
        },
        copy: function(t) {
            return Dn.prototype.copy.call(this, t),
            this.drawMode = t.drawMode,
            void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
            void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)),
            this
        },
        updateMorphTargets: function() {
            var t, e, n, r = this.geometry;
            if (r.isBufferGeometry) {
                var i = r.morphAttributes
                  , a = Object.keys(i);
                if (a.length > 0) {
                    var o = i[a[0]];
                    if (void 0 !== o)
                        for (this.morphTargetInfluences = [],
                        this.morphTargetDictionary = {},
                        t = 0,
                        e = o.length; t < e; t++)
                            n = o[t].name || String(t),
                            this.morphTargetInfluences.push(0),
                            this.morphTargetDictionary[n] = t
                }
            } else {
                var s = r.morphTargets;
                void 0 !== s && s.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
            }
        },
        raycast: function() {
            var t = new hn
              , e = new Un
              , n = new zn
              , r = new We
              , i = new We
              , a = new We
              , o = new We
              , s = new We
              , c = new We
              , u = new We
              , h = new We
              , l = new We
              , d = new ke
              , p = new ke
              , f = new ke
              , m = new We
              , g = new We;
            function v(t, e, n, r, i, a, o, s) {
                if (null === (e.side === x ? r.intersectTriangle(o, a, i, !0, s) : r.intersectTriangle(i, a, o, e.side !== b, s)))
                    return null;
                g.copy(s),
                g.applyMatrix4(t.matrixWorld);
                var c = n.ray.origin.distanceTo(g);
                return c < n.near || c > n.far ? null : {
                    distance: c,
                    point: g.clone(),
                    object: t
                }
            }
            function y(t, e, n, g, y, x, b, w, _, M) {
                r.fromBufferAttribute(y, w),
                i.fromBufferAttribute(y, _),
                a.fromBufferAttribute(y, M);
                var E = t.morphTargetInfluences;
                if (e.morphTargets && x && E) {
                    u.set(0, 0, 0),
                    h.set(0, 0, 0),
                    l.set(0, 0, 0);
                    for (var S = 0, T = x.length; S < T; S++) {
                        var A = E[S]
                          , L = x[S];
                        0 !== A && (o.fromBufferAttribute(L, w),
                        s.fromBufferAttribute(L, _),
                        c.fromBufferAttribute(L, M),
                        u.addScaledVector(o.sub(r), A),
                        h.addScaledVector(s.sub(i), A),
                        l.addScaledVector(c.sub(a), A))
                    }
                    r.add(u),
                    i.add(h),
                    a.add(l)
                }
                var R = v(t, e, n, g, r, i, a, m);
                if (R) {
                    b && (d.fromBufferAttribute(b, w),
                    p.fromBufferAttribute(b, _),
                    f.fromBufferAttribute(b, M),
                    R.uv = Gn.getUV(m, r, i, a, d, p, f, new ke));
                    var P = new Yn(w,_,M);
                    Gn.getNormal(r, i, a, P.normal),
                    R.face = P
                }
                return R
            }
            return function(r, i) {
                var a, o = this.geometry, s = this.material, c = this.matrixWorld;
                if (void 0 !== s && (null === o.boundingSphere && o.computeBoundingSphere(),
                n.copy(o.boundingSphere),
                n.applyMatrix4(c),
                !1 !== r.ray.intersectsSphere(n) && (t.getInverse(c),
                e.copy(r.ray).applyMatrix4(t),
                null === o.boundingBox || !1 !== e.intersectsBox(o.boundingBox))))
                    if (o.isBufferGeometry) {
                        var u, h, l, g, x, b, w, _, M, E = o.index, S = o.attributes.position, T = o.morphAttributes.position, A = o.attributes.uv, L = o.groups, R = o.drawRange;
                        if (null !== E)
                            if (Array.isArray(s))
                                for (g = 0,
                                b = L.length; g < b; g++)
                                    for (M = s[(_ = L[g]).materialIndex],
                                    x = Math.max(_.start, R.start),
                                    w = Math.min(_.start + _.count, R.start + R.count); x < w; x += 3)
                                        u = E.getX(x),
                                        h = E.getX(x + 1),
                                        l = E.getX(x + 2),
                                        (a = y(this, M, r, e, S, T, A, u, h, l)) && (a.faceIndex = Math.floor(x / 3),
                                        a.face.materialIndex = _.materialIndex,
                                        i.push(a));
                            else
                                for (g = Math.max(0, R.start),
                                b = Math.min(E.count, R.start + R.count); g < b; g += 3)
                                    u = E.getX(g),
                                    h = E.getX(g + 1),
                                    l = E.getX(g + 2),
                                    (a = y(this, s, r, e, S, T, A, u, h, l)) && (a.faceIndex = Math.floor(g / 3),
                                    i.push(a));
                        else if (void 0 !== S)
                            if (Array.isArray(s))
                                for (g = 0,
                                b = L.length; g < b; g++)
                                    for (M = s[(_ = L[g]).materialIndex],
                                    x = Math.max(_.start, R.start),
                                    w = Math.min(_.start + _.count, R.start + R.count); x < w; x += 3)
                                        (a = y(this, M, r, e, S, T, A, u = x, h = x + 1, l = x + 2)) && (a.faceIndex = Math.floor(x / 3),
                                        a.face.materialIndex = _.materialIndex,
                                        i.push(a));
                            else
                                for (g = Math.max(0, R.start),
                                b = Math.min(S.count, R.start + R.count); g < b; g += 3)
                                    (a = y(this, s, r, e, S, T, A, u = g, h = g + 1, l = g + 2)) && (a.faceIndex = Math.floor(g / 3),
                                    i.push(a))
                    } else if (o.isGeometry) {
                        var P, C, O, I, D = Array.isArray(s), N = o.vertices, B = o.faces, z = o.faceVertexUvs[0];
                        z.length > 0 && (I = z);
                        for (var U = 0, G = B.length; U < G; U++) {
                            var F = B[U]
                              , H = D ? s[F.materialIndex] : s;
                            if (void 0 !== H && (P = N[F.a],
                            C = N[F.b],
                            O = N[F.c],
                            a = v(this, H, r, e, P, C, O, m))) {
                                if (I && I[U]) {
                                    var V = I[U];
                                    d.copy(V[0]),
                                    p.copy(V[1]),
                                    f.copy(V[2]),
                                    a.uv = Gn.getUV(m, P, C, O, d, p, f, new ke)
                                }
                                a.face = F,
                                a.faceIndex = U,
                                i.push(a)
                            }
                        }
                    }
            }
        }(),
        clone: function() {
            return new this.constructor(this.geometry,this.material).copy(this)
        }
    });
    var mr = 0;
    function gr() {
        Object.defineProperty(this, "id", {
            value: mr += 2
        }),
        this.uuid = Ve.generateUUID(),
        this.name = "",
        this.type = "Geometry",
        this.vertices = [],
        this.colors = [],
        this.faces = [],
        this.faceVertexUvs = [[]],
        this.morphTargets = [],
        this.morphNormals = [],
        this.skinWeights = [],
        this.skinIndices = [],
        this.lineDistances = [],
        this.boundingBox = null,
        this.boundingSphere = null,
        this.elementsNeedUpdate = !1,
        this.verticesNeedUpdate = !1,
        this.uvsNeedUpdate = !1,
        this.normalsNeedUpdate = !1,
        this.colorsNeedUpdate = !1,
        this.lineDistancesNeedUpdate = !1,
        this.groupsNeedUpdate = !1
    }
    function vr(t, e, n, r, i, a) {
        gr.call(this),
        this.type = "BoxGeometry",
        this.parameters = {
            width: t,
            height: e,
            depth: n,
            widthSegments: r,
            heightSegments: i,
            depthSegments: a
        },
        this.fromBufferGeometry(new yr(t,e,n,r,i,a)),
        this.mergeVertices()
    }
    function yr(t, e, n, r, i, a) {
        pr.call(this),
        this.type = "BoxBufferGeometry",
        this.parameters = {
            width: t,
            height: e,
            depth: n,
            widthSegments: r,
            heightSegments: i,
            depthSegments: a
        };
        var o = this;
        t = t || 1,
        e = e || 1,
        n = n || 1,
        r = Math.floor(r) || 1,
        i = Math.floor(i) || 1,
        a = Math.floor(a) || 1;
        var s = []
          , c = []
          , u = []
          , h = []
          , l = 0
          , d = 0;
        function p(t, e, n, r, i, a, p, f, m, g, v) {
            var y, x, b = a / m, w = p / g, _ = a / 2, M = p / 2, E = f / 2, S = m + 1, T = g + 1, A = 0, L = 0, R = new We;
            for (x = 0; x < T; x++) {
                var P = x * w - M;
                for (y = 0; y < S; y++) {
                    var C = y * b - _;
                    R[t] = C * r,
                    R[e] = P * i,
                    R[n] = E,
                    c.push(R.x, R.y, R.z),
                    R[t] = 0,
                    R[e] = 0,
                    R[n] = f > 0 ? 1 : -1,
                    u.push(R.x, R.y, R.z),
                    h.push(y / m),
                    h.push(1 - x / g),
                    A += 1
                }
            }
            for (x = 0; x < g; x++)
                for (y = 0; y < m; y++) {
                    var O = l + y + S * x
                      , I = l + y + S * (x + 1)
                      , D = l + (y + 1) + S * (x + 1)
                      , N = l + (y + 1) + S * x;
                    s.push(O, I, N),
                    s.push(I, D, N),
                    L += 6
                }
            o.addGroup(d, L, v),
            d += L,
            l += A
        }
        p("z", "y", "x", -1, -1, n, e, t, a, i, 0),
        p("z", "y", "x", 1, -1, n, e, -t, a, i, 1),
        p("x", "z", "y", 1, 1, t, n, e, r, a, 2),
        p("x", "z", "y", 1, -1, t, n, -e, r, a, 3),
        p("x", "y", "z", 1, -1, t, e, n, r, i, 4),
        p("x", "y", "z", -1, -1, t, e, -n, r, i, 5),
        this.setIndex(s),
        this.addAttribute("position", new or(c,3)),
        this.addAttribute("normal", new or(u,3)),
        this.addAttribute("uv", new or(h,2))
    }
    function xr(t) {
        var e = {};
        for (var n in t)
            for (var r in e[n] = {},
            t[n]) {
                var i = t[n][r];
                i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture) ? e[n][r] = i.clone() : Array.isArray(i) ? e[n][r] = i.slice() : e[n][r] = i
            }
        return e
    }
    function br(t) {
        for (var e = {}, n = 0; n < t.length; n++) {
            var r = xr(t[n]);
            for (var i in r)
                e[i] = r[i]
        }
        return e
    }
    gr.prototype = Object.assign(Object.create(r.prototype), {
        constructor: gr,
        isGeometry: !0,
        applyMatrix: function(t) {
            for (var e = (new qe).getNormalMatrix(t), n = 0, r = this.vertices.length; n < r; n++) {
                this.vertices[n].applyMatrix4(t)
            }
            for (n = 0,
            r = this.faces.length; n < r; n++) {
                var i = this.faces[n];
                i.normal.applyMatrix3(e).normalize();
                for (var a = 0, o = i.vertexNormals.length; a < o; a++)
                    i.vertexNormals[a].applyMatrix3(e).normalize()
            }
            return null !== this.boundingBox && this.computeBoundingBox(),
            null !== this.boundingSphere && this.computeBoundingSphere(),
            this.verticesNeedUpdate = !0,
            this.normalsNeedUpdate = !0,
            this
        },
        rotateX: function() {
            var t = new hn;
            return function(e) {
                return t.makeRotationX(e),
                this.applyMatrix(t),
                this
            }
        }(),
        rotateY: function() {
            var t = new hn;
            return function(e) {
                return t.makeRotationY(e),
                this.applyMatrix(t),
                this
            }
        }(),
        rotateZ: function() {
            var t = new hn;
            return function(e) {
                return t.makeRotationZ(e),
                this.applyMatrix(t),
                this
            }
        }(),
        translate: function() {
            var t = new hn;
            return function(e, n, r) {
                return t.makeTranslation(e, n, r),
                this.applyMatrix(t),
                this
            }
        }(),
        scale: function() {
            var t = new hn;
            return function(e, n, r) {
                return t.makeScale(e, n, r),
                this.applyMatrix(t),
                this
            }
        }(),
        lookAt: function() {
            var t = new Dn;
            return function(e) {
                t.lookAt(e),
                t.updateMatrix(),
                this.applyMatrix(t.matrix)
            }
        }(),
        fromBufferGeometry: function(t) {
            var e = this
              , n = null !== t.index ? t.index.array : void 0
              , r = t.attributes
              , i = r.position.array
              , a = void 0 !== r.normal ? r.normal.array : void 0
              , o = void 0 !== r.color ? r.color.array : void 0
              , s = void 0 !== r.uv ? r.uv.array : void 0
              , c = void 0 !== r.uv2 ? r.uv2.array : void 0;
            void 0 !== c && (this.faceVertexUvs[1] = []);
            for (var u = 0; u < i.length; u += 3)
                e.vertices.push((new We).fromArray(i, u)),
                void 0 !== o && e.colors.push((new jn).fromArray(o, u));
            function h(t, n, r, i) {
                var u = void 0 === o ? [] : [e.colors[t].clone(), e.colors[n].clone(), e.colors[r].clone()]
                  , h = new Yn(t,n,r,void 0 === a ? [] : [(new We).fromArray(a, 3 * t), (new We).fromArray(a, 3 * n), (new We).fromArray(a, 3 * r)],u,i);
                e.faces.push(h),
                void 0 !== s && e.faceVertexUvs[0].push([(new ke).fromArray(s, 2 * t), (new ke).fromArray(s, 2 * n), (new ke).fromArray(s, 2 * r)]),
                void 0 !== c && e.faceVertexUvs[1].push([(new ke).fromArray(c, 2 * t), (new ke).fromArray(c, 2 * n), (new ke).fromArray(c, 2 * r)])
            }
            var l = t.groups;
            if (l.length > 0)
                for (u = 0; u < l.length; u++)
                    for (var d = l[u], p = d.start, f = p, m = p + d.count; f < m; f += 3)
                        void 0 !== n ? h(n[f], n[f + 1], n[f + 2], d.materialIndex) : h(f, f + 1, f + 2, d.materialIndex);
            else if (void 0 !== n)
                for (u = 0; u < n.length; u += 3)
                    h(n[u], n[u + 1], n[u + 2]);
            else
                for (u = 0; u < i.length / 3; u += 3)
                    h(u, u + 1, u + 2);
            return this.computeFaceNormals(),
            null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()),
            null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()),
            this
        },
        center: function() {
            var t = new We;
            return function() {
                return this.computeBoundingBox(),
                this.boundingBox.getCenter(t).negate(),
                this.translate(t.x, t.y, t.z),
                this
            }
        }(),
        normalize: function() {
            this.computeBoundingSphere();
            var t = this.boundingSphere.center
              , e = this.boundingSphere.radius
              , n = 0 === e ? 1 : 1 / e
              , r = new hn;
            return r.set(n, 0, 0, -n * t.x, 0, n, 0, -n * t.y, 0, 0, n, -n * t.z, 0, 0, 0, 1),
            this.applyMatrix(r),
            this
        },
        computeFaceNormals: function() {
            for (var t = new We, e = new We, n = 0, r = this.faces.length; n < r; n++) {
                var i = this.faces[n]
                  , a = this.vertices[i.a]
                  , o = this.vertices[i.b]
                  , s = this.vertices[i.c];
                t.subVectors(s, o),
                e.subVectors(a, o),
                t.cross(e),
                t.normalize(),
                i.normal.copy(t)
            }
        },
        computeVertexNormals: function(t) {
            var e, n, r, i, a, o;
            for (void 0 === t && (t = !0),
            o = new Array(this.vertices.length),
            e = 0,
            n = this.vertices.length; e < n; e++)
                o[e] = new We;
            if (t) {
                var s, c, u, h = new We, l = new We;
                for (r = 0,
                i = this.faces.length; r < i; r++)
                    a = this.faces[r],
                    s = this.vertices[a.a],
                    c = this.vertices[a.b],
                    u = this.vertices[a.c],
                    h.subVectors(u, c),
                    l.subVectors(s, c),
                    h.cross(l),
                    o[a.a].add(h),
                    o[a.b].add(h),
                    o[a.c].add(h)
            } else
                for (this.computeFaceNormals(),
                r = 0,
                i = this.faces.length; r < i; r++)
                    o[(a = this.faces[r]).a].add(a.normal),
                    o[a.b].add(a.normal),
                    o[a.c].add(a.normal);
            for (e = 0,
            n = this.vertices.length; e < n; e++)
                o[e].normalize();
            for (r = 0,
            i = this.faces.length; r < i; r++) {
                var d = (a = this.faces[r]).vertexNormals;
                3 === d.length ? (d[0].copy(o[a.a]),
                d[1].copy(o[a.b]),
                d[2].copy(o[a.c])) : (d[0] = o[a.a].clone(),
                d[1] = o[a.b].clone(),
                d[2] = o[a.c].clone())
            }
            this.faces.length > 0 && (this.normalsNeedUpdate = !0)
        },
        computeFlatVertexNormals: function() {
            var t, e, n;
            for (this.computeFaceNormals(),
            t = 0,
            e = this.faces.length; t < e; t++) {
                var r = (n = this.faces[t]).vertexNormals;
                3 === r.length ? (r[0].copy(n.normal),
                r[1].copy(n.normal),
                r[2].copy(n.normal)) : (r[0] = n.normal.clone(),
                r[1] = n.normal.clone(),
                r[2] = n.normal.clone())
            }
            this.faces.length > 0 && (this.normalsNeedUpdate = !0)
        },
        computeMorphNormals: function() {
            var t, e, n, r, i;
            for (n = 0,
            r = this.faces.length; n < r; n++)
                for ((i = this.faces[n]).__originalFaceNormal ? i.__originalFaceNormal.copy(i.normal) : i.__originalFaceNormal = i.normal.clone(),
                i.__originalVertexNormals || (i.__originalVertexNormals = []),
                t = 0,
                e = i.vertexNormals.length; t < e; t++)
                    i.__originalVertexNormals[t] ? i.__originalVertexNormals[t].copy(i.vertexNormals[t]) : i.__originalVertexNormals[t] = i.vertexNormals[t].clone();
            var a = new gr;
            for (a.faces = this.faces,
            t = 0,
            e = this.morphTargets.length; t < e; t++) {
                if (!this.morphNormals[t]) {
                    this.morphNormals[t] = {},
                    this.morphNormals[t].faceNormals = [],
                    this.morphNormals[t].vertexNormals = [];
                    var o = this.morphNormals[t].faceNormals
                      , s = this.morphNormals[t].vertexNormals;
                    for (n = 0,
                    r = this.faces.length; n < r; n++)
                        c = new We,
                        u = {
                            a: new We,
                            b: new We,
                            c: new We
                        },
                        o.push(c),
                        s.push(u)
                }
                var c, u, h = this.morphNormals[t];
                for (a.vertices = this.morphTargets[t].vertices,
                a.computeFaceNormals(),
                a.computeVertexNormals(),
                n = 0,
                r = this.faces.length; n < r; n++)
                    i = this.faces[n],
                    c = h.faceNormals[n],
                    u = h.vertexNormals[n],
                    c.copy(i.normal),
                    u.a.copy(i.vertexNormals[0]),
                    u.b.copy(i.vertexNormals[1]),
                    u.c.copy(i.vertexNormals[2])
            }
            for (n = 0,
            r = this.faces.length; n < r; n++)
                (i = this.faces[n]).normal = i.__originalFaceNormal,
                i.vertexNormals = i.__originalVertexNormals
        },
        computeBoundingBox: function() {
            null === this.boundingBox && (this.boundingBox = new Bn),
            this.boundingBox.setFromPoints(this.vertices)
        },
        computeBoundingSphere: function() {
            null === this.boundingSphere && (this.boundingSphere = new zn),
            this.boundingSphere.setFromPoints(this.vertices)
        },
        merge: function(t, e, n) {
            if (t && t.isGeometry) {
                var r, i = this.vertices.length, a = this.vertices, o = t.vertices, s = this.faces, c = t.faces, u = this.faceVertexUvs[0], h = t.faceVertexUvs[0], l = this.colors, d = t.colors;
                void 0 === n && (n = 0),
                void 0 !== e && (r = (new qe).getNormalMatrix(e));
                for (var p = 0, f = o.length; p < f; p++) {
                    var m = o[p].clone();
                    void 0 !== e && m.applyMatrix4(e),
                    a.push(m)
                }
                for (p = 0,
                f = d.length; p < f; p++)
                    l.push(d[p].clone());
                for (p = 0,
                f = c.length; p < f; p++) {
                    var g, v, y, x = c[p], b = x.vertexNormals, w = x.vertexColors;
                    (g = new Yn(x.a + i,x.b + i,x.c + i)).normal.copy(x.normal),
                    void 0 !== r && g.normal.applyMatrix3(r).normalize();
                    for (var _ = 0, M = b.length; _ < M; _++)
                        v = b[_].clone(),
                        void 0 !== r && v.applyMatrix3(r).normalize(),
                        g.vertexNormals.push(v);
                    g.color.copy(x.color);
                    for (_ = 0,
                    M = w.length; _ < M; _++)
                        y = w[_],
                        g.vertexColors.push(y.clone());
                    g.materialIndex = x.materialIndex + n,
                    s.push(g)
                }
                for (p = 0,
                f = h.length; p < f; p++) {
                    var E = h[p]
                      , S = [];
                    if (void 0 !== E) {
                        for (_ = 0,
                        M = E.length; _ < M; _++)
                            S.push(E[_].clone());
                        u.push(S)
                    }
                }
            } else
                console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", t)
        },
        mergeMesh: function(t) {
            t && t.isMesh ? (t.matrixAutoUpdate && t.updateMatrix(),
            this.merge(t.geometry, t.matrix)) : console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", t)
        },
        mergeVertices: function() {
            var t, e, n, r, i, a, o, s, c = {}, u = [], h = [], l = Math.pow(10, 4);
            for (n = 0,
            r = this.vertices.length; n < r; n++)
                t = this.vertices[n],
                void 0 === c[e = Math.round(t.x * l) + "_" + Math.round(t.y * l) + "_" + Math.round(t.z * l)] ? (c[e] = n,
                u.push(this.vertices[n]),
                h[n] = u.length - 1) : h[n] = h[c[e]];
            var d = [];
            for (n = 0,
            r = this.faces.length; n < r; n++) {
                (i = this.faces[n]).a = h[i.a],
                i.b = h[i.b],
                i.c = h[i.c],
                a = [i.a, i.b, i.c];
                for (var p = 0; p < 3; p++)
                    if (a[p] === a[(p + 1) % 3]) {
                        d.push(n);
                        break
                    }
            }
            for (n = d.length - 1; n >= 0; n--) {
                var f = d[n];
                for (this.faces.splice(f, 1),
                o = 0,
                s = this.faceVertexUvs.length; o < s; o++)
                    this.faceVertexUvs[o].splice(f, 1)
            }
            var m = this.vertices.length - u.length;
            return this.vertices = u,
            m
        },
        setFromPoints: function(t) {
            this.vertices = [];
            for (var e = 0, n = t.length; e < n; e++) {
                var r = t[e];
                this.vertices.push(new We(r.x,r.y,r.z || 0))
            }
            return this
        },
        sortFacesByMaterialIndex: function() {
            for (var t = this.faces, e = t.length, n = 0; n < e; n++)
                t[n]._id = n;
            t.sort(function(t, e) {
                return t.materialIndex - e.materialIndex
            });
            var r, i, a = this.faceVertexUvs[0], o = this.faceVertexUvs[1];
            a && a.length === e && (r = []),
            o && o.length === e && (i = []);
            for (n = 0; n < e; n++) {
                var s = t[n]._id;
                r && r.push(a[s]),
                i && i.push(o[s])
            }
            r && (this.faceVertexUvs[0] = r),
            i && (this.faceVertexUvs[1] = i)
        },
        toJSON: function() {
            var t = {
                metadata: {
                    version: 4.5,
                    type: "Geometry",
                    generator: "Geometry.toJSON"
                }
            };
            if (t.uuid = this.uuid,
            t.type = this.type,
            "" !== this.name && (t.name = this.name),
            void 0 !== this.parameters) {
                var e = this.parameters;
                for (var n in e)
                    void 0 !== e[n] && (t[n] = e[n]);
                return t
            }
            for (var r = [], i = 0; i < this.vertices.length; i++) {
                var a = this.vertices[i];
                r.push(a.x, a.y, a.z)
            }
            var o = []
              , s = []
              , c = {}
              , u = []
              , h = {}
              , l = []
              , d = {};
            for (i = 0; i < this.faces.length; i++) {
                var p = this.faces[i]
                  , f = void 0 !== this.faceVertexUvs[0][i]
                  , m = p.normal.length() > 0
                  , g = p.vertexNormals.length > 0
                  , v = 1 !== p.color.r || 1 !== p.color.g || 1 !== p.color.b
                  , y = p.vertexColors.length > 0
                  , x = 0;
                if (x = M(x, 0, 0),
                x = M(x, 1, !0),
                x = M(x, 2, !1),
                x = M(x, 3, f),
                x = M(x, 4, m),
                x = M(x, 5, g),
                x = M(x, 6, v),
                x = M(x, 7, y),
                o.push(x),
                o.push(p.a, p.b, p.c),
                o.push(p.materialIndex),
                f) {
                    var b = this.faceVertexUvs[0][i];
                    o.push(T(b[0]), T(b[1]), T(b[2]))
                }
                if (m && o.push(E(p.normal)),
                g) {
                    var w = p.vertexNormals;
                    o.push(E(w[0]), E(w[1]), E(w[2]))
                }
                if (v && o.push(S(p.color)),
                y) {
                    var _ = p.vertexColors;
                    o.push(S(_[0]), S(_[1]), S(_[2]))
                }
            }
            function M(t, e, n) {
                return n ? t | 1 << e : t & ~(1 << e)
            }
            function E(t) {
                var e = t.x.toString() + t.y.toString() + t.z.toString();
                return void 0 !== c[e] ? c[e] : (c[e] = s.length / 3,
                s.push(t.x, t.y, t.z),
                c[e])
            }
            function S(t) {
                var e = t.r.toString() + t.g.toString() + t.b.toString();
                return void 0 !== h[e] ? h[e] : (h[e] = u.length,
                u.push(t.getHex()),
                h[e])
            }
            function T(t) {
                var e = t.x.toString() + t.y.toString();
                return void 0 !== d[e] ? d[e] : (d[e] = l.length / 2,
                l.push(t.x, t.y),
                d[e])
            }
            return t.data = {},
            t.data.vertices = r,
            t.data.normals = s,
            u.length > 0 && (t.data.colors = u),
            l.length > 0 && (t.data.uvs = [l]),
            t.data.faces = o,
            t
        },
        clone: function() {
            return (new gr).copy(this)
        },
        copy: function(t) {
            var e, n, r, i, a, o;
            this.vertices = [],
            this.colors = [],
            this.faces = [],
            this.faceVertexUvs = [[]],
            this.morphTargets = [],
            this.morphNormals = [],
            this.skinWeights = [],
            this.skinIndices = [],
            this.lineDistances = [],
            this.boundingBox = null,
            this.boundingSphere = null,
            this.name = t.name;
            var s = t.vertices;
            for (e = 0,
            n = s.length; e < n; e++)
                this.vertices.push(s[e].clone());
            var c = t.colors;
            for (e = 0,
            n = c.length; e < n; e++)
                this.colors.push(c[e].clone());
            var u = t.faces;
            for (e = 0,
            n = u.length; e < n; e++)
                this.faces.push(u[e].clone());
            for (e = 0,
            n = t.faceVertexUvs.length; e < n; e++) {
                var h = t.faceVertexUvs[e];
                for (void 0 === this.faceVertexUvs[e] && (this.faceVertexUvs[e] = []),
                r = 0,
                i = h.length; r < i; r++) {
                    var l = h[r]
                      , d = [];
                    for (a = 0,
                    o = l.length; a < o; a++) {
                        var p = l[a];
                        d.push(p.clone())
                    }
                    this.faceVertexUvs[e].push(d)
                }
            }
            var f = t.morphTargets;
            for (e = 0,
            n = f.length; e < n; e++) {
                var m = {};
                if (m.name = f[e].name,
                void 0 !== f[e].vertices)
                    for (m.vertices = [],
                    r = 0,
                    i = f[e].vertices.length; r < i; r++)
                        m.vertices.push(f[e].vertices[r].clone());
                if (void 0 !== f[e].normals)
                    for (m.normals = [],
                    r = 0,
                    i = f[e].normals.length; r < i; r++)
                        m.normals.push(f[e].normals[r].clone());
                this.morphTargets.push(m)
            }
            var g = t.morphNormals;
            for (e = 0,
            n = g.length; e < n; e++) {
                var v = {};
                if (void 0 !== g[e].vertexNormals)
                    for (v.vertexNormals = [],
                    r = 0,
                    i = g[e].vertexNormals.length; r < i; r++) {
                        var y = g[e].vertexNormals[r]
                          , x = {};
                        x.a = y.a.clone(),
                        x.b = y.b.clone(),
                        x.c = y.c.clone(),
                        v.vertexNormals.push(x)
                    }
                if (void 0 !== g[e].faceNormals)
                    for (v.faceNormals = [],
                    r = 0,
                    i = g[e].faceNormals.length; r < i; r++)
                        v.faceNormals.push(g[e].faceNormals[r].clone());
                this.morphNormals.push(v)
            }
            var b = t.skinWeights;
            for (e = 0,
            n = b.length; e < n; e++)
                this.skinWeights.push(b[e].clone());
            var w = t.skinIndices;
            for (e = 0,
            n = w.length; e < n; e++)
                this.skinIndices.push(w[e].clone());
            var _ = t.lineDistances;
            for (e = 0,
            n = _.length; e < n; e++)
                this.lineDistances.push(_[e]);
            var M = t.boundingBox;
            null !== M && (this.boundingBox = M.clone());
            var E = t.boundingSphere;
            return null !== E && (this.boundingSphere = E.clone()),
            this.elementsNeedUpdate = t.elementsNeedUpdate,
            this.verticesNeedUpdate = t.verticesNeedUpdate,
            this.uvsNeedUpdate = t.uvsNeedUpdate,
            this.normalsNeedUpdate = t.normalsNeedUpdate,
            this.colorsNeedUpdate = t.colorsNeedUpdate,
            this.lineDistancesNeedUpdate = t.lineDistancesNeedUpdate,
            this.groupsNeedUpdate = t.groupsNeedUpdate,
            this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }),
    vr.prototype = Object.create(gr.prototype),
    vr.prototype.constructor = vr,
    yr.prototype = Object.create(pr.prototype),
    yr.prototype.constructor = yr;
    var wr = {
        clone: xr,
        merge: br
    }
      , _r = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"
      , Mr = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
    function Er(t) {
        Zn.call(this),
        this.type = "ShaderMaterial",
        this.defines = {},
        this.uniforms = {},
        this.vertexShader = _r,
        this.fragmentShader = Mr,
        this.linewidth = 1,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.fog = !1,
        this.lights = !1,
        this.clipping = !1,
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        },
        this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0]
        },
        this.index0AttributeName = void 0,
        this.uniformsNeedUpdate = !1,
        void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),
        this.setValues(t))
    }
    function Sr() {
        Dn.call(this),
        this.type = "Camera",
        this.matrixWorldInverse = new hn,
        this.projectionMatrix = new hn,
        this.projectionMatrixInverse = new hn
    }
    function Tr(t, e, n, r) {
        Sr.call(this),
        this.type = "PerspectiveCamera",
        this.fov = void 0 !== t ? t : 50,
        this.zoom = 1,
        this.near = void 0 !== n ? n : .1,
        this.far = void 0 !== r ? r : 2e3,
        this.focus = 10,
        this.aspect = void 0 !== e ? e : 1,
        this.view = null,
        this.filmGauge = 35,
        this.filmOffset = 0,
        this.updateProjectionMatrix()
    }
    Er.prototype = Object.create(Zn.prototype),
    Er.prototype.constructor = Er,
    Er.prototype.isShaderMaterial = !0,
    Er.prototype.copy = function(t) {
        return Zn.prototype.copy.call(this, t),
        this.fragmentShader = t.fragmentShader,
        this.vertexShader = t.vertexShader,
        this.uniforms = xr(t.uniforms),
        this.defines = Object.assign({}, t.defines),
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.lights = t.lights,
        this.clipping = t.clipping,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.morphNormals = t.morphNormals,
        this.extensions = t.extensions,
        this
    }
    ,
    Er.prototype.toJSON = function(t) {
        var e = Zn.prototype.toJSON.call(this, t);
        for (var n in e.uniforms = {},
        this.uniforms) {
            var r = this.uniforms[n].value;
            r && r.isTexture ? e.uniforms[n] = {
                type: "t",
                value: r.toJSON(t).uuid
            } : r && r.isColor ? e.uniforms[n] = {
                type: "c",
                value: r.getHex()
            } : r && r.isVector2 ? e.uniforms[n] = {
                type: "v2",
                value: r.toArray()
            } : r && r.isVector3 ? e.uniforms[n] = {
                type: "v3",
                value: r.toArray()
            } : r && r.isVector4 ? e.uniforms[n] = {
                type: "v4",
                value: r.toArray()
            } : r && r.isMatrix3 ? e.uniforms[n] = {
                type: "m3",
                value: r.toArray()
            } : r && r.isMatrix4 ? e.uniforms[n] = {
                type: "m4",
                value: r.toArray()
            } : e.uniforms[n] = {
                value: r
            }
        }
        Object.keys(this.defines).length > 0 && (e.defines = this.defines),
        e.vertexShader = this.vertexShader,
        e.fragmentShader = this.fragmentShader;
        var i = {};
        for (var a in this.extensions)
            !0 === this.extensions[a] && (i[a] = !0);
        return Object.keys(i).length > 0 && (e.extensions = i),
        e
    }
    ,
    Sr.prototype = Object.assign(Object.create(Dn.prototype), {
        constructor: Sr,
        isCamera: !0,
        copy: function(t, e) {
            return Dn.prototype.copy.call(this, t, e),
            this.matrixWorldInverse.copy(t.matrixWorldInverse),
            this.projectionMatrix.copy(t.projectionMatrix),
            this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
            this
        },
        getWorldDirection: function(t) {
            void 0 === t && (console.warn("THREE.Camera: .getWorldDirection() target is now required"),
            t = new We),
            this.updateMatrixWorld(!0);
            var e = this.matrixWorld.elements;
            return t.set(-e[8], -e[9], -e[10]).normalize()
        },
        updateMatrixWorld: function(t) {
            Dn.prototype.updateMatrixWorld.call(this, t),
            this.matrixWorldInverse.getInverse(this.matrixWorld)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        }
    }),
    Tr.prototype = Object.assign(Object.create(Sr.prototype), {
        constructor: Tr,
        isPerspectiveCamera: !0,
        copy: function(t, e) {
            return Sr.prototype.copy.call(this, t, e),
            this.fov = t.fov,
            this.zoom = t.zoom,
            this.near = t.near,
            this.far = t.far,
            this.focus = t.focus,
            this.aspect = t.aspect,
            this.view = null === t.view ? null : Object.assign({}, t.view),
            this.filmGauge = t.filmGauge,
            this.filmOffset = t.filmOffset,
            this
        },
        setFocalLength: function(t) {
            var e = .5 * this.getFilmHeight() / t;
            this.fov = 2 * Ve.RAD2DEG * Math.atan(e),
            this.updateProjectionMatrix()
        },
        getFocalLength: function() {
            var t = Math.tan(.5 * Ve.DEG2RAD * this.fov);
            return .5 * this.getFilmHeight() / t
        },
        getEffectiveFOV: function() {
            return 2 * Ve.RAD2DEG * Math.atan(Math.tan(.5 * Ve.DEG2RAD * this.fov) / this.zoom)
        },
        getFilmWidth: function() {
            return this.filmGauge * Math.min(this.aspect, 1)
        },
        getFilmHeight: function() {
            return this.filmGauge / Math.max(this.aspect, 1)
        },
        setViewOffset: function(t, e, n, r, i, a) {
            this.aspect = t / e,
            null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }),
            this.view.enabled = !0,
            this.view.fullWidth = t,
            this.view.fullHeight = e,
            this.view.offsetX = n,
            this.view.offsetY = r,
            this.view.width = i,
            this.view.height = a,
            this.updateProjectionMatrix()
        },
        clearViewOffset: function() {
            null !== this.view && (this.view.enabled = !1),
            this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function() {
            var t = this.near
              , e = t * Math.tan(.5 * Ve.DEG2RAD * this.fov) / this.zoom
              , n = 2 * e
              , r = this.aspect * n
              , i = -.5 * r
              , a = this.view;
            if (null !== this.view && this.view.enabled) {
                var o = a.fullWidth
                  , s = a.fullHeight;
                i += a.offsetX * r / o,
                e -= a.offsetY * n / s,
                r *= a.width / o,
                n *= a.height / s
            }
            var c = this.filmOffset;
            0 !== c && (i += t * c / this.getFilmWidth()),
            this.projectionMatrix.makePerspective(i, i + r, e, e - n, t, this.far),
            this.projectionMatrixInverse.getInverse(this.projectionMatrix)
        },
        toJSON: function(t) {
            var e = Dn.prototype.toJSON.call(this, t);
            return e.object.fov = this.fov,
            e.object.zoom = this.zoom,
            e.object.near = this.near,
            e.object.far = this.far,
            e.object.focus = this.focus,
            e.object.aspect = this.aspect,
            null !== this.view && (e.object.view = Object.assign({}, this.view)),
            e.object.filmGauge = this.filmGauge,
            e.object.filmOffset = this.filmOffset,
            e
        }
    });
    var Ar, Lr, Rr = 90, Pr = 1;
    function Cr(t, e, n, r) {
        Dn.call(this),
        this.type = "CubeCamera";
        var i = new Tr(Rr,Pr,t,e);
        i.up.set(0, -1, 0),
        i.lookAt(new We(1,0,0)),
        this.add(i);
        var a = new Tr(Rr,Pr,t,e);
        a.up.set(0, -1, 0),
        a.lookAt(new We(-1,0,0)),
        this.add(a);
        var o = new Tr(Rr,Pr,t,e);
        o.up.set(0, 0, 1),
        o.lookAt(new We(0,1,0)),
        this.add(o);
        var s = new Tr(Rr,Pr,t,e);
        s.up.set(0, 0, -1),
        s.lookAt(new We(0,-1,0)),
        this.add(s);
        var c = new Tr(Rr,Pr,t,e);
        c.up.set(0, -1, 0),
        c.lookAt(new We(0,0,1)),
        this.add(c);
        var u = new Tr(Rr,Pr,t,e);
        u.up.set(0, -1, 0),
        u.lookAt(new We(0,0,-1)),
        this.add(u),
        r = r || {
            format: Ht,
            magFilter: St,
            minFilter: St
        },
        this.renderTarget = new Or(n,n,r),
        this.renderTarget.texture.name = "CubeCamera",
        this.update = function(t, e) {
            null === this.parent && this.updateMatrixWorld();
            var n = t.getRenderTarget()
              , r = this.renderTarget
              , h = r.texture.generateMipmaps;
            r.texture.generateMipmaps = !1,
            t.setRenderTarget(r, 0),
            t.render(e, i),
            t.setRenderTarget(r, 1),
            t.render(e, a),
            t.setRenderTarget(r, 2),
            t.render(e, o),
            t.setRenderTarget(r, 3),
            t.render(e, s),
            t.setRenderTarget(r, 4),
            t.render(e, c),
            r.texture.generateMipmaps = h,
            t.setRenderTarget(r, 5),
            t.render(e, u),
            t.setRenderTarget(n)
        }
        ,
        this.clear = function(t, e, n, r) {
            for (var i = t.getRenderTarget(), a = this.renderTarget, o = 0; o < 6; o++)
                t.setRenderTarget(a, o),
                t.clear(e, n, r);
            t.setRenderTarget(i)
        }
    }
    function Or(t, e, n) {
        cn.call(this, t, e, n)
    }
    function Ir(t, e, n, r, i, a, o, s, c, u, h, l) {
        on.call(this, null, a, o, s, c, u, r, i, h, l),
        this.image = {
            data: t,
            width: e,
            height: n
        },
        this.magFilter = void 0 !== c ? c : _t,
        this.minFilter = void 0 !== u ? u : _t,
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1
    }
    function Dr(t, e) {
        this.normal = void 0 !== t ? t : new We(1,0,0),
        this.constant = void 0 !== e ? e : 0
    }
    function Nr(t, e, n, r, i, a) {
        this.planes = [void 0 !== t ? t : new Dr, void 0 !== e ? e : new Dr, void 0 !== n ? n : new Dr, void 0 !== r ? r : new Dr, void 0 !== i ? i : new Dr, void 0 !== a ? a : new Dr]
    }
    Cr.prototype = Object.create(Dn.prototype),
    Cr.prototype.constructor = Cr,
    Or.prototype = Object.create(cn.prototype),
    Or.prototype.constructor = Or,
    Or.prototype.isWebGLRenderTargetCube = !0,
    Or.prototype.fromEquirectangularTexture = function(t, e) {
        this.texture.type = e.type,
        this.texture.format = e.format,
        this.texture.encoding = e.encoding;
        var n = new Nn
          , r = {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: ["varying vec3 vWorldDirection;", "vec3 transformDirection( in vec3 dir, in mat4 matrix ) {", "\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );", "}", "void main() {", "\tvWorldDirection = transformDirection( position, modelMatrix );", "\t#include <begin_vertex>", "\t#include <project_vertex>", "}"].join("\n"),
            fragmentShader: ["uniform sampler2D tEquirect;", "varying vec3 vWorldDirection;", "#define RECIPROCAL_PI 0.31830988618", "#define RECIPROCAL_PI2 0.15915494", "void main() {", "\tvec3 direction = normalize( vWorldDirection );", "\tvec2 sampleUV;", "\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;", "\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;", "\tgl_FragColor = texture2D( tEquirect, sampleUV );", "}"].join("\n")
        }
          , i = new Er({
            type: "CubemapFromEquirect",
            uniforms: xr(r.uniforms),
            vertexShader: r.vertexShader,
            fragmentShader: r.fragmentShader,
            side: x,
            blending: T
        });
        i.uniforms.tEquirect.value = e;
        var a = new fr(new yr(5,5,5),i);
        n.add(a);
        var o = new Cr(1,10,1);
        return o.renderTarget = this,
        o.renderTarget.texture.name = "CubeCameraTexture",
        o.update(t, n),
        a.geometry.dispose(),
        a.material.dispose(),
        this
    }
    ,
    Ir.prototype = Object.create(on.prototype),
    Ir.prototype.constructor = Ir,
    Ir.prototype.isDataTexture = !0,
    Object.assign(Dr.prototype, {
        isPlane: !0,
        set: function(t, e) {
            return this.normal.copy(t),
            this.constant = e,
            this
        },
        setComponents: function(t, e, n, r) {
            return this.normal.set(t, e, n),
            this.constant = r,
            this
        },
        setFromNormalAndCoplanarPoint: function(t, e) {
            return this.normal.copy(t),
            this.constant = -e.dot(this.normal),
            this
        },
        setFromCoplanarPoints: function() {
            var t = new We
              , e = new We;
            return function(n, r, i) {
                var a = t.subVectors(i, r).cross(e.subVectors(n, r)).normalize();
                return this.setFromNormalAndCoplanarPoint(a, n),
                this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.normal.copy(t.normal),
            this.constant = t.constant,
            this
        },
        normalize: function() {
            var t = 1 / this.normal.length();
            return this.normal.multiplyScalar(t),
            this.constant *= t,
            this
        },
        negate: function() {
            return this.constant *= -1,
            this.normal.negate(),
            this
        },
        distanceToPoint: function(t) {
            return this.normal.dot(t) + this.constant
        },
        distanceToSphere: function(t) {
            return this.distanceToPoint(t.center) - t.radius
        },
        projectPoint: function(t, e) {
            return void 0 === e && (console.warn("THREE.Plane: .projectPoint() target is now required"),
            e = new We),
            e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
        },
        intersectLine: function() {
            var t = new We;
            return function(e, n) {
                void 0 === n && (console.warn("THREE.Plane: .intersectLine() target is now required"),
                n = new We);
                var r = e.delta(t)
                  , i = this.normal.dot(r);
                if (0 === i)
                    return 0 === this.distanceToPoint(e.start) ? n.copy(e.start) : void 0;
                var a = -(e.start.dot(this.normal) + this.constant) / i;
                return a < 0 || a > 1 ? void 0 : n.copy(r).multiplyScalar(a).add(e.start)
            }
        }(),
        intersectsLine: function(t) {
            var e = this.distanceToPoint(t.start)
              , n = this.distanceToPoint(t.end);
            return e < 0 && n > 0 || n < 0 && e > 0
        },
        intersectsBox: function(t) {
            return t.intersectsPlane(this)
        },
        intersectsSphere: function(t) {
            return t.intersectsPlane(this)
        },
        coplanarPoint: function(t) {
            return void 0 === t && (console.warn("THREE.Plane: .coplanarPoint() target is now required"),
            t = new We),
            t.copy(this.normal).multiplyScalar(-this.constant)
        },
        applyMatrix4: function() {
            var t = new We
              , e = new qe;
            return function(n, r) {
                var i = r || e.getNormalMatrix(n)
                  , a = this.coplanarPoint(t).applyMatrix4(n)
                  , o = this.normal.applyMatrix3(i).normalize();
                return this.constant = -a.dot(o),
                this
            }
        }(),
        translate: function(t) {
            return this.constant -= t.dot(this.normal),
            this
        },
        equals: function(t) {
            return t.normal.equals(this.normal) && t.constant === this.constant
        }
    }),
    Object.assign(Nr.prototype, {
        set: function(t, e, n, r, i, a) {
            var o = this.planes;
            return o[0].copy(t),
            o[1].copy(e),
            o[2].copy(n),
            o[3].copy(r),
            o[4].copy(i),
            o[5].copy(a),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            for (var e = this.planes, n = 0; n < 6; n++)
                e[n].copy(t.planes[n]);
            return this
        },
        setFromMatrix: function(t) {
            var e = this.planes
              , n = t.elements
              , r = n[0]
              , i = n[1]
              , a = n[2]
              , o = n[3]
              , s = n[4]
              , c = n[5]
              , u = n[6]
              , h = n[7]
              , l = n[8]
              , d = n[9]
              , p = n[10]
              , f = n[11]
              , m = n[12]
              , g = n[13]
              , v = n[14]
              , y = n[15];
            return e[0].setComponents(o - r, h - s, f - l, y - m).normalize(),
            e[1].setComponents(o + r, h + s, f + l, y + m).normalize(),
            e[2].setComponents(o + i, h + c, f + d, y + g).normalize(),
            e[3].setComponents(o - i, h - c, f - d, y - g).normalize(),
            e[4].setComponents(o - a, h - u, f - p, y - v).normalize(),
            e[5].setComponents(o + a, h + u, f + p, y + v).normalize(),
            this
        },
        intersectsObject: (Lr = new zn,
        function(t) {
            var e = t.geometry;
            return null === e.boundingSphere && e.computeBoundingSphere(),
            Lr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),
            this.intersectsSphere(Lr)
        }
        ),
        intersectsSprite: function() {
            var t = new zn;
            return function(e) {
                return t.center.set(0, 0, 0),
                t.radius = .7071067811865476,
                t.applyMatrix4(e.matrixWorld),
                this.intersectsSphere(t)
            }
        }(),
        intersectsSphere: function(t) {
            for (var e = this.planes, n = t.center, r = -t.radius, i = 0; i < 6; i++) {
                if (e[i].distanceToPoint(n) < r)
                    return !1
            }
            return !0
        },
        intersectsBox: (Ar = new We,
        function(t) {
            for (var e = this.planes, n = 0; n < 6; n++) {
                var r = e[n];
                if (Ar.x = r.normal.x > 0 ? t.max.x : t.min.x,
                Ar.y = r.normal.y > 0 ? t.max.y : t.min.y,
                Ar.z = r.normal.z > 0 ? t.max.z : t.min.z,
                r.distanceToPoint(Ar) < 0)
                    return !1
            }
            return !0
        }
        ),
        containsPoint: function(t) {
            for (var e = this.planes, n = 0; n < 6; n++)
                if (e[n].distanceToPoint(t) < 0)
                    return !1;
            return !0
        }
    });
    var Br = {
        alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
        alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
        alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
        aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
        aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
        begin_vertex: "vec3 transformed = vec3( position );",
        beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
        bsdfs: "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}",
        bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
        clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
        clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
        clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvarying vec3 vViewPosition;\n#endif",
        clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif",
        color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
        color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
        color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
        color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
        common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}",
        cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif",
        defaultnormal_vertex: "vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = normalMatrix * objectTangent;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
        displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
        displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif",
        emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
        emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
        encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
        encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
        envmap_fragment: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
        envmap_pars_fragment: "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
        envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
        envmap_physical_pars_fragment: "#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent ));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
        envmap_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
        fog_vertex: "#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif",
        fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",
        fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
        fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
        gradientmap_pars_fragment: "#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif",
        lightmap_fragment: "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif",
        lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
        lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif",
        lights_pars_begin: "uniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
        lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
        lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
        lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif",
        lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#endif\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\tfloat clearCoatInv = 1.0 - clearCoatDHR;\n\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec3 singleScattering = vec3( 0.0 );\n\t\tvec3 multiScattering = vec3( 0.0 );\n\t\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\t\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\t\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\t\treflectedLight.indirectSpecular += clearCoatInv * radiance * singleScattering;\n\t\treflectedLight.indirectDiffuse += multiScattering * cosineWeightedIrradiance;\n\t\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n\t#else\n\t\treflectedLight.indirectSpecular += clearCoatInv * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#endif\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
        lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearCoatRadiance = vec3( 0.0 );\n#endif",
        lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), maxMipLevel );\n\t#ifndef STANDARD\n\t\tclearCoatRadiance += getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), maxMipLevel );\n\t#endif\n#endif",
        lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, irradiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif",
        logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
        logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n#endif",
        logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
        logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\tgl_Position.z *= gl_Position.w;\n\t#endif\n#endif",
        map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
        map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
        map_particle_fragment: "#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif",
        map_particle_pars_fragment: "#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif",
        metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
        metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
        morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif",
        morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
        morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
        normal_fragment_begin: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t#endif\n#endif",
        normal_fragment_maps: "#ifdef USE_NORMALMAP\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t#ifdef FLIP_SIDED\n\t\t\tnormal = - normal;\n\t\t#endif\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\tnormal = normalize( normalMatrix * normal );\n\t#else\n\t\t#ifdef USE_TANGENT\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t\tmapN.xy = normalScale * mapN.xy;\n\t\t\tnormal = normalize( vTBN * mapN );\n\t\t#else\n\t\t\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\t\t#endif\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",
        normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tuniform mat3 normalMatrix;\n\t#else\n\t\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\t\tvec2 st0 = dFdx( vUv.st );\n\t\t\tvec2 st1 = dFdy( vUv.st );\n\t\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\t\tvec3 N = normalize( surf_norm );\n\t\t\tmat3 tsn = mat3( S, T, N );\n\t\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t\tmapN.xy *= normalScale;\n\t\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\treturn normalize( tsn * mapN );\n\t\t}\n\t#endif\n#endif",
        packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
        premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
        project_vertex: "vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;",
        dithering_fragment: "#if defined( DITHERING )\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
        dithering_pars_fragment: "#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
        roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
        roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
        shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
        shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif",
        shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif",
        shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}",
        skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
        skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
        skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
        skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
        specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
        specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
        tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
        tonemapping_pars_fragment: "#ifndef saturate\n\t#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );\n}",
        uv_pars_fragment: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",
        uv_pars_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif",
        uv_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
        uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
        uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
        uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",
        worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif",
        background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
        background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
        cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
        cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
        depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}",
        depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}",
        distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
        distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
        equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
        equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
        linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
        linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
        meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
        meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
        meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
        meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
        meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        meshphysical_frag: "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshphysical_vert: "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
        normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
        points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
        points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
        shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}",
        shadow_vert: "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
        sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"
    }
      , zr = {
        common: {
            diffuse: {
                value: new jn(15658734)
            },
            opacity: {
                value: 1
            },
            map: {
                value: null
            },
            uvTransform: {
                value: new qe
            },
            alphaMap: {
                value: null
            }
        },
        specularmap: {
            specularMap: {
                value: null
            }
        },
        envmap: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            reflectivity: {
                value: 1
            },
            refractionRatio: {
                value: .98
            },
            maxMipLevel: {
                value: 0
            }
        },
        aomap: {
            aoMap: {
                value: null
            },
            aoMapIntensity: {
                value: 1
            }
        },
        lightmap: {
            lightMap: {
                value: null
            },
            lightMapIntensity: {
                value: 1
            }
        },
        emissivemap: {
            emissiveMap: {
                value: null
            }
        },
        bumpmap: {
            bumpMap: {
                value: null
            },
            bumpScale: {
                value: 1
            }
        },
        normalmap: {
            normalMap: {
                value: null
            },
            normalScale: {
                value: new ke(1,1)
            }
        },
        displacementmap: {
            displacementMap: {
                value: null
            },
            displacementScale: {
                value: 1
            },
            displacementBias: {
                value: 0
            }
        },
        roughnessmap: {
            roughnessMap: {
                value: null
            }
        },
        metalnessmap: {
            metalnessMap: {
                value: null
            }
        },
        gradientmap: {
            gradientMap: {
                value: null
            }
        },
        fog: {
            fogDensity: {
                value: 25e-5
            },
            fogNear: {
                value: 1
            },
            fogFar: {
                value: 2e3
            },
            fogColor: {
                value: new jn(16777215)
            }
        },
        lights: {
            ambientLightColor: {
                value: []
            },
            lightProbe: {
                value: []
            },
            directionalLights: {
                value: [],
                properties: {
                    direction: {},
                    color: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            directionalShadowMap: {
                value: []
            },
            directionalShadowMatrix: {
                value: []
            },
            spotLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    direction: {},
                    distance: {},
                    coneCos: {},
                    penumbraCos: {},
                    decay: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            spotShadowMap: {
                value: []
            },
            spotShadowMatrix: {
                value: []
            },
            pointLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    decay: {},
                    distance: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {},
                    shadowCameraNear: {},
                    shadowCameraFar: {}
                }
            },
            pointShadowMap: {
                value: []
            },
            pointShadowMatrix: {
                value: []
            },
            hemisphereLights: {
                value: [],
                properties: {
                    direction: {},
                    skyColor: {},
                    groundColor: {}
                }
            },
            rectAreaLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    width: {},
                    height: {}
                }
            }
        },
        points: {
            diffuse: {
                value: new jn(15658734)
            },
            opacity: {
                value: 1
            },
            size: {
                value: 1
            },
            scale: {
                value: 1
            },
            map: {
                value: null
            },
            uvTransform: {
                value: new qe
            }
        },
        sprite: {
            diffuse: {
                value: new jn(15658734)
            },
            opacity: {
                value: 1
            },
            center: {
                value: new ke(.5,.5)
            },
            rotation: {
                value: 0
            },
            map: {
                value: null
            },
            uvTransform: {
                value: new qe
            }
        }
    }
      , Ur = {
        basic: {
            uniforms: br([zr.common, zr.specularmap, zr.envmap, zr.aomap, zr.lightmap, zr.fog]),
            vertexShader: Br.meshbasic_vert,
            fragmentShader: Br.meshbasic_frag
        },
        lambert: {
            uniforms: br([zr.common, zr.specularmap, zr.envmap, zr.aomap, zr.lightmap, zr.emissivemap, zr.fog, zr.lights, {
                emissive: {
                    value: new jn(0)
                }
            }]),
            vertexShader: Br.meshlambert_vert,
            fragmentShader: Br.meshlambert_frag
        },
        phong: {
            uniforms: br([zr.common, zr.specularmap, zr.envmap, zr.aomap, zr.lightmap, zr.emissivemap, zr.bumpmap, zr.normalmap, zr.displacementmap, zr.gradientmap, zr.fog, zr.lights, {
                emissive: {
                    value: new jn(0)
                },
                specular: {
                    value: new jn(1118481)
                },
                shininess: {
                    value: 30
                }
            }]),
            vertexShader: Br.meshphong_vert,
            fragmentShader: Br.meshphong_frag
        },
        standard: {
            uniforms: br([zr.common, zr.envmap, zr.aomap, zr.lightmap, zr.emissivemap, zr.bumpmap, zr.normalmap, zr.displacementmap, zr.roughnessmap, zr.metalnessmap, zr.fog, zr.lights, {
                emissive: {
                    value: new jn(0)
                },
                roughness: {
                    value: .5
                },
                metalness: {
                    value: .5
                },
                envMapIntensity: {
                    value: 1
                }
            }]),
            vertexShader: Br.meshphysical_vert,
            fragmentShader: Br.meshphysical_frag
        },
        matcap: {
            uniforms: br([zr.common, zr.bumpmap, zr.normalmap, zr.displacementmap, zr.fog, {
                matcap: {
                    value: null
                }
            }]),
            vertexShader: Br.meshmatcap_vert,
            fragmentShader: Br.meshmatcap_frag
        },
        points: {
            uniforms: br([zr.points, zr.fog]),
            vertexShader: Br.points_vert,
            fragmentShader: Br.points_frag
        },
        dashed: {
            uniforms: br([zr.common, zr.fog, {
                scale: {
                    value: 1
                },
                dashSize: {
                    value: 1
                },
                totalSize: {
                    value: 2
                }
            }]),
            vertexShader: Br.linedashed_vert,
            fragmentShader: Br.linedashed_frag
        },
        depth: {
            uniforms: br([zr.common, zr.displacementmap]),
            vertexShader: Br.depth_vert,
            fragmentShader: Br.depth_frag
        },
        normal: {
            uniforms: br([zr.common, zr.bumpmap, zr.normalmap, zr.displacementmap, {
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: Br.normal_vert,
            fragmentShader: Br.normal_frag
        },
        sprite: {
            uniforms: br([zr.sprite, zr.fog]),
            vertexShader: Br.sprite_vert,
            fragmentShader: Br.sprite_frag
        },
        background: {
            uniforms: {
                uvTransform: {
                    value: new qe
                },
                t2D: {
                    value: null
                }
            },
            vertexShader: Br.background_vert,
            fragmentShader: Br.background_frag
        },
        cube: {
            uniforms: {
                tCube: {
                    value: null
                },
                tFlip: {
                    value: -1
                },
                opacity: {
                    value: 1
                }
            },
            vertexShader: Br.cube_vert,
            fragmentShader: Br.cube_frag
        },
        equirect: {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: Br.equirect_vert,
            fragmentShader: Br.equirect_frag
        },
        distanceRGBA: {
            uniforms: br([zr.common, zr.displacementmap, {
                referencePosition: {
                    value: new We
                },
                nearDistance: {
                    value: 1
                },
                farDistance: {
                    value: 1e3
                }
            }]),
            vertexShader: Br.distanceRGBA_vert,
            fragmentShader: Br.distanceRGBA_frag
        },
        shadow: {
            uniforms: br([zr.lights, zr.fog, {
                color: {
                    value: new jn(0)
                },
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: Br.shadow_vert,
            fragmentShader: Br.shadow_frag
        }
    };
    function Gr() {
        var t = null
          , e = !1
          , n = null;
        function r(i, a) {
            !1 !== e && (n(i, a),
            t.requestAnimationFrame(r))
        }
        return {
            start: function() {
                !0 !== e && null !== n && (t.requestAnimationFrame(r),
                e = !0)
            },
            stop: function() {
                e = !1
            },
            setAnimationLoop: function(t) {
                n = t
            },
            setContext: function(e) {
                t = e
            }
        }
    }
    function Fr(t) {
        var e = new WeakMap;
        return {
            get: function(t) {
                return t.isInterleavedBufferAttribute && (t = t.data),
                e.get(t)
            },
            remove: function(n) {
                n.isInterleavedBufferAttribute && (n = n.data);
                var r = e.get(n);
                r && (t.deleteBuffer(r.buffer),
                e.delete(n))
            },
            update: function(n, r) {
                n.isInterleavedBufferAttribute && (n = n.data);
                var i = e.get(n);
                void 0 === i ? e.set(n, function(e, n) {
                    var r = e.array
                      , i = e.dynamic ? 35048 : 35044
                      , a = t.createBuffer();
                    t.bindBuffer(n, a),
                    t.bufferData(n, r, i),
                    e.onUploadCallback();
                    var o = 5126;
                    return r instanceof Float32Array ? o = 5126 : r instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : r instanceof Uint16Array ? o = 5123 : r instanceof Int16Array ? o = 5122 : r instanceof Uint32Array ? o = 5125 : r instanceof Int32Array ? o = 5124 : r instanceof Int8Array ? o = 5120 : r instanceof Uint8Array && (o = 5121),
                    {
                        buffer: a,
                        type: o,
                        bytesPerElement: r.BYTES_PER_ELEMENT,
                        version: e.version
                    }
                }(n, r)) : i.version < n.version && (!function(e, n, r) {
                    var i = n.array
                      , a = n.updateRange;
                    t.bindBuffer(r, e),
                    !1 === n.dynamic ? t.bufferData(r, i, 35044) : -1 === a.count ? t.bufferSubData(r, 0, i) : 0 === a.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (t.bufferSubData(r, a.offset * i.BYTES_PER_ELEMENT, i.subarray(a.offset, a.offset + a.count)),
                    a.count = -1)
                }(i.buffer, n, r),
                i.version = n.version)
            }
        }
    }
    function Hr(t, e, n, r) {
        gr.call(this),
        this.type = "PlaneGeometry",
        this.parameters = {
            width: t,
            height: e,
            widthSegments: n,
            heightSegments: r
        },
        this.fromBufferGeometry(new Vr(t,e,n,r)),
        this.mergeVertices()
    }
    function Vr(t, e, n, r) {
        pr.call(this),
        this.type = "PlaneBufferGeometry",
        this.parameters = {
            width: t,
            height: e,
            widthSegments: n,
            heightSegments: r
        };
        var i, a, o = (t = t || 1) / 2, s = (e = e || 1) / 2, c = Math.floor(n) || 1, u = Math.floor(r) || 1, h = c + 1, l = u + 1, d = t / c, p = e / u, f = [], m = [], g = [], v = [];
        for (a = 0; a < l; a++) {
            var y = a * p - s;
            for (i = 0; i < h; i++) {
                var x = i * d - o;
                m.push(x, -y, 0),
                g.push(0, 0, 1),
                v.push(i / c),
                v.push(1 - a / u)
            }
        }
        for (a = 0; a < u; a++)
            for (i = 0; i < c; i++) {
                var b = i + h * a
                  , w = i + h * (a + 1)
                  , _ = i + 1 + h * (a + 1)
                  , M = i + 1 + h * a;
                f.push(b, w, M),
                f.push(w, _, M)
            }
        this.setIndex(f),
        this.addAttribute("position", new or(m,3)),
        this.addAttribute("normal", new or(g,3)),
        this.addAttribute("uv", new or(v,2))
    }
    function kr(t, e, n, r) {
        var i, a, o = new jn(0), s = 0, c = null, u = 0;
        function h(t, n) {
            e.buffers.color.setClear(t.r, t.g, t.b, n, r)
        }
        return {
            getClearColor: function() {
                return o
            },
            setClearColor: function(t, e) {
                o.set(t),
                h(o, s = void 0 !== e ? e : 1)
            },
            getClearAlpha: function() {
                return s
            },
            setClearAlpha: function(t) {
                h(o, s = t)
            },
            render: function(e, r, l, d) {
                var p = r.background
                  , f = t.vr
                  , m = f.getSession && f.getSession();
                if (m && "additive" === m.environmentBlendMode && (p = null),
                null === p ? (h(o, s),
                c = null,
                u = 0) : p && p.isColor && (h(p, 1),
                d = !0,
                c = null,
                u = 0),
                (t.autoClear || d) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil),
                p && (p.isCubeTexture || p.isWebGLRenderTargetCube)) {
                    void 0 === a && ((a = new fr(new yr(1,1,1),new Er({
                        type: "BackgroundCubeMaterial",
                        uniforms: xr(Ur.cube.uniforms),
                        vertexShader: Ur.cube.vertexShader,
                        fragmentShader: Ur.cube.fragmentShader,
                        side: x,
                        depthTest: !1,
                        depthWrite: !1,
                        fog: !1
                    }))).geometry.removeAttribute("normal"),
                    a.geometry.removeAttribute("uv"),
                    a.onBeforeRender = function(t, e, n) {
                        this.matrixWorld.copyPosition(n.matrixWorld)
                    }
                    ,
                    Object.defineProperty(a.material, "map", {
                        get: function() {
                            return this.uniforms.tCube.value
                        }
                    }),
                    n.update(a));
                    var g = p.isWebGLRenderTargetCube ? p.texture : p;
                    a.material.uniforms.tCube.value = g,
                    a.material.uniforms.tFlip.value = p.isWebGLRenderTargetCube ? 1 : -1,
                    c === p && u === g.version || (a.material.needsUpdate = !0,
                    c = p,
                    u = g.version),
                    e.unshift(a, a.geometry, a.material, 0, 0, null)
                } else
                    p && p.isTexture && (void 0 === i && ((i = new fr(new Vr(2,2),new Er({
                        type: "BackgroundMaterial",
                        uniforms: xr(Ur.background.uniforms),
                        vertexShader: Ur.background.vertexShader,
                        fragmentShader: Ur.background.fragmentShader,
                        side: y,
                        depthTest: !1,
                        depthWrite: !1,
                        fog: !1
                    }))).geometry.removeAttribute("normal"),
                    Object.defineProperty(i.material, "map", {
                        get: function() {
                            return this.uniforms.t2D.value
                        }
                    }),
                    n.update(i)),
                    i.material.uniforms.t2D.value = p,
                    !0 === p.matrixAutoUpdate && p.updateMatrix(),
                    i.material.uniforms.uvTransform.value.copy(p.matrix),
                    c === p && u === p.version || (i.material.needsUpdate = !0,
                    c = p,
                    u = p.version),
                    e.unshift(i, i.geometry, i.material, 0, 0, null))
            }
        }
    }
    function jr(t, e, n, r) {
        var i;
        this.setMode = function(t) {
            i = t
        }
        ,
        this.render = function(e, r) {
            t.drawArrays(i, e, r),
            n.update(r, i)
        }
        ,
        this.renderInstances = function(a, o, s) {
            var c;
            if (r.isWebGL2)
                c = t;
            else if (null === (c = e.get("ANGLE_instanced_arrays")))
                return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            c[r.isWebGL2 ? "drawArraysInstanced" : "drawArraysInstancedANGLE"](i, o, s, a.maxInstancedCount),
            n.update(s, i, a.maxInstancedCount)
        }
    }
    function Wr(t, e, n) {
        var r;
        function i(e) {
            if ("highp" === e) {
                if (t.getShaderPrecisionFormat(35633, 36338).precision > 0 && t.getShaderPrecisionFormat(35632, 36338).precision > 0)
                    return "highp";
                e = "mediump"
            }
            return "mediump" === e && t.getShaderPrecisionFormat(35633, 36337).precision > 0 && t.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
        }
        var a = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext
          , o = void 0 !== n.precision ? n.precision : "highp"
          , s = i(o);
        s !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", s, "instead."),
        o = s);
        var c = !0 === n.logarithmicDepthBuffer
          , u = t.getParameter(34930)
          , h = t.getParameter(35660)
          , l = t.getParameter(3379)
          , d = t.getParameter(34076)
          , p = t.getParameter(34921)
          , f = t.getParameter(36347)
          , m = t.getParameter(36348)
          , g = t.getParameter(36349)
          , v = h > 0
          , y = a || !!e.get("OES_texture_float");
        return {
            isWebGL2: a,
            getMaxAnisotropy: function() {
                if (void 0 !== r)
                    return r;
                var n = e.get("EXT_texture_filter_anisotropic");
                return r = null !== n ? t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
            },
            getMaxPrecision: i,
            precision: o,
            logarithmicDepthBuffer: c,
            maxTextures: u,
            maxVertexTextures: h,
            maxTextureSize: l,
            maxCubemapSize: d,
            maxAttributes: p,
            maxVertexUniforms: f,
            maxVaryings: m,
            maxFragmentUniforms: g,
            vertexTextures: v,
            floatFragmentTextures: y,
            floatVertexTextures: v && y,
            maxSamples: a ? t.getParameter(36183) : 0
        }
    }
    function qr() {
        var t = this
          , e = null
          , n = 0
          , r = !1
          , i = !1
          , a = new Dr
          , o = new qe
          , s = {
            value: null,
            needsUpdate: !1
        };
        function c() {
            s.value !== e && (s.value = e,
            s.needsUpdate = n > 0),
            t.numPlanes = n,
            t.numIntersection = 0
        }
        function u(e, n, r, i) {
            var c = null !== e ? e.length : 0
              , u = null;
            if (0 !== c) {
                if (u = s.value,
                !0 !== i || null === u) {
                    var h = r + 4 * c
                      , l = n.matrixWorldInverse;
                    o.getNormalMatrix(l),
                    (null === u || u.length < h) && (u = new Float32Array(h));
                    for (var d = 0, p = r; d !== c; ++d,
                    p += 4)
                        a.copy(e[d]).applyMatrix4(l, o),
                        a.normal.toArray(u, p),
                        u[p + 3] = a.constant
                }
                s.value = u,
                s.needsUpdate = !0
            }
            return t.numPlanes = c,
            u
        }
        this.uniform = s,
        this.numPlanes = 0,
        this.numIntersection = 0,
        this.init = function(t, i, a) {
            var o = 0 !== t.length || i || 0 !== n || r;
            return r = i,
            e = u(t, a, 0),
            n = t.length,
            o
        }
        ,
        this.beginShadows = function() {
            i = !0,
            u(null)
        }
        ,
        this.endShadows = function() {
            i = !1,
            c()
        }
        ,
        this.setState = function(t, a, o, h, l, d) {
            if (!r || null === t || 0 === t.length || i && !o)
                i ? u(null) : c();
            else {
                var p = i ? 0 : n
                  , f = 4 * p
                  , m = l.clippingState || null;
                s.value = m,
                m = u(t, h, f, d);
                for (var g = 0; g !== f; ++g)
                    m[g] = e[g];
                l.clippingState = m,
                this.numIntersection = a ? this.numPlanes : 0,
                this.numPlanes += p
            }
        }
    }
    function Xr(t) {
        var e = {};
        return {
            get: function(n) {
                if (void 0 !== e[n])
                    return e[n];
                var r;
                switch (n) {
                case "WEBGL_depth_texture":
                    r = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
                    break;
                case "EXT_texture_filter_anisotropic":
                    r = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                    break;
                case "WEBGL_compressed_texture_s3tc":
                    r = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                    break;
                case "WEBGL_compressed_texture_pvrtc":
                    r = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                    break;
                default:
                    r = t.getExtension(n)
                }
                return null === r && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."),
                e[n] = r,
                r
            }
        }
    }
    function Yr(t, e, n) {
        var r = {}
          , i = {};
        function a(t) {
            var o = t.target
              , s = r[o.id];
            for (var c in null !== s.index && e.remove(s.index),
            s.attributes)
                e.remove(s.attributes[c]);
            o.removeEventListener("dispose", a),
            delete r[o.id];
            var u = i[s.id];
            u && (e.remove(u),
            delete i[s.id]),
            n.memory.geometries--
        }
        return {
            get: function(t, e) {
                var i = r[e.id];
                return i || (e.addEventListener("dispose", a),
                e.isBufferGeometry ? i = e : e.isGeometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = (new pr).setFromObject(t)),
                i = e._bufferGeometry),
                r[e.id] = i,
                n.memory.geometries++,
                i)
            },
            update: function(t) {
                var n = t.index
                  , r = t.attributes;
                for (var i in null !== n && e.update(n, 34963),
                r)
                    e.update(r[i], 34962);
                var a = t.morphAttributes;
                for (var i in a)
                    for (var o = a[i], s = 0, c = o.length; s < c; s++)
                        e.update(o[s], 34962)
            },
            getWireframeAttribute: function(t) {
                var n = i[t.id];
                if (n)
                    return n;
                var r, a = [], o = t.index, s = t.attributes;
                if (null !== o)
                    for (var c = 0, u = (r = o.array).length; c < u; c += 3) {
                        var h = r[c + 0]
                          , l = r[c + 1]
                          , d = r[c + 2];
                        a.push(h, l, l, d, d, h)
                    }
                else
                    for (c = 0,
                    u = (r = s.position.array).length / 3 - 1; c < u; c += 3) {
                        h = c + 0,
                        l = c + 1,
                        d = c + 2;
                        a.push(h, l, l, d, d, h)
                    }
                return n = new (ur(a) > 65535 ? ar : rr)(a,1),
                e.update(n, 34963),
                i[t.id] = n,
                n
            }
        }
    }
    function Jr(t, e, n, r) {
        var i, a, o;
        this.setMode = function(t) {
            i = t
        }
        ,
        this.setIndex = function(t) {
            a = t.type,
            o = t.bytesPerElement
        }
        ,
        this.render = function(e, r) {
            t.drawElements(i, r, a, e * o),
            n.update(r, i)
        }
        ,
        this.renderInstances = function(s, c, u) {
            var h;
            if (r.isWebGL2)
                h = t;
            else if (null === (h = e.get("ANGLE_instanced_arrays")))
                return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            h[r.isWebGL2 ? "drawElementsInstanced" : "drawElementsInstancedANGLE"](i, u, a, c * o, s.maxInstancedCount),
            n.update(u, i, s.maxInstancedCount)
        }
    }
    function Zr(t) {
        var e = {
            frame: 0,
            calls: 0,
            triangles: 0,
            points: 0,
            lines: 0
        };
        return {
            memory: {
                geometries: 0,
                textures: 0
            },
            render: e,
            programs: null,
            autoReset: !0,
            reset: function() {
                e.frame++,
                e.calls = 0,
                e.triangles = 0,
                e.points = 0,
                e.lines = 0
            },
            update: function(t, n, r) {
                switch (r = r || 1,
                e.calls++,
                n) {
                case 4:
                    e.triangles += r * (t / 3);
                    break;
                case 5:
                case 6:
                    e.triangles += r * (t - 2);
                    break;
                case 1:
                    e.lines += r * (t / 2);
                    break;
                case 3:
                    e.lines += r * (t - 1);
                    break;
                case 2:
                    e.lines += r * t;
                    break;
                case 0:
                    e.points += r * t;
                    break;
                default:
                    console.error("THREE.WebGLInfo: Unknown draw mode:", n)
                }
            }
        }
    }
    function Qr(t, e) {
        return Math.abs(e[1]) - Math.abs(t[1])
    }
    function Kr(t) {
        var e = {}
          , n = new Float32Array(8);
        return {
            update: function(r, i, a, o) {
                var s = r.morphTargetInfluences
                  , c = s.length
                  , u = e[i.id];
                if (void 0 === u) {
                    u = [];
                    for (var h = 0; h < c; h++)
                        u[h] = [h, 0];
                    e[i.id] = u
                }
                var l = a.morphTargets && i.morphAttributes.position
                  , d = a.morphNormals && i.morphAttributes.normal;
                for (h = 0; h < c; h++) {
                    0 !== (p = u[h])[1] && (l && i.removeAttribute("morphTarget" + h),
                    d && i.removeAttribute("morphNormal" + h))
                }
                for (h = 0; h < c; h++) {
                    (p = u[h])[0] = h,
                    p[1] = s[h]
                }
                for (u.sort(Qr),
                h = 0; h < 8; h++) {
                    var p;
                    if (p = u[h]) {
                        var f = p[0]
                          , m = p[1];
                        if (m) {
                            l && i.addAttribute("morphTarget" + h, l[f]),
                            d && i.addAttribute("morphNormal" + h, d[f]),
                            n[h] = m;
                            continue
                        }
                    }
                    n[h] = 0
                }
                o.getUniforms().setValue(t, "morphTargetInfluences", n)
            }
        }
    }
    function $r(t, e) {
        var n = {};
        return {
            update: function(r) {
                var i = e.render.frame
                  , a = r.geometry
                  , o = t.get(r, a);
                return n[o.id] !== i && (a.isGeometry && o.updateFromObject(r),
                t.update(o),
                n[o.id] = i),
                o
            },
            dispose: function() {
                n = {}
            }
        }
    }
    function ti(t, e, n, r, i, a, o, s, c, u) {
        t = void 0 !== t ? t : [],
        e = void 0 !== e ? e : dt,
        o = void 0 !== o ? o : Ht,
        on.call(this, t, e, n, r, i, a, o, s, c, u),
        this.flipY = !1
    }
    function ei(t, e, n, r) {
        on.call(this, null),
        this.image = {
            data: t,
            width: e,
            height: n,
            depth: r
        },
        this.magFilter = _t,
        this.minFilter = _t,
        this.wrapR = bt,
        this.generateMipmaps = !1,
        this.flipY = !1
    }
    function ni(t, e, n, r) {
        on.call(this, null),
        this.image = {
            data: t,
            width: e,
            height: n,
            depth: r
        },
        this.magFilter = _t,
        this.minFilter = _t,
        this.wrapR = bt,
        this.generateMipmaps = !1,
        this.flipY = !1
    }
    Ur.physical = {
        uniforms: br([Ur.standard.uniforms, {
            clearCoat: {
                value: 0
            },
            clearCoatRoughness: {
                value: 0
            }
        }]),
        vertexShader: Br.meshphysical_vert,
        fragmentShader: Br.meshphysical_frag
    },
    Hr.prototype = Object.create(gr.prototype),
    Hr.prototype.constructor = Hr,
    Vr.prototype = Object.create(pr.prototype),
    Vr.prototype.constructor = Vr,
    ti.prototype = Object.create(on.prototype),
    ti.prototype.constructor = ti,
    ti.prototype.isCubeTexture = !0,
    Object.defineProperty(ti.prototype, "images", {
        get: function() {
            return this.image
        },
        set: function(t) {
            this.image = t
        }
    }),
    ei.prototype = Object.create(on.prototype),
    ei.prototype.constructor = ei,
    ei.prototype.isDataTexture2DArray = !0,
    ni.prototype = Object.create(on.prototype),
    ni.prototype.constructor = ni,
    ni.prototype.isDataTexture3D = !0;
    var ri = new on
      , ii = new ei
      , ai = new ni
      , oi = new ti
      , si = []
      , ci = []
      , ui = new Float32Array(16)
      , hi = new Float32Array(9)
      , li = new Float32Array(4);
    function di(t, e, n) {
        var r = t[0];
        if (r <= 0 || r > 0)
            return t;
        var i = e * n
          , a = si[i];
        if (void 0 === a && (a = new Float32Array(i),
        si[i] = a),
        0 !== e) {
            r.toArray(a, 0);
            for (var o = 1, s = 0; o !== e; ++o)
                s += n,
                t[o].toArray(a, s)
        }
        return a
    }
    function pi(t, e) {
        if (t.length !== e.length)
            return !1;
        for (var n = 0, r = t.length; n < r; n++)
            if (t[n] !== e[n])
                return !1;
        return !0
    }
    function fi(t, e) {
        for (var n = 0, r = e.length; n < r; n++)
            t[n] = e[n]
    }
    function mi(t, e) {
        var n = ci[e];
        void 0 === n && (n = new Int32Array(e),
        ci[e] = n);
        for (var r = 0; r !== e; ++r)
            n[r] = t.allocateTextureUnit();
        return n
    }
    function gi(t, e) {
        var n = this.cache;
        n[0] !== e && (t.uniform1f(this.addr, e),
        n[0] = e)
    }
    function vi(t, e) {
        var n = this.cache;
        if (void 0 !== e.x)
            n[0] === e.x && n[1] === e.y || (t.uniform2f(this.addr, e.x, e.y),
            n[0] = e.x,
            n[1] = e.y);
        else {
            if (pi(n, e))
                return;
            t.uniform2fv(this.addr, e),
            fi(n, e)
        }
    }
    function yi(t, e) {
        var n = this.cache;
        if (void 0 !== e.x)
            n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z),
            n[0] = e.x,
            n[1] = e.y,
            n[2] = e.z);
        else if (void 0 !== e.r)
            n[0] === e.r && n[1] === e.g && n[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b),
            n[0] = e.r,
            n[1] = e.g,
            n[2] = e.b);
        else {
            if (pi(n, e))
                return;
            t.uniform3fv(this.addr, e),
            fi(n, e)
        }
    }
    function xi(t, e) {
        var n = this.cache;
        if (void 0 !== e.x)
            n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w),
            n[0] = e.x,
            n[1] = e.y,
            n[2] = e.z,
            n[3] = e.w);
        else {
            if (pi(n, e))
                return;
            t.uniform4fv(this.addr, e),
            fi(n, e)
        }
    }
    function bi(t, e) {
        var n = this.cache
          , r = e.elements;
        if (void 0 === r) {
            if (pi(n, e))
                return;
            t.uniformMatrix2fv(this.addr, !1, e),
            fi(n, e)
        } else {
            if (pi(n, r))
                return;
            li.set(r),
            t.uniformMatrix2fv(this.addr, !1, li),
            fi(n, r)
        }
    }
    function wi(t, e) {
        var n = this.cache
          , r = e.elements;
        if (void 0 === r) {
            if (pi(n, e))
                return;
            t.uniformMatrix3fv(this.addr, !1, e),
            fi(n, e)
        } else {
            if (pi(n, r))
                return;
            hi.set(r),
            t.uniformMatrix3fv(this.addr, !1, hi),
            fi(n, r)
        }
    }
    function _i(t, e) {
        var n = this.cache
          , r = e.elements;
        if (void 0 === r) {
            if (pi(n, e))
                return;
            t.uniformMatrix4fv(this.addr, !1, e),
            fi(n, e)
        } else {
            if (pi(n, r))
                return;
            ui.set(r),
            t.uniformMatrix4fv(this.addr, !1, ui),
            fi(n, r)
        }
    }
    function Mi(t, e, n) {
        var r = this.cache
          , i = n.allocateTextureUnit();
        r[0] !== i && (t.uniform1i(this.addr, i),
        r[0] = i),
        n.safeSetTexture2D(e || ri, i)
    }
    function Ei(t, e, n) {
        var r = this.cache
          , i = n.allocateTextureUnit();
        r[0] !== i && (t.uniform1i(this.addr, i),
        r[0] = i),
        n.setTexture2DArray(e || ii, i)
    }
    function Si(t, e, n) {
        var r = this.cache
          , i = n.allocateTextureUnit();
        r[0] !== i && (t.uniform1i(this.addr, i),
        r[0] = i),
        n.setTexture3D(e || ai, i)
    }
    function Ti(t, e, n) {
        var r = this.cache
          , i = n.allocateTextureUnit();
        r[0] !== i && (t.uniform1i(this.addr, i),
        r[0] = i),
        n.safeSetTextureCube(e || oi, i)
    }
    function Ai(t, e) {
        var n = this.cache;
        n[0] !== e && (t.uniform1i(this.addr, e),
        n[0] = e)
    }
    function Li(t, e) {
        var n = this.cache;
        pi(n, e) || (t.uniform2iv(this.addr, e),
        fi(n, e))
    }
    function Ri(t, e) {
        var n = this.cache;
        pi(n, e) || (t.uniform3iv(this.addr, e),
        fi(n, e))
    }
    function Pi(t, e) {
        var n = this.cache;
        pi(n, e) || (t.uniform4iv(this.addr, e),
        fi(n, e))
    }
    function Ci(t, e) {
        t.uniform1fv(this.addr, e)
    }
    function Oi(t, e) {
        t.uniform1iv(this.addr, e)
    }
    function Ii(t, e) {
        t.uniform2iv(this.addr, e)
    }
    function Di(t, e) {
        t.uniform3iv(this.addr, e)
    }
    function Ni(t, e) {
        t.uniform4iv(this.addr, e)
    }
    function Bi(t, e) {
        var n = di(e, this.size, 2);
        t.uniform2fv(this.addr, n)
    }
    function zi(t, e) {
        var n = di(e, this.size, 3);
        t.uniform3fv(this.addr, n)
    }
    function Ui(t, e) {
        var n = di(e, this.size, 4);
        t.uniform4fv(this.addr, n)
    }
    function Gi(t, e) {
        var n = di(e, this.size, 4);
        t.uniformMatrix2fv(this.addr, !1, n)
    }
    function Fi(t, e) {
        var n = di(e, this.size, 9);
        t.uniformMatrix3fv(this.addr, !1, n)
    }
    function Hi(t, e) {
        var n = di(e, this.size, 16);
        t.uniformMatrix4fv(this.addr, !1, n)
    }
    function Vi(t, e, n) {
        var r = e.length
          , i = mi(n, r);
        t.uniform1iv(this.addr, i);
        for (var a = 0; a !== r; ++a)
            n.safeSetTexture2D(e[a] || ri, i[a])
    }
    function ki(t, e, n) {
        var r = e.length
          , i = mi(n, r);
        t.uniform1iv(this.addr, i);
        for (var a = 0; a !== r; ++a)
            n.safeSetTextureCube(e[a] || oi, i[a])
    }
    function ji(t, e, n) {
        this.id = t,
        this.addr = n,
        this.cache = [],
        this.setValue = function(t) {
            switch (t) {
            case 5126:
                return gi;
            case 35664:
                return vi;
            case 35665:
                return yi;
            case 35666:
                return xi;
            case 35674:
                return bi;
            case 35675:
                return wi;
            case 35676:
                return _i;
            case 35678:
            case 36198:
                return Mi;
            case 35679:
                return Si;
            case 35680:
                return Ti;
            case 36289:
                return Ei;
            case 5124:
            case 35670:
                return Ai;
            case 35667:
            case 35671:
                return Li;
            case 35668:
            case 35672:
                return Ri;
            case 35669:
            case 35673:
                return Pi
            }
        }(e.type)
    }
    function Wi(t, e, n) {
        this.id = t,
        this.addr = n,
        this.cache = [],
        this.size = e.size,
        this.setValue = function(t) {
            switch (t) {
            case 5126:
                return Ci;
            case 35664:
                return Bi;
            case 35665:
                return zi;
            case 35666:
                return Ui;
            case 35674:
                return Gi;
            case 35675:
                return Fi;
            case 35676:
                return Hi;
            case 35678:
                return Vi;
            case 35680:
                return ki;
            case 5124:
            case 35670:
                return Oi;
            case 35667:
            case 35671:
                return Ii;
            case 35668:
            case 35672:
                return Di;
            case 35669:
            case 35673:
                return Ni
            }
        }(e.type)
    }
    function qi(t) {
        this.id = t,
        this.seq = [],
        this.map = {}
    }
    Wi.prototype.updateCache = function(t) {
        var e = this.cache;
        t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)),
        fi(e, t)
    }
    ,
    qi.prototype.setValue = function(t, e, n) {
        for (var r = this.seq, i = 0, a = r.length; i !== a; ++i) {
            var o = r[i];
            o.setValue(t, e[o.id], n)
        }
    }
    ;
    var Xi = /([\w\d_]+)(\])?(\[|\.)?/g;
    function Yi(t, e) {
        t.seq.push(e),
        t.map[e.id] = e
    }
    function Ji(t, e, n) {
        var r = t.name
          , i = r.length;
        for (Xi.lastIndex = 0; ; ) {
            var a = Xi.exec(r)
              , o = Xi.lastIndex
              , s = a[1]
              , c = "]" === a[2]
              , u = a[3];
            if (c && (s |= 0),
            void 0 === u || "[" === u && o + 2 === i) {
                Yi(n, void 0 === u ? new ji(s,t,e) : new Wi(s,t,e));
                break
            }
            var h = n.map[s];
            void 0 === h && Yi(n, h = new qi(s)),
            n = h
        }
    }
    function Zi(t, e) {
        this.seq = [],
        this.map = {};
        for (var n = t.getProgramParameter(e, 35718), r = 0; r < n; ++r) {
            var i = t.getActiveUniform(e, r);
            Ji(i, t.getUniformLocation(e, i.name), this)
        }
    }
    function Qi(t, e, n) {
        var r = t.createShader(e);
        return t.shaderSource(r, n),
        t.compileShader(r),
        r
    }
    Zi.prototype.setValue = function(t, e, n, r) {
        var i = this.map[e];
        void 0 !== i && i.setValue(t, n, r)
    }
    ,
    Zi.prototype.setOptional = function(t, e, n) {
        var r = e[n];
        void 0 !== r && this.setValue(t, n, r)
    }
    ,
    Zi.upload = function(t, e, n, r) {
        for (var i = 0, a = e.length; i !== a; ++i) {
            var o = e[i]
              , s = n[o.id];
            !1 !== s.needsUpdate && o.setValue(t, s.value, r)
        }
    }
    ,
    Zi.seqWithValue = function(t, e) {
        for (var n = [], r = 0, i = t.length; r !== i; ++r) {
            var a = t[r];
            a.id in e && n.push(a)
        }
        return n
    }
    ;
    var Ki = 0;
    function $i(t) {
        switch (t) {
        case Pe:
            return ["Linear", "( value )"];
        case Ce:
            return ["sRGB", "( value )"];
        case Ie:
            return ["RGBE", "( value )"];
        case Ne:
            return ["RGBM", "( value, 7.0 )"];
        case Be:
            return ["RGBM", "( value, 16.0 )"];
        case ze:
            return ["RGBD", "( value, 256.0 )"];
        case Oe:
            return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
        default:
            throw new Error("unsupported encoding: " + t)
        }
    }
    function ta(t, e, n) {
        var r = t.getShaderParameter(e, 35713)
          , i = t.getShaderInfoLog(e).trim();
        return r && "" === i ? "" : "THREE.WebGLShader: gl.getShaderInfoLog() " + n + "\n" + i + function(t) {
            for (var e = t.split("\n"), n = 0; n < e.length; n++)
                e[n] = n + 1 + ": " + e[n];
            return e.join("\n")
        }(t.getShaderSource(e))
    }
    function ea(t, e) {
        var n = $i(e);
        return "vec4 " + t + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }"
    }
    function na(t, e) {
        var n;
        switch (e) {
        case ot:
            n = "Linear";
            break;
        case st:
            n = "Reinhard";
            break;
        case ct:
            n = "Uncharted2";
            break;
        case ut:
            n = "OptimizedCineon";
            break;
        case ht:
            n = "ACESFilmic";
            break;
        default:
            throw new Error("unsupported toneMapping: " + e)
        }
        return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
    }
    function ra(t) {
        return "" !== t
    }
    function ia(t, e) {
        return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    }
    function aa(t, e) {
        return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
    }
    function oa(t) {
        return t.replace(/^[ \t]*#include +<([\w\d.\/]+)>/gm, function(t, e) {
            var n = Br[e];
            if (void 0 === n)
                throw new Error("Can not resolve #include <" + e + ">");
            return oa(n)
        })
    }
    function sa(t) {
        return t.replace(/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, function(t, e, n, r) {
            for (var i = "", a = parseInt(e); a < parseInt(n); a++)
                i += r.replace(/\[ i \]/g, "[ " + a + " ]");
            return i
        })
    }
    function ca(t, e, n, r, i, a, o) {
        var s = t.context
          , c = r.defines
          , u = i.vertexShader
          , h = i.fragmentShader
          , l = "SHADOWMAP_TYPE_BASIC";
        a.shadowMapType === g ? l = "SHADOWMAP_TYPE_PCF" : a.shadowMapType === v && (l = "SHADOWMAP_TYPE_PCF_SOFT");
        var d = "ENVMAP_TYPE_CUBE"
          , p = "ENVMAP_MODE_REFLECTION"
          , f = "ENVMAP_BLENDING_MULTIPLY";
        if (a.envMap) {
            switch (r.envMap.mapping) {
            case dt:
            case pt:
                d = "ENVMAP_TYPE_CUBE";
                break;
            case vt:
            case yt:
                d = "ENVMAP_TYPE_CUBE_UV";
                break;
            case ft:
            case mt:
                d = "ENVMAP_TYPE_EQUIREC";
                break;
            case gt:
                d = "ENVMAP_TYPE_SPHERE"
            }
            switch (r.envMap.mapping) {
            case pt:
            case mt:
                p = "ENVMAP_MODE_REFRACTION"
            }
            switch (r.combine) {
            case nt:
                f = "ENVMAP_BLENDING_MULTIPLY";
                break;
            case rt:
                f = "ENVMAP_BLENDING_MIX";
                break;
            case it:
                f = "ENVMAP_BLENDING_ADD"
            }
        }
        var m, y, x, b, w, _ = t.gammaFactor > 0 ? t.gammaFactor : 1, M = o.isWebGL2 ? "" : function(t, e, n) {
            return [(t = t || {}).derivatives || e.envMapCubeUV || e.bumpMap || e.normalMap && !e.objectSpaceNormalMap || e.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (t.fragDepth || e.logarithmicDepthBuffer) && n.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", t.drawBuffers && n.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (t.shaderTextureLOD || e.envMap) && n.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(ra).join("\n")
        }(r.extensions, a, e), E = function(t) {
            var e = [];
            for (var n in t) {
                var r = t[n];
                !1 !== r && e.push("#define " + n + " " + r)
            }
            return e.join("\n")
        }(c), S = s.createProgram();
        if (r.isRawShaderMaterial ? ((m = [E].filter(ra).join("\n")).length > 0 && (m += "\n"),
        (y = [M, E].filter(ra).join("\n")).length > 0 && (y += "\n")) : (m = ["precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + i.name, E, a.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + _, "#define MAX_BONES " + a.maxBones, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + p : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", a.displacementMap && a.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexTangents ? "#define USE_TANGENT" : "", a.vertexColors ? "#define USE_COLOR" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.skinning ? "#define USE_SKINNING" : "", a.useVertexTexture ? "#define BONE_TEXTURE" : "", a.morphTargets ? "#define USE_MORPHTARGETS" : "", a.morphNormals && !1 === a.flatShading ? "#define USE_MORPHNORMALS" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + l : "", a.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && (o.isWebGL2 || e.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(ra).join("\n"),
        y = [M, "precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + i.name, E, a.alphaTest ? "#define ALPHATEST " + a.alphaTest + (a.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + _, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.matcap ? "#define USE_MATCAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + d : "", a.envMap ? "#define " + p : "", a.envMap ? "#define " + f : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexTangents ? "#define USE_TANGENT" : "", a.vertexColors ? "#define USE_COLOR" : "", a.gradientMap ? "#define USE_GRADIENTMAP" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + l : "", a.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", a.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && (o.isWebGL2 || e.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", a.envMap && (o.isWebGL2 || e.get("EXT_shader_texture_lod")) ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", a.toneMapping !== at ? "#define TONE_MAPPING" : "", a.toneMapping !== at ? Br.tonemapping_pars_fragment : "", a.toneMapping !== at ? na("toneMapping", a.toneMapping) : "", a.dithering ? "#define DITHERING" : "", a.outputEncoding || a.mapEncoding || a.matcapEncoding || a.envMapEncoding || a.emissiveMapEncoding ? Br.encodings_pars_fragment : "", a.mapEncoding ? ea("mapTexelToLinear", a.mapEncoding) : "", a.matcapEncoding ? ea("matcapTexelToLinear", a.matcapEncoding) : "", a.envMapEncoding ? ea("envMapTexelToLinear", a.envMapEncoding) : "", a.emissiveMapEncoding ? ea("emissiveMapTexelToLinear", a.emissiveMapEncoding) : "", a.outputEncoding ? (x = "linearToOutputTexel",
        b = a.outputEncoding,
        w = $i(b),
        "vec4 " + x + "( vec4 value ) { return LinearTo" + w[0] + w[1] + "; }") : "", a.depthPacking ? "#define DEPTH_PACKING " + r.depthPacking : "", "\n"].filter(ra).join("\n")),
        u = aa(u = ia(u = oa(u), a), a),
        h = aa(h = ia(h = oa(h), a), a),
        u = sa(u),
        h = sa(h),
        o.isWebGL2 && !r.isRawShaderMaterial) {
            var T = !1
              , A = /^\s*#version\s+300\s+es\s*\n/;
            r.isShaderMaterial && null !== u.match(A) && null !== h.match(A) && (T = !0,
            u = u.replace(A, ""),
            h = h.replace(A, "")),
            m = ["#version 300 es\n", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + m,
            y = ["#version 300 es\n", "#define varying in", T ? "" : "out highp vec4 pc_fragColor;", T ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + y
        }
        var L, R, P = y + h, C = Qi(s, 35633, m + u), O = Qi(s, 35632, P);
        if (s.attachShader(S, C),
        s.attachShader(S, O),
        void 0 !== r.index0AttributeName ? s.bindAttribLocation(S, 0, r.index0AttributeName) : !0 === a.morphTargets && s.bindAttribLocation(S, 0, "position"),
        s.linkProgram(S),
        t.debug.checkShaderErrors) {
            var I = s.getProgramInfoLog(S).trim()
              , D = s.getShaderInfoLog(C).trim()
              , N = s.getShaderInfoLog(O).trim()
              , B = !0
              , z = !0;
            if (!1 === s.getProgramParameter(S, 35714)) {
                B = !1;
                var U = ta(s, C, "vertex")
                  , G = ta(s, O, "fragment");
                console.error("THREE.WebGLProgram: shader error: ", s.getError(), "35715", s.getProgramParameter(S, 35715), "gl.getProgramInfoLog", I, U, G)
            } else
                "" !== I ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", I) : "" !== D && "" !== N || (z = !1);
            z && (this.diagnostics = {
                runnable: B,
                material: r,
                programLog: I,
                vertexShader: {
                    log: D,
                    prefix: m
                },
                fragmentShader: {
                    log: N,
                    prefix: y
                }
            })
        }
        return s.deleteShader(C),
        s.deleteShader(O),
        this.getUniforms = function() {
            return void 0 === L && (L = new Zi(s,S)),
            L
        }
        ,
        this.getAttributes = function() {
            return void 0 === R && (R = function(t, e) {
                for (var n = {}, r = t.getProgramParameter(e, 35721), i = 0; i < r; i++) {
                    var a = t.getActiveAttrib(e, i).name;
                    n[a] = t.getAttribLocation(e, a)
                }
                return n
            }(s, S)),
            R
        }
        ,
        this.destroy = function() {
            s.deleteProgram(S),
            this.program = void 0
        }
        ,
        this.name = i.name,
        this.id = Ki++,
        this.code = n,
        this.usedTimes = 1,
        this.program = S,
        this.vertexShader = C,
        this.fragmentShader = O,
        this
    }
    function ua(t, e, n) {
        var r = []
          , i = {
            MeshDepthMaterial: "depth",
            MeshDistanceMaterial: "distanceRGBA",
            MeshNormalMaterial: "normal",
            MeshBasicMaterial: "basic",
            MeshLambertMaterial: "lambert",
            MeshPhongMaterial: "phong",
            MeshToonMaterial: "phong",
            MeshStandardMaterial: "physical",
            MeshPhysicalMaterial: "physical",
            MeshMatcapMaterial: "matcap",
            LineBasicMaterial: "basic",
            LineDashedMaterial: "dashed",
            PointsMaterial: "points",
            ShadowMaterial: "shadow",
            SpriteMaterial: "sprite"
        }
          , a = ["precision", "supportsVertexTextures", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "vertexTangents", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering"];
        function o(t, e) {
            var n;
            return t ? t.isTexture ? n = t.encoding : t.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),
            n = t.texture.encoding) : n = Pe,
            n === Pe && e && (n = Oe),
            n
        }
        this.getParameters = function(e, r, a, s, c, u, h) {
            var l = i[e.type]
              , d = h.isSkinnedMesh ? function(t) {
                var e = t.skeleton.bones;
                if (n.floatVertexTextures)
                    return 1024;
                var r = n.maxVertexUniforms
                  , i = Math.floor((r - 20) / 4)
                  , a = Math.min(i, e.length);
                return a < e.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + e.length + " bones. This GPU supports " + a + "."),
                0) : a
            }(h) : 0
              , p = n.precision;
            null !== e.precision && (p = n.getMaxPrecision(e.precision)) !== e.precision && console.warn("THREE.WebGLProgram.getParameters:", e.precision, "not supported, using", p, "instead.");
            var f = t.getRenderTarget();
            return {
                shaderID: l,
                precision: p,
                supportsVertexTextures: n.vertexTextures,
                outputEncoding: o(f ? f.texture : null, t.gammaOutput),
                map: !!e.map,
                mapEncoding: o(e.map, t.gammaInput),
                matcap: !!e.matcap,
                matcapEncoding: o(e.matcap, t.gammaInput),
                envMap: !!e.envMap,
                envMapMode: e.envMap && e.envMap.mapping,
                envMapEncoding: o(e.envMap, t.gammaInput),
                envMapCubeUV: !!e.envMap && (e.envMap.mapping === vt || e.envMap.mapping === yt),
                lightMap: !!e.lightMap,
                aoMap: !!e.aoMap,
                emissiveMap: !!e.emissiveMap,
                emissiveMapEncoding: o(e.emissiveMap, t.gammaInput),
                bumpMap: !!e.bumpMap,
                normalMap: !!e.normalMap,
                objectSpaceNormalMap: e.normalMapType === He,
                displacementMap: !!e.displacementMap,
                roughnessMap: !!e.roughnessMap,
                metalnessMap: !!e.metalnessMap,
                specularMap: !!e.specularMap,
                alphaMap: !!e.alphaMap,
                gradientMap: !!e.gradientMap,
                combine: e.combine,
                vertexTangents: e.normalMap && e.vertexTangents,
                vertexColors: e.vertexColors,
                fog: !!s,
                useFog: e.fog,
                fogExp: s && s.isFogExp2,
                flatShading: e.flatShading,
                sizeAttenuation: e.sizeAttenuation,
                logarithmicDepthBuffer: n.logarithmicDepthBuffer,
                skinning: e.skinning && d > 0,
                maxBones: d,
                useVertexTexture: n.floatVertexTextures,
                morphTargets: e.morphTargets,
                morphNormals: e.morphNormals,
                maxMorphTargets: t.maxMorphTargets,
                maxMorphNormals: t.maxMorphNormals,
                numDirLights: r.directional.length,
                numPointLights: r.point.length,
                numSpotLights: r.spot.length,
                numRectAreaLights: r.rectArea.length,
                numHemiLights: r.hemi.length,
                numClippingPlanes: c,
                numClipIntersection: u,
                dithering: e.dithering,
                shadowMapEnabled: t.shadowMap.enabled && h.receiveShadow && a.length > 0,
                shadowMapType: t.shadowMap.type,
                toneMapping: t.toneMapping,
                physicallyCorrectLights: t.physicallyCorrectLights,
                premultipliedAlpha: e.premultipliedAlpha,
                alphaTest: e.alphaTest,
                doubleSided: e.side === b,
                flipSided: e.side === x,
                depthPacking: void 0 !== e.depthPacking && e.depthPacking
            }
        }
        ,
        this.getProgramCode = function(e, n) {
            var r = [];
            if (n.shaderID ? r.push(n.shaderID) : (r.push(e.fragmentShader),
            r.push(e.vertexShader)),
            void 0 !== e.defines)
                for (var i in e.defines)
                    r.push(i),
                    r.push(e.defines[i]);
            for (var o = 0; o < a.length; o++)
                r.push(n[a[o]]);
            return r.push(e.onBeforeCompile.toString()),
            r.push(t.gammaOutput),
            r.push(t.gammaFactor),
            r.join()
        }
        ,
        this.acquireProgram = function(i, a, o, s) {
            for (var c, u = 0, h = r.length; u < h; u++) {
                var l = r[u];
                if (l.code === s) {
                    ++(c = l).usedTimes;
                    break
                }
            }
            return void 0 === c && (c = new ca(t,e,s,i,a,o,n),
            r.push(c)),
            c
        }
        ,
        this.releaseProgram = function(t) {
            if (0 == --t.usedTimes) {
                var e = r.indexOf(t);
                r[e] = r[r.length - 1],
                r.pop(),
                t.destroy()
            }
        }
        ,
        this.programs = r
    }
    function ha() {
        var t = new WeakMap;
        return {
            get: function(e) {
                var n = t.get(e);
                return void 0 === n && (n = {},
                t.set(e, n)),
                n
            },
            remove: function(e) {
                t.delete(e)
            },
            update: function(e, n, r) {
                t.get(e)[n] = r
            },
            dispose: function() {
                t = new WeakMap
            }
        }
    }
    function la(t, e) {
        return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
    }
    function da(t, e) {
        return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
    }
    function pa() {
        var t = []
          , e = 0
          , n = []
          , r = []
          , i = {
            id: -1
        };
        function a(n, r, a, o, s, c) {
            var u = t[e];
            return void 0 === u ? (u = {
                id: n.id,
                object: n,
                geometry: r,
                material: a,
                program: a.program || i,
                groupOrder: o,
                renderOrder: n.renderOrder,
                z: s,
                group: c
            },
            t[e] = u) : (u.id = n.id,
            u.object = n,
            u.geometry = r,
            u.material = a,
            u.program = a.program || i,
            u.groupOrder = o,
            u.renderOrder = n.renderOrder,
            u.z = s,
            u.group = c),
            e++,
            u
        }
        return {
            opaque: n,
            transparent: r,
            init: function() {
                e = 0,
                n.length = 0,
                r.length = 0
            },
            push: function(t, e, i, o, s, c) {
                var u = a(t, e, i, o, s, c);
                (!0 === i.transparent ? r : n).push(u)
            },
            unshift: function(t, e, i, o, s, c) {
                var u = a(t, e, i, o, s, c);
                (!0 === i.transparent ? r : n).unshift(u)
            },
            sort: function() {
                n.length > 1 && n.sort(la),
                r.length > 1 && r.sort(da)
            }
        }
    }
    function fa() {
        var t = {};
        function e(n) {
            var r = n.target;
            r.removeEventListener("dispose", e),
            delete t[r.id]
        }
        return {
            get: function(n, r) {
                var i, a = t[n.id];
                return void 0 === a ? (i = new pa,
                t[n.id] = {},
                t[n.id][r.id] = i,
                n.addEventListener("dispose", e)) : void 0 === (i = a[r.id]) && (i = new pa,
                a[r.id] = i),
                i
            },
            dispose: function() {
                t = {}
            }
        }
    }
    function ma() {
        var t = {};
        return {
            get: function(e) {
                if (void 0 !== t[e.id])
                    return t[e.id];
                var n;
                switch (e.type) {
                case "DirectionalLight":
                    n = {
                        direction: new We,
                        color: new jn,
                        shadow: !1,
                        shadowBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new ke
                    };
                    break;
                case "SpotLight":
                    n = {
                        position: new We,
                        direction: new We,
                        color: new jn,
                        distance: 0,
                        coneCos: 0,
                        penumbraCos: 0,
                        decay: 0,
                        shadow: !1,
                        shadowBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new ke
                    };
                    break;
                case "PointLight":
                    n = {
                        position: new We,
                        color: new jn,
                        distance: 0,
                        decay: 0,
                        shadow: !1,
                        shadowBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new ke,
                        shadowCameraNear: 1,
                        shadowCameraFar: 1e3
                    };
                    break;
                case "HemisphereLight":
                    n = {
                        direction: new We,
                        skyColor: new jn,
                        groundColor: new jn
                    };
                    break;
                case "RectAreaLight":
                    n = {
                        color: new jn,
                        position: new We,
                        halfWidth: new We,
                        halfHeight: new We
                    }
                }
                return t[e.id] = n,
                n
            }
        }
    }
    var ga = 0;
    function va() {
        for (var t = new ma, e = {
            version: 0,
            hash: {
                directionalLength: -1,
                pointLength: -1,
                spotLength: -1,
                rectAreaLength: -1,
                hemiLength: -1,
                shadowsLength: -1
            },
            ambient: [0, 0, 0],
            probe: [],
            directional: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotShadowMap: [],
            spotShadowMatrix: [],
            rectArea: [],
            point: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: []
        }, n = 0; n < 9; n++)
            e.probe.push(new We);
        var r = new We
          , i = new hn
          , a = new hn;
        return {
            setup: function(n, o, s) {
                for (var c = 0, u = 0, h = 0, l = 0; l < 9; l++)
                    e.probe[l].set(0, 0, 0);
                for (var d = 0, p = 0, f = 0, m = 0, g = 0, v = s.matrixWorldInverse, y = (l = 0,
                n.length); l < y; l++) {
                    var x = n[l]
                      , b = x.color
                      , w = x.intensity
                      , _ = x.distance
                      , M = x.shadow && x.shadow.map ? x.shadow.map.texture : null;
                    if (x.isAmbientLight)
                        c += b.r * w,
                        u += b.g * w,
                        h += b.b * w;
                    else if (x.isLightProbe)
                        for (var E = 0; E < 9; E++)
                            e.probe[E].addScaledVector(x.sh.coefficients[E], w);
                    else if (x.isDirectionalLight) {
                        if ((T = t.get(x)).color.copy(x.color).multiplyScalar(x.intensity),
                        T.direction.setFromMatrixPosition(x.matrixWorld),
                        r.setFromMatrixPosition(x.target.matrixWorld),
                        T.direction.sub(r),
                        T.direction.transformDirection(v),
                        T.shadow = x.castShadow,
                        x.castShadow) {
                            var S = x.shadow;
                            T.shadowBias = S.bias,
                            T.shadowRadius = S.radius,
                            T.shadowMapSize = S.mapSize
                        }
                        e.directionalShadowMap[d] = M,
                        e.directionalShadowMatrix[d] = x.shadow.matrix,
                        e.directional[d] = T,
                        d++
                    } else if (x.isSpotLight) {
                        if ((T = t.get(x)).position.setFromMatrixPosition(x.matrixWorld),
                        T.position.applyMatrix4(v),
                        T.color.copy(b).multiplyScalar(w),
                        T.distance = _,
                        T.direction.setFromMatrixPosition(x.matrixWorld),
                        r.setFromMatrixPosition(x.target.matrixWorld),
                        T.direction.sub(r),
                        T.direction.transformDirection(v),
                        T.coneCos = Math.cos(x.angle),
                        T.penumbraCos = Math.cos(x.angle * (1 - x.penumbra)),
                        T.decay = x.decay,
                        T.shadow = x.castShadow,
                        x.castShadow) {
                            S = x.shadow;
                            T.shadowBias = S.bias,
                            T.shadowRadius = S.radius,
                            T.shadowMapSize = S.mapSize
                        }
                        e.spotShadowMap[f] = M,
                        e.spotShadowMatrix[f] = x.shadow.matrix,
                        e.spot[f] = T,
                        f++
                    } else if (x.isRectAreaLight) {
                        (T = t.get(x)).color.copy(b).multiplyScalar(w),
                        T.position.setFromMatrixPosition(x.matrixWorld),
                        T.position.applyMatrix4(v),
                        a.identity(),
                        i.copy(x.matrixWorld),
                        i.premultiply(v),
                        a.extractRotation(i),
                        T.halfWidth.set(.5 * x.width, 0, 0),
                        T.halfHeight.set(0, .5 * x.height, 0),
                        T.halfWidth.applyMatrix4(a),
                        T.halfHeight.applyMatrix4(a),
                        e.rectArea[m] = T,
                        m++
                    } else if (x.isPointLight) {
                        if ((T = t.get(x)).position.setFromMatrixPosition(x.matrixWorld),
                        T.position.applyMatrix4(v),
                        T.color.copy(x.color).multiplyScalar(x.intensity),
                        T.distance = x.distance,
                        T.decay = x.decay,
                        T.shadow = x.castShadow,
                        x.castShadow) {
                            S = x.shadow;
                            T.shadowBias = S.bias,
                            T.shadowRadius = S.radius,
                            T.shadowMapSize = S.mapSize,
                            T.shadowCameraNear = S.camera.near,
                            T.shadowCameraFar = S.camera.far
                        }
                        e.pointShadowMap[p] = M,
                        e.pointShadowMatrix[p] = x.shadow.matrix,
                        e.point[p] = T,
                        p++
                    } else if (x.isHemisphereLight) {
                        var T;
                        (T = t.get(x)).direction.setFromMatrixPosition(x.matrixWorld),
                        T.direction.transformDirection(v),
                        T.direction.normalize(),
                        T.skyColor.copy(x.color).multiplyScalar(w),
                        T.groundColor.copy(x.groundColor).multiplyScalar(w),
                        e.hemi[g] = T,
                        g++
                    }
                }
                e.ambient[0] = c,
                e.ambient[1] = u,
                e.ambient[2] = h;
                var A = e.hash;
                A.directionalLength === d && A.pointLength === p && A.spotLength === f && A.rectAreaLength === m && A.hemiLength === g && A.shadowsLength === o.length || (e.directional.length = d,
                e.spot.length = f,
                e.rectArea.length = m,
                e.point.length = p,
                e.hemi.length = g,
                A.directionalLength = d,
                A.pointLength = p,
                A.spotLength = f,
                A.rectAreaLength = m,
                A.hemiLength = g,
                A.shadowsLength = o.length,
                e.version = ga++)
            },
            state: e
        }
    }
    function ya() {
        var t = new va
          , e = []
          , n = [];
        return {
            init: function() {
                e.length = 0,
                n.length = 0
            },
            state: {
                lightsArray: e,
                shadowsArray: n,
                lights: t
            },
            setupLights: function(r) {
                t.setup(e, n, r)
            },
            pushLight: function(t) {
                e.push(t)
            },
            pushShadow: function(t) {
                n.push(t)
            }
        }
    }
    function xa() {
        var t = {};
        function e(n) {
            var r = n.target;
            r.removeEventListener("dispose", e),
            delete t[r.id]
        }
        return {
            get: function(n, r) {
                var i;
                return void 0 === t[n.id] ? (i = new ya,
                t[n.id] = {},
                t[n.id][r.id] = i,
                n.addEventListener("dispose", e)) : void 0 === t[n.id][r.id] ? (i = new ya,
                t[n.id][r.id] = i) : i = t[n.id][r.id],
                i
            },
            dispose: function() {
                t = {}
            }
        }
    }
    function ba(t) {
        Zn.call(this),
        this.type = "MeshDepthMaterial",
        this.depthPacking = Ue,
        this.skinning = !1,
        this.morphTargets = !1,
        this.map = null,
        this.alphaMap = null,
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.fog = !1,
        this.lights = !1,
        this.setValues(t)
    }
    function wa(t) {
        Zn.call(this),
        this.type = "MeshDistanceMaterial",
        this.referencePosition = new We,
        this.nearDistance = 1,
        this.farDistance = 1e3,
        this.skinning = !1,
        this.morphTargets = !1,
        this.map = null,
        this.alphaMap = null,
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.fog = !1,
        this.lights = !1,
        this.setValues(t)
    }
    function _a(t, e, n) {
        for (var r = new Nr, i = new hn, a = new ke, o = new ke(n,n), s = new We, c = new We, u = 1, h = 2, l = 1 + (u | h), d = new Array(l), p = new Array(l), f = {}, m = {
            0: x,
            1: y,
            2: b
        }, v = [new We(1,0,0), new We(-1,0,0), new We(0,0,1), new We(0,0,-1), new We(0,1,0), new We(0,-1,0)], w = [new We(0,1,0), new We(0,1,0), new We(0,1,0), new We(0,1,0), new We(0,0,1), new We(0,0,-1)], _ = [new sn, new sn, new sn, new sn, new sn, new sn], M = 0; M !== l; ++M) {
            var E = 0 != (M & u)
              , S = 0 != (M & h)
              , A = new ba({
                depthPacking: Ge,
                morphTargets: E,
                skinning: S
            });
            d[M] = A;
            var L = new wa({
                morphTargets: E,
                skinning: S
            });
            p[M] = L
        }
        var R = this;
        function P(e, n, r, i, a, o) {
            var s = e.geometry
              , c = null
              , l = d
              , g = e.customDepthMaterial;
            if (r && (l = p,
            g = e.customDistanceMaterial),
            g)
                c = g;
            else {
                var v = !1;
                n.morphTargets && (s && s.isBufferGeometry ? v = s.morphAttributes && s.morphAttributes.position && s.morphAttributes.position.length > 0 : s && s.isGeometry && (v = s.morphTargets && s.morphTargets.length > 0)),
                e.isSkinnedMesh && !1 === n.skinning && console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", e);
                var y = e.isSkinnedMesh && n.skinning
                  , x = 0;
                v && (x |= u),
                y && (x |= h),
                c = l[x]
            }
            if (t.localClippingEnabled && !0 === n.clipShadows && 0 !== n.clippingPlanes.length) {
                var b = c.uuid
                  , w = n.uuid
                  , _ = f[b];
                void 0 === _ && (_ = {},
                f[b] = _);
                var M = _[w];
                void 0 === M && (M = c.clone(),
                _[w] = M),
                c = M
            }
            return c.visible = n.visible,
            c.wireframe = n.wireframe,
            c.side = null != n.shadowSide ? n.shadowSide : m[n.side],
            c.clipShadows = n.clipShadows,
            c.clippingPlanes = n.clippingPlanes,
            c.clipIntersection = n.clipIntersection,
            c.wireframeLinewidth = n.wireframeLinewidth,
            c.linewidth = n.linewidth,
            r && c.isMeshDistanceMaterial && (c.referencePosition.copy(i),
            c.nearDistance = a,
            c.farDistance = o),
            c
        }
        function C(n, i, a, o) {
            if (!1 !== n.visible) {
                if (n.layers.test(i.layers) && (n.isMesh || n.isLine || n.isPoints) && n.castShadow && (!n.frustumCulled || r.intersectsObject(n))) {
                    n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
                    var s = e.update(n)
                      , u = n.material;
                    if (Array.isArray(u))
                        for (var h = s.groups, l = 0, d = h.length; l < d; l++) {
                            var p = h[l]
                              , f = u[p.materialIndex];
                            if (f && f.visible) {
                                var m = P(n, f, o, c, a.near, a.far);
                                t.renderBufferDirect(a, null, s, m, n, p)
                            }
                        }
                    else if (u.visible) {
                        m = P(n, u, o, c, a.near, a.far);
                        t.renderBufferDirect(a, null, s, m, n, null)
                    }
                }
                for (var g = n.children, v = 0, y = g.length; v < y; v++)
                    C(g[v], i, a, o)
            }
        }
        this.enabled = !1,
        this.autoUpdate = !0,
        this.needsUpdate = !1,
        this.type = g,
        this.render = function(e, n, u) {
            if (!1 !== R.enabled && (!1 !== R.autoUpdate || !1 !== R.needsUpdate) && 0 !== e.length) {
                var h, l = t.getRenderTarget(), d = t.getActiveCubeFace(), p = t.getActiveMipMapLevel(), f = t.state;
                f.setBlending(T),
                f.buffers.color.setClear(1, 1, 1, 1),
                f.buffers.depth.setTest(!0),
                f.setScissorTest(!1);
                for (var m = 0, g = e.length; m < g; m++) {
                    var y = e[m]
                      , x = y.shadow
                      , b = y && y.isPointLight;
                    if (void 0 !== x) {
                        var M = x.camera;
                        if (a.copy(x.mapSize),
                        a.min(o),
                        b) {
                            var E = a.x
                              , S = a.y;
                            _[0].set(2 * E, S, E, S),
                            _[1].set(0, S, E, S),
                            _[2].set(3 * E, S, E, S),
                            _[3].set(E, S, E, S),
                            _[4].set(3 * E, 0, E, S),
                            _[5].set(E, 0, E, S),
                            a.x *= 4,
                            a.y *= 2
                        }
                        if (null === x.map) {
                            var A = {
                                minFilter: _t,
                                magFilter: _t,
                                format: Vt
                            };
                            x.map = new cn(a.x,a.y,A),
                            x.map.texture.name = y.name + ".shadowMap",
                            M.updateProjectionMatrix()
                        }
                        x.isSpotLightShadow && x.update(y);
                        var L = x.map
                          , P = x.matrix;
                        c.setFromMatrixPosition(y.matrixWorld),
                        M.position.copy(c),
                        b ? (h = 6,
                        P.makeTranslation(-c.x, -c.y, -c.z)) : (h = 1,
                        s.setFromMatrixPosition(y.target.matrixWorld),
                        M.lookAt(s),
                        M.updateMatrixWorld(),
                        P.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1),
                        P.multiply(M.projectionMatrix),
                        P.multiply(M.matrixWorldInverse)),
                        t.setRenderTarget(L),
                        t.clear();
                        for (var O = 0; O < h; O++) {
                            if (b) {
                                s.copy(M.position),
                                s.add(v[O]),
                                M.up.copy(w[O]),
                                M.lookAt(s),
                                M.updateMatrixWorld();
                                var I = _[O];
                                f.viewport(I)
                            }
                            i.multiplyMatrices(M.projectionMatrix, M.matrixWorldInverse),
                            r.setFromMatrix(i),
                            C(n, u, M, b)
                        }
                    } else
                        console.warn("THREE.WebGLShadowMap:", y, "has no shadow.")
                }
                R.needsUpdate = !1,
                t.setRenderTarget(l, d, p)
            }
        }
    }
    function Ma(t, e, n, r) {
        var i = new function() {
            var e = !1
              , n = new sn
              , r = null
              , i = new sn(0,0,0,0);
            return {
                setMask: function(n) {
                    r === n || e || (t.colorMask(n, n, n, n),
                    r = n)
                },
                setLocked: function(t) {
                    e = t
                },
                setClear: function(e, r, a, o, s) {
                    !0 === s && (e *= o,
                    r *= o,
                    a *= o),
                    n.set(e, r, a, o),
                    !1 === i.equals(n) && (t.clearColor(e, r, a, o),
                    i.copy(n))
                },
                reset: function() {
                    e = !1,
                    r = null,
                    i.set(-1, 0, 0, 0)
                }
            }
        }
          , a = new function() {
            var e = !1
              , n = null
              , r = null
              , i = null;
            return {
                setTest: function(t) {
                    t ? at(2929) : ot(2929)
                },
                setMask: function(r) {
                    n === r || e || (t.depthMask(r),
                    n = r)
                },
                setFunc: function(e) {
                    if (r !== e) {
                        if (e)
                            switch (e) {
                            case Y:
                                t.depthFunc(512);
                                break;
                            case J:
                                t.depthFunc(519);
                                break;
                            case Z:
                                t.depthFunc(513);
                                break;
                            case Q:
                                t.depthFunc(515);
                                break;
                            case K:
                                t.depthFunc(514);
                                break;
                            case $:
                                t.depthFunc(518);
                                break;
                            case tt:
                                t.depthFunc(516);
                                break;
                            case et:
                                t.depthFunc(517);
                                break;
                            default:
                                t.depthFunc(515)
                            }
                        else
                            t.depthFunc(515);
                        r = e
                    }
                },
                setLocked: function(t) {
                    e = t
                },
                setClear: function(e) {
                    i !== e && (t.clearDepth(e),
                    i = e)
                },
                reset: function() {
                    e = !1,
                    n = null,
                    r = null,
                    i = null
                }
            }
        }
          , o = new function() {
            var e = !1
              , n = null
              , r = null
              , i = null
              , a = null
              , o = null
              , s = null
              , c = null
              , u = null;
            return {
                setTest: function(t) {
                    t ? at(2960) : ot(2960)
                },
                setMask: function(r) {
                    n === r || e || (t.stencilMask(r),
                    n = r)
                },
                setFunc: function(e, n, o) {
                    r === e && i === n && a === o || (t.stencilFunc(e, n, o),
                    r = e,
                    i = n,
                    a = o)
                },
                setOp: function(e, n, r) {
                    o === e && s === n && c === r || (t.stencilOp(e, n, r),
                    o = e,
                    s = n,
                    c = r)
                },
                setLocked: function(t) {
                    e = t
                },
                setClear: function(e) {
                    u !== e && (t.clearStencil(e),
                    u = e)
                },
                reset: function() {
                    e = !1,
                    n = null,
                    r = null,
                    i = null,
                    a = null,
                    o = null,
                    s = null,
                    c = null,
                    u = null
                }
            }
        }
          , s = t.getParameter(34921)
          , c = new Uint8Array(s)
          , d = new Uint8Array(s)
          , p = new Uint8Array(s)
          , f = {}
          , m = null
          , g = null
          , v = null
          , y = null
          , w = null
          , _ = null
          , M = null
          , E = null
          , S = null
          , I = null
          , D = !1
          , N = null
          , B = null
          , z = null
          , U = null
          , G = null
          , F = t.getParameter(35661)
          , H = !1
          , V = 0
          , k = t.getParameter(7938);
        -1 !== k.indexOf("WebGL") ? (V = parseFloat(/^WebGL\ ([0-9])/.exec(k)[1]),
        H = V >= 1) : -1 !== k.indexOf("OpenGL ES") && (V = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(k)[1]),
        H = V >= 2);
        var j = null
          , W = {}
          , q = new sn
          , X = new sn;
        function nt(e, n, r) {
            var i = new Uint8Array(4)
              , a = t.createTexture();
            t.bindTexture(e, a),
            t.texParameteri(e, 10241, 9728),
            t.texParameteri(e, 10240, 9728);
            for (var o = 0; o < r; o++)
                t.texImage2D(n + o, 0, 6408, 1, 1, 0, 6408, 5121, i);
            return a
        }
        var rt = {};
        function it(n, i) {
            (c[n] = 1,
            0 === d[n] && (t.enableVertexAttribArray(n),
            d[n] = 1),
            p[n] !== i) && ((r.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[r.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, i),
            p[n] = i)
        }
        function at(e) {
            !0 !== f[e] && (t.enable(e),
            f[e] = !0)
        }
        function ot(e) {
            !1 !== f[e] && (t.disable(e),
            f[e] = !1)
        }
        function st(e, r, i, a, o, s, c, u) {
            if (e !== T) {
                if (v || (at(3042),
                v = !0),
                e === C)
                    o = o || r,
                    s = s || i,
                    c = c || a,
                    r === w && o === E || (t.blendEquationSeparate(n.convert(r), n.convert(o)),
                    w = r,
                    E = o),
                    i === _ && a === M && s === S && c === I || (t.blendFuncSeparate(n.convert(i), n.convert(a), n.convert(s), n.convert(c)),
                    _ = i,
                    M = a,
                    S = s,
                    I = c),
                    y = e,
                    D = null;
                else if (e !== y || u !== D) {
                    if (w === O && E === O || (t.blendEquation(32774),
                    w = O,
                    E = O),
                    u)
                        switch (e) {
                        case A:
                            t.blendFuncSeparate(1, 771, 1, 771);
                            break;
                        case L:
                            t.blendFunc(1, 1);
                            break;
                        case R:
                            t.blendFuncSeparate(0, 0, 769, 771);
                            break;
                        case P:
                            t.blendFuncSeparate(0, 768, 0, 770);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", e)
                        }
                    else
                        switch (e) {
                        case A:
                            t.blendFuncSeparate(770, 771, 1, 771);
                            break;
                        case L:
                            t.blendFunc(770, 1);
                            break;
                        case R:
                            t.blendFunc(0, 769);
                            break;
                        case P:
                            t.blendFunc(0, 768);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", e)
                        }
                    _ = null,
                    M = null,
                    S = null,
                    I = null,
                    y = e,
                    D = u
                }
            } else
                v && (ot(3042),
                v = !1)
        }
        function ct(e) {
            N !== e && (e ? t.frontFace(2304) : t.frontFace(2305),
            N = e)
        }
        function ut(e) {
            e !== u ? (at(2884),
            e !== B && (e === h ? t.cullFace(1029) : e === l ? t.cullFace(1028) : t.cullFace(1032))) : ot(2884),
            B = e
        }
        function ht(e, n, r) {
            e ? (at(32823),
            U === n && G === r || (t.polygonOffset(n, r),
            U = n,
            G = r)) : ot(32823)
        }
        function lt(e) {
            void 0 === e && (e = 33984 + F - 1),
            j !== e && (t.activeTexture(e),
            j = e)
        }
        return rt[3553] = nt(3553, 3553, 1),
        rt[34067] = nt(34067, 34069, 6),
        i.setClear(0, 0, 0, 1),
        a.setClear(1),
        o.setClear(0),
        at(2929),
        a.setFunc(Q),
        ct(!1),
        ut(h),
        at(2884),
        st(T),
        {
            buffers: {
                color: i,
                depth: a,
                stencil: o
            },
            initAttributes: function() {
                for (var t = 0, e = c.length; t < e; t++)
                    c[t] = 0
            },
            enableAttribute: function(t) {
                it(t, 0)
            },
            enableAttributeAndDivisor: it,
            disableUnusedAttributes: function() {
                for (var e = 0, n = d.length; e !== n; ++e)
                    d[e] !== c[e] && (t.disableVertexAttribArray(e),
                    d[e] = 0)
            },
            enable: at,
            disable: ot,
            getCompressedTextureFormats: function() {
                if (null === m && (m = [],
                e.get("WEBGL_compressed_texture_pvrtc") || e.get("WEBGL_compressed_texture_s3tc") || e.get("WEBGL_compressed_texture_etc1") || e.get("WEBGL_compressed_texture_astc")))
                    for (var n = t.getParameter(34467), r = 0; r < n.length; r++)
                        m.push(n[r]);
                return m
            },
            useProgram: function(e) {
                return g !== e && (t.useProgram(e),
                g = e,
                !0)
            },
            setBlending: st,
            setMaterial: function(t, e) {
                t.side === b ? ot(2884) : at(2884);
                var n = t.side === x;
                e && (n = !n),
                ct(n),
                t.blending === A && !1 === t.transparent ? st(T) : st(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha),
                a.setFunc(t.depthFunc),
                a.setTest(t.depthTest),
                a.setMask(t.depthWrite),
                i.setMask(t.colorWrite),
                ht(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits)
            },
            setFlipSided: ct,
            setCullFace: ut,
            setLineWidth: function(e) {
                e !== z && (H && t.lineWidth(e),
                z = e)
            },
            setPolygonOffset: ht,
            setScissorTest: function(t) {
                t ? at(3089) : ot(3089)
            },
            activeTexture: lt,
            bindTexture: function(e, n) {
                null === j && lt();
                var r = W[j];
                void 0 === r && (r = {
                    type: void 0,
                    texture: void 0
                },
                W[j] = r),
                r.type === e && r.texture === n || (t.bindTexture(e, n || rt[e]),
                r.type = e,
                r.texture = n)
            },
            compressedTexImage2D: function() {
                try {
                    t.compressedTexImage2D.apply(t, arguments)
                } catch (t) {
                    console.error("THREE.WebGLState:", t)
                }
            },
            texImage2D: function() {
                try {
                    t.texImage2D.apply(t, arguments)
                } catch (t) {
                    console.error("THREE.WebGLState:", t)
                }
            },
            texImage3D: function() {
                try {
                    t.texImage3D.apply(t, arguments)
                } catch (t) {
                    console.error("THREE.WebGLState:", t)
                }
            },
            scissor: function(e) {
                !1 === q.equals(e) && (t.scissor(e.x, e.y, e.z, e.w),
                q.copy(e))
            },
            viewport: function(e) {
                !1 === X.equals(e) && (t.viewport(e.x, e.y, e.z, e.w),
                X.copy(e))
            },
            reset: function() {
                for (var e = 0; e < d.length; e++)
                    1 === d[e] && (t.disableVertexAttribArray(e),
                    d[e] = 0);
                f = {},
                m = null,
                j = null,
                W = {},
                g = null,
                y = null,
                N = null,
                B = null,
                i.reset(),
                a.reset(),
                o.reset()
            }
        }
    }
    function Ea(t, e, n, r, i, a, o) {
        var s, c = {}, u = "undefined" != typeof OffscreenCanvas;
        function h(t, e) {
            return u ? new OffscreenCanvas(t,e) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")
        }
        function l(t, e, n, r) {
            var i = 1;
            if ((t.width > r || t.height > r) && (i = r / Math.max(t.width, t.height)),
            i < 1 || !0 === e) {
                if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
                    var a = e ? Ve.floorPowerOfTwo : Math.floor
                      , o = a(i * t.width)
                      , c = a(i * t.height);
                    void 0 === s && (s = h(o, c));
                    var u = n ? h(o, c) : s;
                    return u.width = o,
                    u.height = c,
                    u.getContext("2d").drawImage(t, 0, 0, o, c),
                    console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + o + "x" + c + ")."),
                    u
                }
                return "data"in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."),
                t
            }
            return t
        }
        function d(t) {
            return Ve.isPowerOfTwo(t.width) && Ve.isPowerOfTwo(t.height)
        }
        function p(t, e) {
            return t.generateMipmaps && e && t.minFilter !== _t && t.minFilter !== St
        }
        function f(e, n, i, a) {
            t.generateMipmap(e),
            r.get(n).__maxMipLevel = Math.log(Math.max(i, a)) * Math.LOG2E
        }
        function m(t, n) {
            if (!i.isWebGL2)
                return t;
            var r = t;
            return 6403 === t && (5126 === n && (r = 33326),
            5131 === n && (r = 33325),
            5121 === n && (r = 33321)),
            6407 === t && (5126 === n && (r = 34837),
            5131 === n && (r = 34843),
            5121 === n && (r = 32849)),
            6408 === t && (5126 === n && (r = 34836),
            5131 === n && (r = 34842),
            5121 === n && (r = 32856)),
            33325 === r || 33326 === r || 34842 === r || 34836 === r ? e.get("EXT_color_buffer_float") : 34843 !== r && 34837 !== r || console.warn("THREE.WebGLRenderer: Floating point textures with RGB format not supported. Please use RGBA instead."),
            r
        }
        function g(t) {
            return t === _t || t === Mt || t === Et ? 9728 : 9729
        }
        function v(e) {
            var n = e.target;
            n.removeEventListener("dispose", v),
            function(e) {
                var n = r.get(e);
                if (void 0 === n.__webglInit)
                    return;
                t.deleteTexture(n.__webglTexture),
                r.remove(e)
            }(n),
            n.isVideoTexture && delete c[n.id],
            o.memory.textures--
        }
        function y(e) {
            var n = e.target;
            n.removeEventListener("dispose", y),
            function(e) {
                var n = r.get(e)
                  , i = r.get(e.texture);
                if (!e)
                    return;
                void 0 !== i.__webglTexture && t.deleteTexture(i.__webglTexture);
                e.depthTexture && e.depthTexture.dispose();
                if (e.isWebGLRenderTargetCube)
                    for (var a = 0; a < 6; a++)
                        t.deleteFramebuffer(n.__webglFramebuffer[a]),
                        n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer[a]);
                else
                    t.deleteFramebuffer(n.__webglFramebuffer),
                    n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer);
                r.remove(e.texture),
                r.remove(e)
            }(n),
            o.memory.textures--
        }
        var x = 0;
        function b(t, e) {
            var i = r.get(t);
            if (t.isVideoTexture && function(t) {
                var e = t.id
                  , n = o.render.frame;
                c[e] !== n && (c[e] = n,
                t.update())
            }(t),
            t.version > 0 && i.__version !== t.version) {
                var a = t.image;
                if (void 0 === a)
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
                else {
                    if (!1 !== a.complete)
                        return void S(i, t, e);
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
                }
            }
            n.activeTexture(33984 + e),
            n.bindTexture(3553, i.__webglTexture)
        }
        function w(e, o) {
            var s = r.get(e);
            if (6 === e.image.length)
                if (e.version > 0 && s.__version !== e.version) {
                    E(s, e),
                    n.activeTexture(33984 + o),
                    n.bindTexture(34067, s.__webglTexture),
                    t.pixelStorei(37440, e.flipY);
                    for (var c = e && e.isCompressedTexture, u = e.image[0] && e.image[0].isDataTexture, h = [], g = 0; g < 6; g++)
                        h[g] = c || u ? u ? e.image[g].image : e.image[g] : l(e.image[g], !1, !0, i.maxCubemapSize);
                    var v = h[0]
                      , y = d(v) || i.isWebGL2
                      , x = a.convert(e.format)
                      , b = a.convert(e.type)
                      , w = m(x, b);
                    M(34067, e, y);
                    for (g = 0; g < 6; g++)
                        if (c)
                            for (var _, S = h[g].mipmaps, T = 0, A = S.length; T < A; T++)
                                _ = S[T],
                                e.format !== Vt && e.format !== Ht ? n.getCompressedTextureFormats().indexOf(x) > -1 ? n.compressedTexImage2D(34069 + g, T, w, _.width, _.height, 0, _.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(34069 + g, T, w, _.width, _.height, 0, x, b, _.data);
                        else
                            u ? n.texImage2D(34069 + g, 0, w, h[g].width, h[g].height, 0, x, b, h[g].data) : n.texImage2D(34069 + g, 0, w, x, b, h[g]);
                    s.__maxMipLevel = c ? S.length - 1 : 0,
                    p(e, y) && f(34067, e, v.width, v.height),
                    s.__version = e.version,
                    e.onUpdate && e.onUpdate(e)
                } else
                    n.activeTexture(33984 + o),
                    n.bindTexture(34067, s.__webglTexture)
        }
        function _(t, e) {
            n.activeTexture(33984 + e),
            n.bindTexture(34067, r.get(t).__webglTexture)
        }
        function M(n, o, s) {
            var c;
            if (s ? (t.texParameteri(n, 10242, a.convert(o.wrapS)),
            t.texParameteri(n, 10243, a.convert(o.wrapT)),
            32879 !== n && 35866 !== n || t.texParameteri(n, 32882, a.convert(o.wrapR)),
            t.texParameteri(n, 10240, a.convert(o.magFilter)),
            t.texParameteri(n, 10241, a.convert(o.minFilter))) : (t.texParameteri(n, 10242, 33071),
            t.texParameteri(n, 10243, 33071),
            32879 !== n && 35866 !== n || t.texParameteri(n, 32882, 33071),
            o.wrapS === bt && o.wrapT === bt || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),
            t.texParameteri(n, 10240, g(o.magFilter)),
            t.texParameteri(n, 10241, g(o.minFilter)),
            o.minFilter !== _t && o.minFilter !== St && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),
            c = e.get("EXT_texture_filter_anisotropic")) {
                if (o.type === Dt && null === e.get("OES_texture_float_linear"))
                    return;
                if (o.type === Nt && null === (i.isWebGL2 || e.get("OES_texture_half_float_linear")))
                    return;
                (o.anisotropy > 1 || r.get(o).__currentAnisotropy) && (t.texParameterf(n, c.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(o.anisotropy, i.getMaxAnisotropy())),
                r.get(o).__currentAnisotropy = o.anisotropy)
            }
        }
        function E(e, n) {
            void 0 === e.__webglInit && (e.__webglInit = !0,
            n.addEventListener("dispose", v),
            e.__webglTexture = t.createTexture(),
            o.memory.textures++)
        }
        function S(e, r, o) {
            var s = 3553;
            r.isDataTexture2DArray && (s = 35866),
            r.isDataTexture3D && (s = 32879),
            E(e, r),
            n.activeTexture(33984 + o),
            n.bindTexture(s, e.__webglTexture),
            t.pixelStorei(37440, r.flipY),
            t.pixelStorei(37441, r.premultiplyAlpha),
            t.pixelStorei(3317, r.unpackAlignment);
            var c = function(t) {
                return !i.isWebGL2 && (t.wrapS !== bt || t.wrapT !== bt || t.minFilter !== _t && t.minFilter !== St)
            }(r) && !1 === d(r.image)
              , u = l(r.image, c, !1, i.maxTextureSize)
              , h = d(u) || i.isWebGL2
              , g = a.convert(r.format)
              , v = a.convert(r.type)
              , y = m(g, v);
            M(s, r, h);
            var x, b = r.mipmaps;
            if (r.isDepthTexture) {
                if (y = 6402,
                r.type === Dt) {
                    if (!i.isWebGL2)
                        throw new Error("Float Depth Texture only supported in WebGL2.0");
                    y = 36012
                } else
                    i.isWebGL2 && (y = 33189);
                r.format === qt && 6402 === y && r.type !== Ct && r.type !== It && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),
                r.type = Ct,
                v = a.convert(r.type)),
                r.format === Xt && (y = 34041,
                r.type !== Gt && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),
                r.type = Gt,
                v = a.convert(r.type))),
                n.texImage2D(3553, 0, y, u.width, u.height, 0, g, v, null)
            } else if (r.isDataTexture)
                if (b.length > 0 && h) {
                    for (var w = 0, _ = b.length; w < _; w++)
                        x = b[w],
                        n.texImage2D(3553, w, y, x.width, x.height, 0, g, v, x.data);
                    r.generateMipmaps = !1,
                    e.__maxMipLevel = b.length - 1
                } else
                    n.texImage2D(3553, 0, y, u.width, u.height, 0, g, v, u.data),
                    e.__maxMipLevel = 0;
            else if (r.isCompressedTexture) {
                for (w = 0,
                _ = b.length; w < _; w++)
                    x = b[w],
                    r.format !== Vt && r.format !== Ht ? n.getCompressedTextureFormats().indexOf(g) > -1 ? n.compressedTexImage2D(3553, w, y, x.width, x.height, 0, x.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(3553, w, y, x.width, x.height, 0, g, v, x.data);
                e.__maxMipLevel = b.length - 1
            } else if (r.isDataTexture2DArray)
                n.texImage3D(35866, 0, y, u.width, u.height, u.depth, 0, g, v, u.data),
                e.__maxMipLevel = 0;
            else if (r.isDataTexture3D)
                n.texImage3D(32879, 0, y, u.width, u.height, u.depth, 0, g, v, u.data),
                e.__maxMipLevel = 0;
            else if (b.length > 0 && h) {
                for (w = 0,
                _ = b.length; w < _; w++)
                    x = b[w],
                    n.texImage2D(3553, w, y, g, v, x);
                r.generateMipmaps = !1,
                e.__maxMipLevel = b.length - 1
            } else
                n.texImage2D(3553, 0, y, g, v, u),
                e.__maxMipLevel = 0;
            p(r, h) && f(3553, r, u.width, u.height),
            e.__version = r.version,
            r.onUpdate && r.onUpdate(r)
        }
        function T(e, i, o, s) {
            var c = a.convert(i.texture.format)
              , u = a.convert(i.texture.type)
              , h = m(c, u);
            n.texImage2D(s, 0, h, i.width, i.height, 0, c, u, null),
            t.bindFramebuffer(36160, e),
            t.framebufferTexture2D(36160, o, s, r.get(i.texture).__webglTexture, 0),
            t.bindFramebuffer(36160, null)
        }
        function A(e, n, r) {
            if (t.bindRenderbuffer(36161, e),
            n.depthBuffer && !n.stencilBuffer) {
                if (r) {
                    var i = R(n);
                    t.renderbufferStorageMultisample(36161, i, 33189, n.width, n.height)
                } else
                    t.renderbufferStorage(36161, 33189, n.width, n.height);
                t.framebufferRenderbuffer(36160, 36096, 36161, e)
            } else if (n.depthBuffer && n.stencilBuffer) {
                if (r) {
                    i = R(n);
                    t.renderbufferStorageMultisample(36161, i, 35056, n.width, n.height)
                } else
                    t.renderbufferStorage(36161, 34041, n.width, n.height);
                t.framebufferRenderbuffer(36160, 33306, 36161, e)
            } else {
                var o = m(a.convert(n.texture.format), a.convert(n.texture.type));
                if (r) {
                    i = R(n);
                    t.renderbufferStorageMultisample(36161, i, o, n.width, n.height)
                } else
                    t.renderbufferStorage(36161, o, n.width, n.height)
            }
            t.bindRenderbuffer(36161, null)
        }
        function L(e) {
            var n = r.get(e)
              , i = !0 === e.isWebGLRenderTargetCube;
            if (e.depthTexture) {
                if (i)
                    throw new Error("target.depthTexture not supported in Cube render targets");
                !function(e, n) {
                    if (n && n.isWebGLRenderTargetCube)
                        throw new Error("Depth Texture with cube render targets is not supported");
                    if (t.bindFramebuffer(36160, e),
                    !n.depthTexture || !n.depthTexture.isDepthTexture)
                        throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                    r.get(n.depthTexture).__webglTexture && n.depthTexture.image.width === n.width && n.depthTexture.image.height === n.height || (n.depthTexture.image.width = n.width,
                    n.depthTexture.image.height = n.height,
                    n.depthTexture.needsUpdate = !0),
                    b(n.depthTexture, 0);
                    var i = r.get(n.depthTexture).__webglTexture;
                    if (n.depthTexture.format === qt)
                        t.framebufferTexture2D(36160, 36096, 3553, i, 0);
                    else {
                        if (n.depthTexture.format !== Xt)
                            throw new Error("Unknown depthTexture format");
                        t.framebufferTexture2D(36160, 33306, 3553, i, 0)
                    }
                }(n.__webglFramebuffer, e)
            } else if (i) {
                n.__webglDepthbuffer = [];
                for (var a = 0; a < 6; a++)
                    t.bindFramebuffer(36160, n.__webglFramebuffer[a]),
                    n.__webglDepthbuffer[a] = t.createRenderbuffer(),
                    A(n.__webglDepthbuffer[a], e)
            } else
                t.bindFramebuffer(36160, n.__webglFramebuffer),
                n.__webglDepthbuffer = t.createRenderbuffer(),
                A(n.__webglDepthbuffer, e);
            t.bindFramebuffer(36160, null)
        }
        function R(t) {
            return i.isWebGL2 && t.isWebGLMultisampleRenderTarget ? Math.min(i.maxSamples, t.samples) : 0
        }
        var P = !1
          , C = !1;
        this.allocateTextureUnit = function() {
            var t = x;
            return t >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + t + " texture units while this GPU supports only " + i.maxTextures),
            x += 1,
            t
        }
        ,
        this.resetTextureUnits = function() {
            x = 0
        }
        ,
        this.setTexture2D = b,
        this.setTexture2DArray = function(t, e) {
            var i = r.get(t);
            t.version > 0 && i.__version !== t.version ? S(i, t, e) : (n.activeTexture(33984 + e),
            n.bindTexture(35866, i.__webglTexture))
        }
        ,
        this.setTexture3D = function(t, e) {
            var i = r.get(t);
            t.version > 0 && i.__version !== t.version ? S(i, t, e) : (n.activeTexture(33984 + e),
            n.bindTexture(32879, i.__webglTexture))
        }
        ,
        this.setTextureCube = w,
        this.setTextureCubeDynamic = _,
        this.setupRenderTarget = function(e) {
            var s = r.get(e)
              , c = r.get(e.texture);
            e.addEventListener("dispose", y),
            c.__webglTexture = t.createTexture(),
            o.memory.textures++;
            var u = !0 === e.isWebGLRenderTargetCube
              , h = !0 === e.isWebGLMultisampleRenderTarget
              , l = d(e) || i.isWebGL2;
            if (u) {
                s.__webglFramebuffer = [];
                for (var g = 0; g < 6; g++)
                    s.__webglFramebuffer[g] = t.createFramebuffer()
            } else if (s.__webglFramebuffer = t.createFramebuffer(),
            h)
                if (i.isWebGL2) {
                    s.__webglMultisampledFramebuffer = t.createFramebuffer(),
                    s.__webglColorRenderbuffer = t.createRenderbuffer(),
                    t.bindRenderbuffer(36161, s.__webglColorRenderbuffer);
                    var v = m(a.convert(e.texture.format), a.convert(e.texture.type))
                      , x = R(e);
                    t.renderbufferStorageMultisample(36161, x, v, e.width, e.height),
                    t.bindFramebuffer(36160, s.__webglMultisampledFramebuffer),
                    t.framebufferRenderbuffer(36160, 36064, 36161, s.__webglColorRenderbuffer),
                    t.bindRenderbuffer(36161, null),
                    e.depthBuffer && (s.__webglDepthRenderbuffer = t.createRenderbuffer(),
                    A(s.__webglDepthRenderbuffer, e, !0)),
                    t.bindFramebuffer(36160, null)
                } else
                    console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
            if (u) {
                n.bindTexture(34067, c.__webglTexture),
                M(34067, e.texture, l);
                for (g = 0; g < 6; g++)
                    T(s.__webglFramebuffer[g], e, 36064, 34069 + g);
                p(e.texture, l) && f(34067, e.texture, e.width, e.height),
                n.bindTexture(34067, null)
            } else
                n.bindTexture(3553, c.__webglTexture),
                M(3553, e.texture, l),
                T(s.__webglFramebuffer, e, 36064, 3553),
                p(e.texture, l) && f(3553, e.texture, e.width, e.height),
                n.bindTexture(3553, null);
            e.depthBuffer && L(e)
        }
        ,
        this.updateRenderTargetMipmap = function(t) {
            var e = t.texture;
            if (p(e, d(t) || i.isWebGL2)) {
                var a = t.isWebGLRenderTargetCube ? 34067 : 3553
                  , o = r.get(e).__webglTexture;
                n.bindTexture(a, o),
                f(a, e, t.width, t.height),
                n.bindTexture(a, null)
            }
        }
        ,
        this.updateMultisampleRenderTarget = function(e) {
            if (e.isWebGLMultisampleRenderTarget)
                if (i.isWebGL2) {
                    var n = r.get(e);
                    t.bindFramebuffer(36008, n.__webglMultisampledFramebuffer),
                    t.bindFramebuffer(36009, n.__webglFramebuffer);
                    var a = e.width
                      , o = e.height
                      , s = 16384;
                    e.depthBuffer && (s |= 256),
                    e.stencilBuffer && (s |= 1024),
                    t.blitFramebuffer(0, 0, a, o, 0, 0, a, o, s, 9728)
                } else
                    console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")
        }
        ,
        this.safeSetTexture2D = function(t, e) {
            t && t.isWebGLRenderTarget && (!1 === P && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),
            P = !0),
            t = t.texture),
            b(t, e)
        }
        ,
        this.safeSetTextureCube = function(t, e) {
            t && t.isWebGLRenderTargetCube && (!1 === C && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),
            C = !0),
            t = t.texture),
            t && t.isCubeTexture || Array.isArray(t.image) && 6 === t.image.length ? w(t, e) : _(t, e)
        }
    }
    function Sa(t, e, n) {
        return {
            convert: function(t) {
                var r;
                if (t === xt)
                    return 10497;
                if (t === bt)
                    return 33071;
                if (t === wt)
                    return 33648;
                if (t === _t)
                    return 9728;
                if (t === Mt)
                    return 9984;
                if (t === Et)
                    return 9986;
                if (t === St)
                    return 9729;
                if (t === Tt)
                    return 9985;
                if (t === At)
                    return 9987;
                if (t === Lt)
                    return 5121;
                if (t === Bt)
                    return 32819;
                if (t === zt)
                    return 32820;
                if (t === Ut)
                    return 33635;
                if (t === Rt)
                    return 5120;
                if (t === Pt)
                    return 5122;
                if (t === Ct)
                    return 5123;
                if (t === Ot)
                    return 5124;
                if (t === It)
                    return 5125;
                if (t === Dt)
                    return 5126;
                if (t === Nt) {
                    if (n.isWebGL2)
                        return 5131;
                    if (null !== (r = e.get("OES_texture_half_float")))
                        return r.HALF_FLOAT_OES
                }
                if (t === Ft)
                    return 6406;
                if (t === Ht)
                    return 6407;
                if (t === Vt)
                    return 6408;
                if (t === kt)
                    return 6409;
                if (t === jt)
                    return 6410;
                if (t === qt)
                    return 6402;
                if (t === Xt)
                    return 34041;
                if (t === Yt)
                    return 6403;
                if (t === O)
                    return 32774;
                if (t === I)
                    return 32778;
                if (t === D)
                    return 32779;
                if (t === z)
                    return 0;
                if (t === U)
                    return 1;
                if (t === G)
                    return 768;
                if (t === F)
                    return 769;
                if (t === H)
                    return 770;
                if (t === V)
                    return 771;
                if (t === k)
                    return 772;
                if (t === j)
                    return 773;
                if (t === W)
                    return 774;
                if (t === q)
                    return 775;
                if (t === X)
                    return 776;
                if ((t === Jt || t === Zt || t === Qt || t === Kt) && null !== (r = e.get("WEBGL_compressed_texture_s3tc"))) {
                    if (t === Jt)
                        return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
                    if (t === Zt)
                        return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                    if (t === Qt)
                        return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                    if (t === Kt)
                        return r.COMPRESSED_RGBA_S3TC_DXT5_EXT
                }
                if ((t === $t || t === te || t === ee || t === ne) && null !== (r = e.get("WEBGL_compressed_texture_pvrtc"))) {
                    if (t === $t)
                        return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    if (t === te)
                        return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    if (t === ee)
                        return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    if (t === ne)
                        return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                }
                if (t === re && null !== (r = e.get("WEBGL_compressed_texture_etc1")))
                    return r.COMPRESSED_RGB_ETC1_WEBGL;
                if ((t === ie || t === ae || t === oe || t === se || t === ce || t === ue || t === he || t === le || t === de || t === pe || t === fe || t === me || t === ge || t === ve) && null !== (r = e.get("WEBGL_compressed_texture_astc")))
                    return t;
                if (t === N || t === B) {
                    if (n.isWebGL2) {
                        if (t === N)
                            return 32775;
                        if (t === B)
                            return 32776
                    }
                    if (null !== (r = e.get("EXT_blend_minmax"))) {
                        if (t === N)
                            return r.MIN_EXT;
                        if (t === B)
                            return r.MAX_EXT
                    }
                }
                if (t === Gt) {
                    if (n.isWebGL2)
                        return 34042;
                    if (null !== (r = e.get("WEBGL_depth_texture")))
                        return r.UNSIGNED_INT_24_8_WEBGL
                }
                return 0
            }
        }
    }
    function Ta() {
        Dn.call(this),
        this.type = "Group"
    }
    function Aa(t) {
        Tr.call(this),
        this.cameras = t || []
    }
    ba.prototype = Object.create(Zn.prototype),
    ba.prototype.constructor = ba,
    ba.prototype.isMeshDepthMaterial = !0,
    ba.prototype.copy = function(t) {
        return Zn.prototype.copy.call(this, t),
        this.depthPacking = t.depthPacking,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.map = t.map,
        this.alphaMap = t.alphaMap,
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this
    }
    ,
    wa.prototype = Object.create(Zn.prototype),
    wa.prototype.constructor = wa,
    wa.prototype.isMeshDistanceMaterial = !0,
    wa.prototype.copy = function(t) {
        return Zn.prototype.copy.call(this, t),
        this.referencePosition.copy(t.referencePosition),
        this.nearDistance = t.nearDistance,
        this.farDistance = t.farDistance,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.map = t.map,
        this.alphaMap = t.alphaMap,
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this
    }
    ,
    Ta.prototype = Object.assign(Object.create(Dn.prototype), {
        constructor: Ta,
        isGroup: !0
    }),
    Aa.prototype = Object.assign(Object.create(Tr.prototype), {
        constructor: Aa,
        isArrayCamera: !0
    });
    var La, Ra, Pa, Ca, Oa, Ia, Da = new We, Na = new We;
    function Ba(t, e, n) {
        Da.setFromMatrixPosition(e.matrixWorld),
        Na.setFromMatrixPosition(n.matrixWorld);
        var r = Da.distanceTo(Na)
          , i = e.projectionMatrix.elements
          , a = n.projectionMatrix.elements
          , o = i[14] / (i[10] - 1)
          , s = i[14] / (i[10] + 1)
          , c = (i[9] + 1) / i[5]
          , u = (i[9] - 1) / i[5]
          , h = (i[8] - 1) / i[0]
          , l = (a[8] + 1) / a[0]
          , d = o * h
          , p = o * l
          , f = r / (-h + l)
          , m = f * -h;
        e.matrixWorld.decompose(t.position, t.quaternion, t.scale),
        t.translateX(m),
        t.translateZ(f),
        t.matrixWorld.compose(t.position, t.quaternion, t.scale),
        t.matrixWorldInverse.getInverse(t.matrixWorld);
        var g = o + f
          , v = s + f
          , y = d - m
          , x = p + (r - m)
          , b = c * s / v * g
          , w = u * s / v * g;
        t.projectionMatrix.makePerspective(y, x, b, w, g, v)
    }
    function za(t) {
        var e, n, r = this, i = null, a = null, o = null, s = [], c = new hn, u = new hn, h = 1, l = "local-floor";
        "undefined" != typeof window && "VRFrameData"in window && (a = new window.VRFrameData,
        window.addEventListener("vrdisplaypresentchange", w, !1));
        var d = new hn
          , p = new je
          , f = new We
          , m = new Tr;
        m.viewport = new sn,
        m.layers.enable(1);
        var g = new Tr;
        g.viewport = new sn,
        g.layers.enable(2);
        var v = new Aa([m, g]);
        function y() {
            return null !== i && !0 === i.isPresenting
        }
        v.layers.enable(1),
        v.layers.enable(2);
        var x, b = new ke;
        function w() {
            if (y()) {
                var a = i.getEyeParameters("left");
                e = 2 * a.renderWidth * h,
                n = a.renderHeight * h,
                x = t.getPixelRatio(),
                t.getSize(b),
                t.setDrawingBufferSize(e, n, 1),
                m.viewport.set(0, 0, e / 2, n),
                g.viewport.set(e / 2, 0, e / 2, n),
                S.start(),
                r.dispatchEvent({
                    type: "sessionstart"
                })
            } else
                r.enabled && t.setDrawingBufferSize(b.width, b.height, x),
                S.stop(),
                r.dispatchEvent({
                    type: "sessionend"
                })
        }
        var _ = [];
        function M(t) {
            for (var e = navigator.getGamepads && navigator.getGamepads(), n = 0, r = 0, i = e.length; n < i; n++) {
                var a = e[n];
                if (a && ("Daydream Controller" === a.id || "Gear VR Controller" === a.id || "Oculus Go Controller" === a.id || "OpenVR Gamepad" === a.id || a.id.startsWith("Oculus Touch") || a.id.startsWith("HTC Vive Focus") || a.id.startsWith("Spatial Controller"))) {
                    if (r === t)
                        return a;
                    r++
                }
            }
        }
        function E(t, r) {
            null !== r && 4 === r.length && t.set(r[0] * e, r[1] * n, r[2] * e, r[3] * n)
        }
        this.enabled = !1,
        this.getController = function(t) {
            var e = s[t];
            return void 0 === e && ((e = new Ta).matrixAutoUpdate = !1,
            e.visible = !1,
            s[t] = e),
            e
        }
        ,
        this.getDevice = function() {
            return i
        }
        ,
        this.setDevice = function(t) {
            void 0 !== t && (i = t),
            S.setContext(t)
        }
        ,
        this.setFramebufferScaleFactor = function(t) {
            h = t
        }
        ,
        this.setReferenceSpaceType = function(t) {
            l = t
        }
        ,
        this.setPoseTarget = function(t) {
            void 0 !== t && (o = t)
        }
        ,
        this.getCamera = function(t) {
            var e = "local-floor" === l ? 1.6 : 0;
            if (!1 === y())
                return t.position.set(0, e, 0),
                t.rotation.set(0, 0, 0),
                t;
            if (i.depthNear = t.near,
            i.depthFar = t.far,
            i.getFrameData(a),
            "local-floor" === l) {
                var n = i.stageParameters;
                n ? c.fromArray(n.sittingToStandingTransform) : c.makeTranslation(0, e, 0)
            }
            var r = a.pose
              , h = null !== o ? o : t;
            h.matrix.copy(c),
            h.matrix.decompose(h.position, h.quaternion, h.scale),
            null !== r.orientation && (p.fromArray(r.orientation),
            h.quaternion.multiply(p)),
            null !== r.position && (p.setFromRotationMatrix(c),
            f.fromArray(r.position),
            f.applyQuaternion(p),
            h.position.add(f)),
            h.updateMatrixWorld(),
            m.near = t.near,
            g.near = t.near,
            m.far = t.far,
            g.far = t.far,
            m.matrixWorldInverse.fromArray(a.leftViewMatrix),
            g.matrixWorldInverse.fromArray(a.rightViewMatrix),
            u.getInverse(c),
            "local-floor" === l && (m.matrixWorldInverse.multiply(u),
            g.matrixWorldInverse.multiply(u));
            var x = h.parent;
            null !== x && (d.getInverse(x.matrixWorld),
            m.matrixWorldInverse.multiply(d),
            g.matrixWorldInverse.multiply(d)),
            m.matrixWorld.getInverse(m.matrixWorldInverse),
            g.matrixWorld.getInverse(g.matrixWorldInverse),
            m.projectionMatrix.fromArray(a.leftProjectionMatrix),
            g.projectionMatrix.fromArray(a.rightProjectionMatrix),
            Ba(v, m, g);
            var b = i.getLayers();
            if (b.length) {
                var w = b[0];
                E(m.viewport, w.leftBounds),
                E(g.viewport, w.rightBounds)
            }
            return function() {
                for (var t = 0; t < s.length; t++) {
                    var e = s[t]
                      , n = M(t);
                    if (void 0 !== n && void 0 !== n.pose) {
                        if (null === n.pose)
                            return;
                        var r = n.pose;
                        !1 === r.hasPosition && e.position.set(.2, -.6, -.05),
                        null !== r.position && e.position.fromArray(r.position),
                        null !== r.orientation && e.quaternion.fromArray(r.orientation),
                        e.matrix.compose(e.position, e.quaternion, e.scale),
                        e.matrix.premultiply(c),
                        e.matrix.decompose(e.position, e.quaternion, e.scale),
                        e.matrixWorldNeedsUpdate = !0,
                        e.visible = !0;
                        var i = "Daydream Controller" === n.id ? 0 : 1;
                        void 0 === _[t] && (_[t] = !1),
                        _[t] !== n.buttons[i].pressed && (_[t] = n.buttons[i].pressed,
                        !0 === _[t] ? e.dispatchEvent({
                            type: "selectstart"
                        }) : (e.dispatchEvent({
                            type: "selectend"
                        }),
                        e.dispatchEvent({
                            type: "select"
                        })))
                    } else
                        e.visible = !1
                }
            }(),
            v
        }
        ,
        this.getStandingMatrix = function() {
            return c
        }
        ,
        this.isPresenting = y;
        var S = new Gr;
        this.setAnimationLoop = function(t) {
            S.setAnimationLoop(t),
            y() && S.start()
        }
        ,
        this.submitFrame = function() {
            y() && i.submitFrame()
        }
        ,
        this.dispose = function() {
            "undefined" != typeof window && window.removeEventListener("vrdisplaypresentchange", w)
        }
        ,
        this.setFrameOfReferenceType = function() {
            console.warn("THREE.WebVRManager: setFrameOfReferenceType() has been deprecated.")
        }
    }
    function Ua(t) {
        var e = this
          , n = t.context
          , r = null
          , i = null
          , a = "local-floor"
          , o = null
          , s = []
          , c = [];
        function u() {
            return null !== r && null !== i
        }
        var h = new Tr;
        h.layers.enable(1),
        h.viewport = new sn;
        var l = new Tr;
        l.layers.enable(2),
        l.viewport = new sn;
        var d = new Aa([h, l]);
        function p(t) {
            for (var e = 0; e < s.length; e++)
                c[e] === t.inputSource && s[e].dispatchEvent({
                    type: t.type
                })
        }
        function f() {
            t.setFramebuffer(null),
            t.setRenderTarget(t.getRenderTarget()),
            y.stop(),
            e.dispatchEvent({
                type: "sessionend"
            })
        }
        function m(t) {
            i = t,
            y.setContext(r),
            y.start(),
            e.dispatchEvent({
                type: "sessionstart"
            })
        }
        function g(t, e) {
            null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix),
            t.matrixWorldInverse.getInverse(t.matrixWorld)
        }
        d.layers.enable(1),
        d.layers.enable(2),
        this.enabled = !1,
        this.getController = function(t) {
            var e = s[t];
            return void 0 === e && ((e = new Ta).matrixAutoUpdate = !1,
            e.visible = !1,
            s[t] = e),
            e
        }
        ,
        this.setFramebufferScaleFactor = function(t) {}
        ,
        this.setReferenceSpaceType = function(t) {
            a = t
        }
        ,
        this.getSession = function() {
            return r
        }
        ,
        this.setSession = function(t) {
            null !== (r = t) && (r.addEventListener("select", p),
            r.addEventListener("selectstart", p),
            r.addEventListener("selectend", p),
            r.addEventListener("end", f),
            r.updateRenderState({
                baseLayer: new XRWebGLLayer(r,n)
            }),
            r.requestReferenceSpace(a).then(m),
            c = r.inputSources,
            r.addEventListener("inputsourceschange", function() {
                c = r.inputSources,
                console.log(c);
                for (var t = 0; t < s.length; t++) {
                    s[t].userData.inputSource = c[t]
                }
            }))
        }
        ,
        this.getCamera = function(t) {
            if (u()) {
                var e = t.parent
                  , n = d.cameras;
                g(d, e);
                for (var r = 0; r < n.length; r++)
                    g(n[r], e);
                t.matrixWorld.copy(d.matrixWorld);
                for (var i = t.children, a = (r = 0,
                i.length); r < a; r++)
                    i[r].updateMatrixWorld(!0);
                return Ba(d, h, l),
                d
            }
            return t
        }
        ,
        this.isPresenting = u;
        var v = null;
        var y = new Gr;
        y.setAnimationLoop(function(e, n) {
            if (null !== (o = n.getViewerPose(i))) {
                var a = o.views
                  , u = r.renderState.baseLayer;
                t.setFramebuffer(u.framebuffer);
                for (var h = 0; h < a.length; h++) {
                    var l = a[h]
                      , p = u.getViewport(l)
                      , f = l.transform.inverse.matrix
                      , m = d.cameras[h];
                    m.matrix.fromArray(f).getInverse(m.matrix),
                    m.projectionMatrix.fromArray(l.projectionMatrix),
                    m.viewport.set(p.x, p.y, p.width, p.height),
                    0 === h && d.matrix.copy(m.matrix)
                }
            }
            for (h = 0; h < s.length; h++) {
                var g = s[h]
                  , y = c[h];
                if (y) {
                    var x = n.getPose(y.targetRaySpace, i);
                    if (null !== x) {
                        g.matrix.fromArray(x.transform.matrix),
                        g.matrix.decompose(g.position, g.rotation, g.scale),
                        g.visible = !0;
                        continue
                    }
                }
                g.visible = !1
            }
            v && v(e)
        }),
        this.setAnimationLoop = function(t) {
            v = t
        }
        ,
        this.dispose = function() {}
        ,
        this.getStandingMatrix = function() {
            return console.warn("THREE.WebXRManager: getStandingMatrix() is no longer needed."),
            new hn
        }
        ,
        this.getDevice = function() {
            console.warn("THREE.WebXRManager: getDevice() has been deprecated.")
        }
        ,
        this.setDevice = function() {
            console.warn("THREE.WebXRManager: setDevice() has been deprecated.")
        }
        ,
        this.setFrameOfReferenceType = function() {
            console.warn("THREE.WebXRManager: setFrameOfReferenceType() has been deprecated.")
        }
        ,
        this.submitFrame = function() {}
    }
    function Ga(t) {
        console.log("THREE.WebGLRenderer", s);
        var e = void 0 !== (t = t || {}).canvas ? t.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")
          , n = void 0 !== t.context ? t.context : null
          , r = void 0 !== t.alpha && t.alpha
          , i = void 0 === t.depth || t.depth
          , a = void 0 === t.stencil || t.stencil
          , o = void 0 !== t.antialias && t.antialias
          , c = void 0 === t.premultipliedAlpha || t.premultipliedAlpha
          , u = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer
          , h = void 0 !== t.powerPreference ? t.powerPreference : "default"
          , l = void 0 !== t.failIfMajorPerformanceCaveat && t.failIfMajorPerformanceCaveat
          , d = null
          , p = null;
        this.domElement = e,
        this.context = null,
        this.debug = {
            checkShaderErrors: !0
        },
        this.autoClear = !0,
        this.autoClearColor = !0,
        this.autoClearDepth = !0,
        this.autoClearStencil = !0,
        this.sortObjects = !0,
        this.clippingPlanes = [],
        this.localClippingEnabled = !1,
        this.gammaFactor = 2,
        this.gammaInput = !1,
        this.gammaOutput = !1,
        this.physicallyCorrectLights = !1,
        this.toneMapping = ot,
        this.toneMappingExposure = 1,
        this.toneMappingWhitePoint = 1,
        this.maxMorphTargets = 8,
        this.maxMorphNormals = 4;
        var f, m, g, v, y, b, w, _, M, E, S, T, A, L, R, P, C, O, I = this, D = !1, N = null, B = 0, z = 0, U = null, G = null, F = -1, H = {
            geometry: null,
            program: null,
            wireframe: !1
        }, V = null, k = null, j = new sn, W = new sn, q = null, X = e.width, Y = e.height, J = 1, Z = new sn(0,0,X,Y), Q = new sn(0,0,X,Y), K = !1, $ = new Nr, tt = new qr, et = !1, nt = !1, rt = new hn, it = new We;
        function at() {
            return null === U ? J : 1
        }
        try {
            var st = {
                alpha: r,
                depth: i,
                stencil: a,
                antialias: o,
                premultipliedAlpha: c,
                preserveDrawingBuffer: u,
                powerPreference: h,
                failIfMajorPerformanceCaveat: l,
                xrCompatible: !0
            };
            if (e.addEventListener("webglcontextlost", lt, !1),
            e.addEventListener("webglcontextrestored", dt, !1),
            null === (f = n || e.getContext("webgl", st) || e.getContext("experimental-webgl", st)))
                throw null !== e.getContext("webgl") ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
            void 0 === f.getShaderPrecisionFormat && (f.getShaderPrecisionFormat = function() {
                return {
                    rangeMin: 1,
                    rangeMax: 1,
                    precision: 1
                }
            }
            )
        } catch (t) {
            throw console.error("THREE.WebGLRenderer: " + t.message),
            t
        }
        function ct() {
            m = new Xr(f),
            (g = new Wr(f,m,t)).isWebGL2 || (m.get("WEBGL_depth_texture"),
            m.get("OES_texture_float"),
            m.get("OES_texture_half_float"),
            m.get("OES_texture_half_float_linear"),
            m.get("OES_standard_derivatives"),
            m.get("OES_element_index_uint"),
            m.get("ANGLE_instanced_arrays")),
            m.get("OES_texture_float_linear"),
            O = new Sa(f,m,g),
            (v = new Ma(f,m,O,g)).scissor(W.copy(Q).multiplyScalar(J).floor()),
            v.viewport(j.copy(Z).multiplyScalar(J).floor()),
            y = new Zr(f),
            b = new ha,
            w = new Ea(f,m,v,b,g,O,y),
            _ = new Fr(f),
            M = new Yr(f,_,y),
            E = new $r(M,y),
            R = new Kr(f),
            S = new ua(I,m,g),
            T = new fa,
            A = new xa,
            L = new kr(I,v,E,c),
            P = new jr(f,m,y,g),
            C = new Jr(f,m,y,g),
            y.programs = S.programs,
            I.context = f,
            I.capabilities = g,
            I.extensions = m,
            I.properties = b,
            I.renderLists = T,
            I.state = v,
            I.info = y
        }
        ct();
        var ut = "undefined" != typeof navigator && "xr"in navigator && "supportsSession"in navigator.xr ? new Ua(I) : new za(I);
        this.vr = ut;
        var ht = new _a(I,E,g.maxTextureSize);
        function lt(t) {
            t.preventDefault(),
            console.log("THREE.WebGLRenderer: Context Lost."),
            D = !0
        }
        function dt() {
            console.log("THREE.WebGLRenderer: Context Restored."),
            D = !1,
            ct()
        }
        function pt(t) {
            var e = t.target;
            e.removeEventListener("dispose", pt),
            function(t) {
                ft(t),
                b.remove(t)
            }(e)
        }
        function ft(t) {
            var e = b.get(t).program;
            t.program = void 0,
            void 0 !== e && S.releaseProgram(e)
        }
        this.shadowMap = ht,
        this.getContext = function() {
            return f
        }
        ,
        this.getContextAttributes = function() {
            return f.getContextAttributes()
        }
        ,
        this.forceContextLoss = function() {
            var t = m.get("WEBGL_lose_context");
            t && t.loseContext()
        }
        ,
        this.forceContextRestore = function() {
            var t = m.get("WEBGL_lose_context");
            t && t.restoreContext()
        }
        ,
        this.getPixelRatio = function() {
            return J
        }
        ,
        this.setPixelRatio = function(t) {
            void 0 !== t && (J = t,
            this.setSize(X, Y, !1))
        }
        ,
        this.getSize = function(t) {
            return void 0 === t && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),
            t = new ke),
            t.set(X, Y)
        }
        ,
        this.setSize = function(t, n, r) {
            ut.isPresenting() ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (X = t,
            Y = n,
            e.width = Math.floor(t * J),
            e.height = Math.floor(n * J),
            !1 !== r && (e.style.width = t + "px",
            e.style.height = n + "px"),
            this.setViewport(0, 0, t, n))
        }
        ,
        this.getDrawingBufferSize = function(t) {
            return void 0 === t && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),
            t = new ke),
            t.set(X * J, Y * J).floor()
        }
        ,
        this.setDrawingBufferSize = function(t, n, r) {
            X = t,
            Y = n,
            J = r,
            e.width = Math.floor(t * r),
            e.height = Math.floor(n * r),
            this.setViewport(0, 0, t, n)
        }
        ,
        this.getCurrentViewport = function(t) {
            return void 0 === t && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),
            t = new sn),
            t.copy(j)
        }
        ,
        this.getViewport = function(t) {
            return t.copy(Z)
        }
        ,
        this.setViewport = function(t, e, n, r) {
            t.isVector4 ? Z.set(t.x, t.y, t.z, t.w) : Z.set(t, e, n, r),
            v.viewport(j.copy(Z).multiplyScalar(J).floor())
        }
        ,
        this.getScissor = function(t) {
            return t.copy(Q)
        }
        ,
        this.setScissor = function(t, e, n, r) {
            t.isVector4 ? Q.set(t.x, t.y, t.z, t.w) : Q.set(t, e, n, r),
            v.scissor(W.copy(Q).multiplyScalar(J).floor())
        }
        ,
        this.getScissorTest = function() {
            return K
        }
        ,
        this.setScissorTest = function(t) {
            v.setScissorTest(K = t)
        }
        ,
        this.getClearColor = function() {
            return L.getClearColor()
        }
        ,
        this.setClearColor = function() {
            L.setClearColor.apply(L, arguments)
        }
        ,
        this.getClearAlpha = function() {
            return L.getClearAlpha()
        }
        ,
        this.setClearAlpha = function() {
            L.setClearAlpha.apply(L, arguments)
        }
        ,
        this.clear = function(t, e, n) {
            var r = 0;
            (void 0 === t || t) && (r |= 16384),
            (void 0 === e || e) && (r |= 256),
            (void 0 === n || n) && (r |= 1024),
            f.clear(r)
        }
        ,
        this.clearColor = function() {
            this.clear(!0, !1, !1)
        }
        ,
        this.clearDepth = function() {
            this.clear(!1, !0, !1)
        }
        ,
        this.clearStencil = function() {
            this.clear(!1, !1, !0)
        }
        ,
        this.dispose = function() {
            e.removeEventListener("webglcontextlost", lt, !1),
            e.removeEventListener("webglcontextrestored", dt, !1),
            T.dispose(),
            A.dispose(),
            b.dispose(),
            E.dispose(),
            ut.dispose(),
            gt.stop()
        }
        ,
        this.renderBufferImmediate = function(t, e) {
            v.initAttributes();
            var n = b.get(t);
            t.hasPositions && !n.position && (n.position = f.createBuffer()),
            t.hasNormals && !n.normal && (n.normal = f.createBuffer()),
            t.hasUvs && !n.uv && (n.uv = f.createBuffer()),
            t.hasColors && !n.color && (n.color = f.createBuffer());
            var r = e.getAttributes();
            t.hasPositions && (f.bindBuffer(34962, n.position),
            f.bufferData(34962, t.positionArray, 35048),
            v.enableAttribute(r.position),
            f.vertexAttribPointer(r.position, 3, 5126, !1, 0, 0)),
            t.hasNormals && (f.bindBuffer(34962, n.normal),
            f.bufferData(34962, t.normalArray, 35048),
            v.enableAttribute(r.normal),
            f.vertexAttribPointer(r.normal, 3, 5126, !1, 0, 0)),
            t.hasUvs && (f.bindBuffer(34962, n.uv),
            f.bufferData(34962, t.uvArray, 35048),
            v.enableAttribute(r.uv),
            f.vertexAttribPointer(r.uv, 2, 5126, !1, 0, 0)),
            t.hasColors && (f.bindBuffer(34962, n.color),
            f.bufferData(34962, t.colorArray, 35048),
            v.enableAttribute(r.color),
            f.vertexAttribPointer(r.color, 3, 5126, !1, 0, 0)),
            v.disableUnusedAttributes(),
            f.drawArrays(4, 0, t.count),
            t.count = 0
        }
        ,
        this.renderBufferDirect = function(t, e, n, r, i, a) {
            var o = i.isMesh && i.matrixWorld.determinant() < 0;
            v.setMaterial(r, o);
            var s = wt(t, e, r, i)
              , c = !1;
            H.geometry === n.id && H.program === s.id && H.wireframe === (!0 === r.wireframe) || (H.geometry = n.id,
            H.program = s.id,
            H.wireframe = !0 === r.wireframe,
            c = !0),
            i.morphTargetInfluences && (R.update(i, n, r, s),
            c = !0);
            var u, h = n.index, l = n.attributes.position, d = 1;
            !0 === r.wireframe && (h = M.getWireframeAttribute(n),
            d = 2);
            var p = P;
            null !== h && (u = _.get(h),
            (p = C).setIndex(u)),
            c && (!function(t, e, n) {
                if (n && n.isInstancedBufferGeometry && !g.isWebGL2 && null === m.get("ANGLE_instanced_arrays"))
                    return void console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                v.initAttributes();
                var r = n.attributes
                  , i = e.getAttributes()
                  , a = t.defaultAttributeValues;
                for (var o in i) {
                    var s = i[o];
                    if (s >= 0) {
                        var c = r[o];
                        if (void 0 !== c) {
                            var u = c.normalized
                              , h = c.itemSize
                              , l = _.get(c);
                            if (void 0 === l)
                                continue;
                            var d = l.buffer
                              , p = l.type
                              , y = l.bytesPerElement;
                            if (c.isInterleavedBufferAttribute) {
                                var x = c.data
                                  , b = x.stride
                                  , w = c.offset;
                                x && x.isInstancedInterleavedBuffer ? (v.enableAttributeAndDivisor(s, x.meshPerAttribute),
                                void 0 === n.maxInstancedCount && (n.maxInstancedCount = x.meshPerAttribute * x.count)) : v.enableAttribute(s),
                                f.bindBuffer(34962, d),
                                f.vertexAttribPointer(s, h, p, u, b * y, w * y)
                            } else
                                c.isInstancedBufferAttribute ? (v.enableAttributeAndDivisor(s, c.meshPerAttribute),
                                void 0 === n.maxInstancedCount && (n.maxInstancedCount = c.meshPerAttribute * c.count)) : v.enableAttribute(s),
                                f.bindBuffer(34962, d),
                                f.vertexAttribPointer(s, h, p, u, 0, 0)
                        } else if (void 0 !== a) {
                            var M = a[o];
                            if (void 0 !== M)
                                switch (M.length) {
                                case 2:
                                    f.vertexAttrib2fv(s, M);
                                    break;
                                case 3:
                                    f.vertexAttrib3fv(s, M);
                                    break;
                                case 4:
                                    f.vertexAttrib4fv(s, M);
                                    break;
                                default:
                                    f.vertexAttrib1fv(s, M)
                                }
                        }
                    }
                }
                v.disableUnusedAttributes()
            }(r, s, n),
            null !== h && f.bindBuffer(34963, u.buffer));
            var y = 1 / 0;
            null !== h ? y = h.count : void 0 !== l && (y = l.count);
            var x = n.drawRange.start * d
              , b = n.drawRange.count * d
              , w = null !== a ? a.start * d : 0
              , E = null !== a ? a.count * d : 1 / 0
              , S = Math.max(x, w)
              , T = Math.min(y, x + b, w + E) - 1
              , A = Math.max(0, T - S + 1);
            if (0 !== A) {
                if (i.isMesh)
                    if (!0 === r.wireframe)
                        v.setLineWidth(r.wireframeLinewidth * at()),
                        p.setMode(1);
                    else
                        switch (i.drawMode) {
                        case Ae:
                            p.setMode(4);
                            break;
                        case Le:
                            p.setMode(5);
                            break;
                        case Re:
                            p.setMode(6)
                        }
                else if (i.isLine) {
                    var L = r.linewidth;
                    void 0 === L && (L = 1),
                    v.setLineWidth(L * at()),
                    i.isLineSegments ? p.setMode(1) : i.isLineLoop ? p.setMode(2) : p.setMode(3)
                } else
                    i.isPoints ? p.setMode(0) : i.isSprite && p.setMode(4);
                n && n.isInstancedBufferGeometry ? n.maxInstancedCount > 0 && p.renderInstances(n, S, A) : p.render(S, A)
            }
        }
        ,
        this.compile = function(t, e) {
            (p = A.get(t, e)).init(),
            t.traverse(function(t) {
                t.isLight && (p.pushLight(t),
                t.castShadow && p.pushShadow(t))
            }),
            p.setupLights(e),
            t.traverse(function(e) {
                if (e.material)
                    if (Array.isArray(e.material))
                        for (var n = 0; n < e.material.length; n++)
                            bt(e.material[n], t.fog, e);
                    else
                        bt(e.material, t.fog, e)
            })
        }
        ;
        var mt = null;
        var gt = new Gr;
        function vt(t, e, n, r) {
            if (!1 !== t.visible) {
                if (t.layers.test(e.layers))
                    if (t.isGroup)
                        n = t.renderOrder;
                    else if (t.isLOD)
                        !0 === t.autoUpdate && t.update(e);
                    else if (t.isLight)
                        p.pushLight(t),
                        t.castShadow && p.pushShadow(t);
                    else if (t.isSprite) {
                        if (!t.frustumCulled || $.intersectsSprite(t)) {
                            r && it.setFromMatrixPosition(t.matrixWorld).applyMatrix4(rt);
                            var i = E.update(t);
                            (a = t.material).visible && d.push(t, i, a, n, it.z, null)
                        }
                    } else if (t.isImmediateRenderObject)
                        r && it.setFromMatrixPosition(t.matrixWorld).applyMatrix4(rt),
                        d.push(t, null, t.material, n, it.z, null);
                    else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.update(),
                    !t.frustumCulled || $.intersectsObject(t))) {
                        r && it.setFromMatrixPosition(t.matrixWorld).applyMatrix4(rt);
                        i = E.update(t);
                        var a = t.material;
                        if (Array.isArray(a))
                            for (var o = i.groups, s = 0, c = o.length; s < c; s++) {
                                var u = o[s]
                                  , h = a[u.materialIndex];
                                h && h.visible && d.push(t, i, h, n, it.z, u)
                            }
                        else
                            a.visible && d.push(t, i, a, n, it.z, null)
                    }
                var l = t.children;
                for (s = 0,
                c = l.length; s < c; s++)
                    vt(l[s], e, n, r)
            }
        }
        function yt(t, e, n, r) {
            for (var i = 0, a = t.length; i < a; i++) {
                var o = t[i]
                  , s = o.object
                  , c = o.geometry
                  , u = void 0 === r ? o.material : r
                  , h = o.group;
                if (n.isArrayCamera) {
                    k = n;
                    for (var l = n.cameras, d = 0, f = l.length; d < f; d++) {
                        var m = l[d];
                        s.layers.test(m.layers) && (v.viewport(j.copy(m.viewport)),
                        p.setupLights(m),
                        xt(s, e, m, c, u, h))
                    }
                } else
                    k = null,
                    xt(s, e, n, c, u, h)
            }
        }
        function xt(t, e, n, r, i, a) {
            if (t.onBeforeRender(I, e, n, r, i, a),
            p = A.get(e, k || n),
            t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld),
            t.normalMatrix.getNormalMatrix(t.modelViewMatrix),
            t.isImmediateRenderObject) {
                v.setMaterial(i);
                var o = wt(n, e.fog, i, t);
                H.geometry = null,
                H.program = null,
                H.wireframe = !1,
                function(t, e) {
                    t.render(function(t) {
                        I.renderBufferImmediate(t, e)
                    })
                }(t, o)
            } else
                I.renderBufferDirect(n, e.fog, r, i, t, a);
            t.onAfterRender(I, e, n, r, i, a),
            p = A.get(e, k || n)
        }
        function bt(t, e, n) {
            var r = b.get(t)
              , i = p.state.lights
              , a = p.state.shadowsArray
              , o = i.state.version
              , s = S.getParameters(t, i.state, a, e, tt.numPlanes, tt.numIntersection, n)
              , c = S.getProgramCode(t, s)
              , u = r.program
              , h = !0;
            if (void 0 === u)
                t.addEventListener("dispose", pt);
            else if (u.code !== c)
                ft(t);
            else if (r.lightsStateVersion !== o)
                r.lightsStateVersion = o,
                h = !1;
            else {
                if (void 0 !== s.shaderID)
                    return;
                h = !1
            }
            if (h) {
                if (s.shaderID) {
                    var l = Ur[s.shaderID];
                    r.shader = {
                        name: t.type,
                        uniforms: xr(l.uniforms),
                        vertexShader: l.vertexShader,
                        fragmentShader: l.fragmentShader
                    }
                } else
                    r.shader = {
                        name: t.type,
                        uniforms: t.uniforms,
                        vertexShader: t.vertexShader,
                        fragmentShader: t.fragmentShader
                    };
                t.onBeforeCompile(r.shader, I),
                c = S.getProgramCode(t, s),
                u = S.acquireProgram(t, r.shader, s, c),
                r.program = u,
                t.program = u
            }
            var d = u.getAttributes();
            if (t.morphTargets) {
                t.numSupportedMorphTargets = 0;
                for (var f = 0; f < I.maxMorphTargets; f++)
                    d["morphTarget" + f] >= 0 && t.numSupportedMorphTargets++
            }
            if (t.morphNormals) {
                t.numSupportedMorphNormals = 0;
                for (f = 0; f < I.maxMorphNormals; f++)
                    d["morphNormal" + f] >= 0 && t.numSupportedMorphNormals++
            }
            var m = r.shader.uniforms;
            (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (r.numClippingPlanes = tt.numPlanes,
            r.numIntersection = tt.numIntersection,
            m.clippingPlanes = tt.uniform),
            r.fog = e,
            r.lightsStateVersion = o,
            t.lights && (m.ambientLightColor.value = i.state.ambient,
            m.lightProbe.value = i.state.probe,
            m.directionalLights.value = i.state.directional,
            m.spotLights.value = i.state.spot,
            m.rectAreaLights.value = i.state.rectArea,
            m.pointLights.value = i.state.point,
            m.hemisphereLights.value = i.state.hemi,
            m.directionalShadowMap.value = i.state.directionalShadowMap,
            m.directionalShadowMatrix.value = i.state.directionalShadowMatrix,
            m.spotShadowMap.value = i.state.spotShadowMap,
            m.spotShadowMatrix.value = i.state.spotShadowMatrix,
            m.pointShadowMap.value = i.state.pointShadowMap,
            m.pointShadowMatrix.value = i.state.pointShadowMatrix);
            var g = r.program.getUniforms()
              , v = Zi.seqWithValue(g.seq, m);
            r.uniformsList = v
        }
        function wt(t, e, n, r) {
            w.resetTextureUnits();
            var i = b.get(n)
              , a = p.state.lights;
            if (et && (nt || t !== V)) {
                var o = t === V && n.id === F;
                tt.setState(n.clippingPlanes, n.clipIntersection, n.clipShadows, t, i, o)
            }
            !1 === n.needsUpdate && (void 0 === i.program ? n.needsUpdate = !0 : n.fog && i.fog !== e ? n.needsUpdate = !0 : n.lights && i.lightsStateVersion !== a.state.version ? n.needsUpdate = !0 : void 0 === i.numClippingPlanes || i.numClippingPlanes === tt.numPlanes && i.numIntersection === tt.numIntersection || (n.needsUpdate = !0)),
            n.needsUpdate && (bt(n, e, r),
            n.needsUpdate = !1);
            var s, c, u = !1, h = !1, l = !1, d = i.program, m = d.getUniforms(), y = i.shader.uniforms;
            if (v.useProgram(d.program) && (u = !0,
            h = !0,
            l = !0),
            n.id !== F && (F = n.id,
            h = !0),
            u || V !== t) {
                if (m.setValue(f, "projectionMatrix", t.projectionMatrix),
                g.logarithmicDepthBuffer && m.setValue(f, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)),
                V !== t && (V = t,
                h = !0,
                l = !0),
                n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshStandardMaterial || n.envMap) {
                    var _ = m.map.cameraPosition;
                    void 0 !== _ && _.setValue(f, it.setFromMatrixPosition(t.matrixWorld))
                }
                (n.isMeshPhongMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.skinning) && m.setValue(f, "viewMatrix", t.matrixWorldInverse)
            }
            if (n.skinning) {
                m.setOptional(f, r, "bindMatrix"),
                m.setOptional(f, r, "bindMatrixInverse");
                var M = r.skeleton;
                if (M) {
                    var E = M.bones;
                    if (g.floatVertexTextures) {
                        if (void 0 === M.boneTexture) {
                            var S = Math.sqrt(4 * E.length);
                            S = Ve.ceilPowerOfTwo(S),
                            S = Math.max(S, 4);
                            var T = new Float32Array(S * S * 4);
                            T.set(M.boneMatrices);
                            var A = new Ir(T,S,S,Vt,Dt);
                            A.needsUpdate = !0,
                            M.boneMatrices = T,
                            M.boneTexture = A,
                            M.boneTextureSize = S
                        }
                        m.setValue(f, "boneTexture", M.boneTexture, w),
                        m.setValue(f, "boneTextureSize", M.boneTextureSize)
                    } else
                        m.setOptional(f, M, "boneMatrices")
                }
            }
            return h && (m.setValue(f, "toneMappingExposure", I.toneMappingExposure),
            m.setValue(f, "toneMappingWhitePoint", I.toneMappingWhitePoint),
            n.lights && (c = l,
            (s = y).ambientLightColor.needsUpdate = c,
            s.lightProbe.needsUpdate = c,
            s.directionalLights.needsUpdate = c,
            s.pointLights.needsUpdate = c,
            s.spotLights.needsUpdate = c,
            s.rectAreaLights.needsUpdate = c,
            s.hemisphereLights.needsUpdate = c),
            e && n.fog && function(t, e) {
                t.fogColor.value.copy(e.color),
                e.isFog ? (t.fogNear.value = e.near,
                t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density)
            }(y, e),
            n.isMeshBasicMaterial ? _t(y, n) : n.isMeshLambertMaterial ? (_t(y, n),
            function(t, e) {
                e.emissiveMap && (t.emissiveMap.value = e.emissiveMap)
            }(y, n)) : n.isMeshPhongMaterial ? (_t(y, n),
            n.isMeshToonMaterial ? function(t, e) {
                Mt(t, e),
                e.gradientMap && (t.gradientMap.value = e.gradientMap)
            }(y, n) : Mt(y, n)) : n.isMeshStandardMaterial ? (_t(y, n),
            n.isMeshPhysicalMaterial ? function(t, e) {
                Et(t, e),
                t.reflectivity.value = e.reflectivity,
                t.clearCoat.value = e.clearCoat,
                t.clearCoatRoughness.value = e.clearCoatRoughness
            }(y, n) : Et(y, n)) : n.isMeshMatcapMaterial ? (_t(y, n),
            function(t, e) {
                e.matcap && (t.matcap.value = e.matcap);
                e.bumpMap && (t.bumpMap.value = e.bumpMap,
                t.bumpScale.value = e.bumpScale,
                e.side === x && (t.bumpScale.value *= -1));
                e.normalMap && (t.normalMap.value = e.normalMap,
                t.normalScale.value.copy(e.normalScale),
                e.side === x && t.normalScale.value.negate());
                e.displacementMap && (t.displacementMap.value = e.displacementMap,
                t.displacementScale.value = e.displacementScale,
                t.displacementBias.value = e.displacementBias)
            }(y, n)) : n.isMeshDepthMaterial ? (_t(y, n),
            function(t, e) {
                e.displacementMap && (t.displacementMap.value = e.displacementMap,
                t.displacementScale.value = e.displacementScale,
                t.displacementBias.value = e.displacementBias)
            }(y, n)) : n.isMeshDistanceMaterial ? (_t(y, n),
            function(t, e) {
                e.displacementMap && (t.displacementMap.value = e.displacementMap,
                t.displacementScale.value = e.displacementScale,
                t.displacementBias.value = e.displacementBias);
                t.referencePosition.value.copy(e.referencePosition),
                t.nearDistance.value = e.nearDistance,
                t.farDistance.value = e.farDistance
            }(y, n)) : n.isMeshNormalMaterial ? (_t(y, n),
            function(t, e) {
                e.bumpMap && (t.bumpMap.value = e.bumpMap,
                t.bumpScale.value = e.bumpScale,
                e.side === x && (t.bumpScale.value *= -1));
                e.normalMap && (t.normalMap.value = e.normalMap,
                t.normalScale.value.copy(e.normalScale),
                e.side === x && t.normalScale.value.negate());
                e.displacementMap && (t.displacementMap.value = e.displacementMap,
                t.displacementScale.value = e.displacementScale,
                t.displacementBias.value = e.displacementBias)
            }(y, n)) : n.isLineBasicMaterial ? (function(t, e) {
                t.diffuse.value.copy(e.color),
                t.opacity.value = e.opacity
            }(y, n),
            n.isLineDashedMaterial && function(t, e) {
                t.dashSize.value = e.dashSize,
                t.totalSize.value = e.dashSize + e.gapSize,
                t.scale.value = e.scale
            }(y, n)) : n.isPointsMaterial ? function(t, e) {
                t.diffuse.value.copy(e.color),
                t.opacity.value = e.opacity,
                t.size.value = e.size * J,
                t.scale.value = .5 * Y,
                t.map.value = e.map,
                null !== e.map && (!0 === e.map.matrixAutoUpdate && e.map.updateMatrix(),
                t.uvTransform.value.copy(e.map.matrix))
            }(y, n) : n.isSpriteMaterial ? function(t, e) {
                t.diffuse.value.copy(e.color),
                t.opacity.value = e.opacity,
                t.rotation.value = e.rotation,
                t.map.value = e.map,
                null !== e.map && (!0 === e.map.matrixAutoUpdate && e.map.updateMatrix(),
                t.uvTransform.value.copy(e.map.matrix))
            }(y, n) : n.isShadowMaterial && (y.color.value.copy(n.color),
            y.opacity.value = n.opacity),
            void 0 !== y.ltc_1 && (y.ltc_1.value = zr.LTC_1),
            void 0 !== y.ltc_2 && (y.ltc_2.value = zr.LTC_2),
            Zi.upload(f, i.uniformsList, y, w)),
            n.isShaderMaterial && !0 === n.uniformsNeedUpdate && (Zi.upload(f, i.uniformsList, y, w),
            n.uniformsNeedUpdate = !1),
            n.isSpriteMaterial && m.setValue(f, "center", r.center),
            m.setValue(f, "modelViewMatrix", r.modelViewMatrix),
            m.setValue(f, "normalMatrix", r.normalMatrix),
            m.setValue(f, "modelMatrix", r.matrixWorld),
            d
        }
        function _t(t, e) {
            var n;
            t.opacity.value = e.opacity,
            e.color && t.diffuse.value.copy(e.color),
            e.emissive && t.emissive.value.copy(e.emissive).multiplyScalar(e.emissiveIntensity),
            e.map && (t.map.value = e.map),
            e.alphaMap && (t.alphaMap.value = e.alphaMap),
            e.specularMap && (t.specularMap.value = e.specularMap),
            e.envMap && (t.envMap.value = e.envMap,
            t.flipEnvMap.value = e.envMap.isCubeTexture ? -1 : 1,
            t.reflectivity.value = e.reflectivity,
            t.refractionRatio.value = e.refractionRatio,
            t.maxMipLevel.value = b.get(e.envMap).__maxMipLevel),
            e.lightMap && (t.lightMap.value = e.lightMap,
            t.lightMapIntensity.value = e.lightMapIntensity),
            e.aoMap && (t.aoMap.value = e.aoMap,
            t.aoMapIntensity.value = e.aoMapIntensity),
            e.map ? n = e.map : e.specularMap ? n = e.specularMap : e.displacementMap ? n = e.displacementMap : e.normalMap ? n = e.normalMap : e.bumpMap ? n = e.bumpMap : e.roughnessMap ? n = e.roughnessMap : e.metalnessMap ? n = e.metalnessMap : e.alphaMap ? n = e.alphaMap : e.emissiveMap && (n = e.emissiveMap),
            void 0 !== n && (n.isWebGLRenderTarget && (n = n.texture),
            !0 === n.matrixAutoUpdate && n.updateMatrix(),
            t.uvTransform.value.copy(n.matrix))
        }
        function Mt(t, e) {
            t.specular.value.copy(e.specular),
            t.shininess.value = Math.max(e.shininess, 1e-4),
            e.emissiveMap && (t.emissiveMap.value = e.emissiveMap),
            e.bumpMap && (t.bumpMap.value = e.bumpMap,
            t.bumpScale.value = e.bumpScale,
            e.side === x && (t.bumpScale.value *= -1)),
            e.normalMap && (t.normalMap.value = e.normalMap,
            t.normalScale.value.copy(e.normalScale),
            e.side === x && t.normalScale.value.negate()),
            e.displacementMap && (t.displacementMap.value = e.displacementMap,
            t.displacementScale.value = e.displacementScale,
            t.displacementBias.value = e.displacementBias)
        }
        function Et(t, e) {
            t.roughness.value = e.roughness,
            t.metalness.value = e.metalness,
            e.roughnessMap && (t.roughnessMap.value = e.roughnessMap),
            e.metalnessMap && (t.metalnessMap.value = e.metalnessMap),
            e.emissiveMap && (t.emissiveMap.value = e.emissiveMap),
            e.bumpMap && (t.bumpMap.value = e.bumpMap,
            t.bumpScale.value = e.bumpScale,
            e.side === x && (t.bumpScale.value *= -1)),
            e.normalMap && (t.normalMap.value = e.normalMap,
            t.normalScale.value.copy(e.normalScale),
            e.side === x && t.normalScale.value.negate()),
            e.displacementMap && (t.displacementMap.value = e.displacementMap,
            t.displacementScale.value = e.displacementScale,
            t.displacementBias.value = e.displacementBias),
            e.envMap && (t.envMapIntensity.value = e.envMapIntensity)
        }
        gt.setAnimationLoop(function(t) {
            ut.isPresenting() || mt && mt(t)
        }),
        "undefined" != typeof window && gt.setContext(window),
        this.setAnimationLoop = function(t) {
            mt = t,
            ut.setAnimationLoop(t),
            gt.start()
        }
        ,
        this.render = function(t, e) {
            var n, r;
            if (void 0 !== arguments[2] && (console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),
            n = arguments[2]),
            void 0 !== arguments[3] && (console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),
            r = arguments[3]),
            e && e.isCamera) {
                if (!D) {
                    H.geometry = null,
                    H.program = null,
                    H.wireframe = !1,
                    F = -1,
                    V = null,
                    !0 === t.autoUpdate && t.updateMatrixWorld(),
                    null === e.parent && e.updateMatrixWorld(),
                    ut.enabled && (e = ut.getCamera(e)),
                    (p = A.get(t, e)).init(),
                    t.onBeforeRender(I, t, e, n || U),
                    rt.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
                    $.setFromMatrix(rt),
                    nt = this.localClippingEnabled,
                    et = tt.init(this.clippingPlanes, nt, e),
                    (d = T.get(t, e)).init(),
                    vt(t, e, 0, I.sortObjects),
                    !0 === I.sortObjects && d.sort(),
                    et && tt.beginShadows();
                    var i = p.state.shadowsArray;
                    ht.render(i, t, e),
                    p.setupLights(e),
                    et && tt.endShadows(),
                    this.info.autoReset && this.info.reset(),
                    void 0 !== n && this.setRenderTarget(n),
                    L.render(d, t, e, r);
                    var a = d.opaque
                      , o = d.transparent;
                    if (t.overrideMaterial) {
                        var s = t.overrideMaterial;
                        a.length && yt(a, t, e, s),
                        o.length && yt(o, t, e, s)
                    } else
                        a.length && yt(a, t, e),
                        o.length && yt(o, t, e);
                    t.onAfterRender(I, t, e),
                    null !== U && (w.updateRenderTargetMipmap(U),
                    w.updateMultisampleRenderTarget(U)),
                    v.buffers.depth.setTest(!0),
                    v.buffers.depth.setMask(!0),
                    v.buffers.color.setMask(!0),
                    v.setPolygonOffset(!1),
                    ut.enabled && ut.submitFrame(),
                    d = null,
                    p = null
                }
            } else
                console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")
        }
        ,
        this.setFramebuffer = function(t) {
            N !== t && f.bindFramebuffer(36160, t),
            N = t
        }
        ,
        this.getActiveCubeFace = function() {
            return B
        }
        ,
        this.getActiveMipMapLevel = function() {
            return z
        }
        ,
        this.getRenderTarget = function() {
            return U
        }
        ,
        this.setRenderTarget = function(t, e, n) {
            U = t,
            B = e,
            z = n,
            t && void 0 === b.get(t).__webglFramebuffer && w.setupRenderTarget(t);
            var r = N
              , i = !1;
            if (t) {
                var a = b.get(t).__webglFramebuffer;
                t.isWebGLRenderTargetCube ? (r = a[e || 0],
                i = !0) : r = t.isWebGLMultisampleRenderTarget ? b.get(t).__webglMultisampledFramebuffer : a,
                j.copy(t.viewport),
                W.copy(t.scissor),
                q = t.scissorTest
            } else
                j.copy(Z).multiplyScalar(J).floor(),
                W.copy(Q).multiplyScalar(J).floor(),
                q = K;
            if (G !== r && (f.bindFramebuffer(36160, r),
            G = r),
            v.viewport(j),
            v.scissor(W),
            v.setScissorTest(q),
            i) {
                var o = b.get(t.texture);
                f.framebufferTexture2D(36160, 36064, 34069 + (e || 0), o.__webglTexture, n || 0)
            }
        }
        ,
        this.readRenderTargetPixels = function(t, e, n, r, i, a, o) {
            if (t && t.isWebGLRenderTarget) {
                var s = b.get(t).__webglFramebuffer;
                if (t.isWebGLRenderTargetCube && void 0 !== o && (s = s[o]),
                s) {
                    var c = !1;
                    s !== G && (f.bindFramebuffer(36160, s),
                    c = !0);
                    try {
                        var u = t.texture
                          , h = u.format
                          , l = u.type;
                        if (h !== Vt && O.convert(h) !== f.getParameter(35739))
                            return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                        if (!(l === Lt || O.convert(l) === f.getParameter(35738) || l === Dt && (g.isWebGL2 || m.get("OES_texture_float") || m.get("WEBGL_color_buffer_float")) || l === Nt && (g.isWebGL2 ? m.get("EXT_color_buffer_float") : m.get("EXT_color_buffer_half_float"))))
                            return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                        36053 === f.checkFramebufferStatus(36160) ? e >= 0 && e <= t.width - r && n >= 0 && n <= t.height - i && f.readPixels(e, n, r, i, O.convert(h), O.convert(l), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
                    } finally {
                        c && f.bindFramebuffer(36160, G)
                    }
                }
            } else
                console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")
        }
        ,
        this.copyFramebufferToTexture = function(t, e, n) {
            var r = e.image.width
              , i = e.image.height
              , a = O.convert(e.format);
            w.setTexture2D(e, 0),
            f.copyTexImage2D(3553, n || 0, a, t.x, t.y, r, i, 0)
        }
        ,
        this.copyTextureToTexture = function(t, e, n, r) {
            var i = e.image.width
              , a = e.image.height
              , o = O.convert(n.format)
              , s = O.convert(n.type);
            w.setTexture2D(n, 0),
            e.isDataTexture ? f.texSubImage2D(3553, r || 0, t.x, t.y, i, a, o, s, e.image.data) : f.texSubImage2D(3553, r || 0, t.x, t.y, o, s, e.image)
        }
        ,
        "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
            detail: this
        }))
    }
    function Fa(t, e) {
        this.name = "",
        this.color = new jn(t),
        this.density = void 0 !== e ? e : 25e-5
    }
    function Ha(t, e, n) {
        this.name = "",
        this.color = new jn(t),
        this.near = void 0 !== e ? e : 1,
        this.far = void 0 !== n ? n : 1e3
    }
    function Va(t, e) {
        this.array = t,
        this.stride = e,
        this.count = void 0 !== t ? t.length / e : 0,
        this.dynamic = !1,
        this.updateRange = {
            offset: 0,
            count: -1
        },
        this.version = 0
    }
    function ka(t, e, n, r) {
        this.data = t,
        this.itemSize = e,
        this.offset = n,
        this.normalized = !0 === r
    }
    function ja(t) {
        Zn.call(this),
        this.type = "SpriteMaterial",
        this.color = new jn(16777215),
        this.map = null,
        this.rotation = 0,
        this.sizeAttenuation = !0,
        this.lights = !1,
        this.transparent = !0,
        this.setValues(t)
    }
    function Wa(t) {
        if (Dn.call(this),
        this.type = "Sprite",
        void 0 === La) {
            La = new pr;
            var e = new Va(new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]),5);
            La.setIndex([0, 1, 2, 0, 2, 3]),
            La.addAttribute("position", new ka(e,3,0,!1)),
            La.addAttribute("uv", new ka(e,2,3,!1))
        }
        this.geometry = La,
        this.material = void 0 !== t ? t : new ja,
        this.center = new ke(.5,.5)
    }
    function qa() {
        Dn.call(this),
        this.type = "LOD",
        Object.defineProperties(this, {
            levels: {
                enumerable: !0,
                value: []
            }
        }),
        this.autoUpdate = !0
    }
    function Xa(t, e) {
        t && t.isGeometry && console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."),
        fr.call(this, t, e),
        this.type = "SkinnedMesh",
        this.bindMode = "attached",
        this.bindMatrix = new hn,
        this.bindMatrixInverse = new hn
    }
    function Ya(t, e) {
        if (t = t || [],
        this.bones = t.slice(0),
        this.boneMatrices = new Float32Array(16 * this.bones.length),
        void 0 === e)
            this.calculateInverses();
        else if (this.bones.length === e.length)
            this.boneInverses = e.slice(0);
        else {
            console.warn("THREE.Skeleton boneInverses is the wrong length."),
            this.boneInverses = [];
            for (var n = 0, r = this.bones.length; n < r; n++)
                this.boneInverses.push(new hn)
        }
    }
    function Ja() {
        Dn.call(this),
        this.type = "Bone"
    }
    function Za(t) {
        Zn.call(this),
        this.type = "LineBasicMaterial",
        this.color = new jn(16777215),
        this.linewidth = 1,
        this.linecap = "round",
        this.linejoin = "round",
        this.lights = !1,
        this.setValues(t)
    }
    function Qa(t, e, n) {
        1 === n && console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."),
        Dn.call(this),
        this.type = "Line",
        this.geometry = void 0 !== t ? t : new pr,
        this.material = void 0 !== e ? e : new Za({
            color: 16777215 * Math.random()
        })
    }
    function Ka(t, e) {
        Qa.call(this, t, e),
        this.type = "LineSegments"
    }
    function $a(t, e) {
        Qa.call(this, t, e),
        this.type = "LineLoop"
    }
    function to(t) {
        Zn.call(this),
        this.type = "PointsMaterial",
        this.color = new jn(16777215),
        this.map = null,
        this.size = 1,
        this.sizeAttenuation = !0,
        this.morphTargets = !1,
        this.lights = !1,
        this.setValues(t)
    }
    function eo(t, e) {
        Dn.call(this),
        this.type = "Points",
        this.geometry = void 0 !== t ? t : new pr,
        this.material = void 0 !== e ? e : new to({
            color: 16777215 * Math.random()
        }),
        this.updateMorphTargets()
    }
    function no(t, e, n, r, i, a, o, s, c) {
        on.call(this, t, e, n, r, i, a, o, s, c),
        this.format = void 0 !== o ? o : Ht,
        this.minFilter = void 0 !== a ? a : St,
        this.magFilter = void 0 !== i ? i : St,
        this.generateMipmaps = !1
    }
    function ro(t, e, n, r, i, a, o, s, c, u, h, l) {
        on.call(this, null, a, o, s, c, u, r, i, h, l),
        this.image = {
            width: e,
            height: n
        },
        this.mipmaps = t,
        this.flipY = !1,
        this.generateMipmaps = !1
    }
    function io(t, e, n, r, i, a, o, s, c) {
        on.call(this, t, e, n, r, i, a, o, s, c),
        this.needsUpdate = !0
    }
    function ao(t, e, n, r, i, a, o, s, c, u) {
        if ((u = void 0 !== u ? u : qt) !== qt && u !== Xt)
            throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        void 0 === n && u === qt && (n = Ct),
        void 0 === n && u === Xt && (n = Gt),
        on.call(this, null, r, i, a, o, s, u, n, c),
        this.image = {
            width: t,
            height: e
        },
        this.magFilter = void 0 !== o ? o : _t,
        this.minFilter = void 0 !== s ? s : _t,
        this.flipY = !1,
        this.generateMipmaps = !1
    }
    function oo(t) {
        pr.call(this),
        this.type = "WireframeGeometry";
        var e, n, r, i, a, o, s, c, u, h, l = [], d = [0, 0], p = {}, f = ["a", "b", "c"];
        if (t && t.isGeometry) {
            var m = t.faces;
            for (e = 0,
            r = m.length; e < r; e++) {
                var g = m[e];
                for (n = 0; n < 3; n++)
                    s = g[f[n]],
                    c = g[f[(n + 1) % 3]],
                    d[0] = Math.min(s, c),
                    d[1] = Math.max(s, c),
                    void 0 === p[u = d[0] + "," + d[1]] && (p[u] = {
                        index1: d[0],
                        index2: d[1]
                    })
            }
            for (u in p)
                o = p[u],
                h = t.vertices[o.index1],
                l.push(h.x, h.y, h.z),
                h = t.vertices[o.index2],
                l.push(h.x, h.y, h.z)
        } else if (t && t.isBufferGeometry) {
            var v, y, x, b, w, _, M;
            if (h = new We,
            null !== t.index) {
                for (v = t.attributes.position,
                y = t.index,
                0 === (x = t.groups).length && (x = [{
                    start: 0,
                    count: y.count,
                    materialIndex: 0
                }]),
                i = 0,
                a = x.length; i < a; ++i)
                    for (e = w = (b = x[i]).start,
                    r = w + b.count; e < r; e += 3)
                        for (n = 0; n < 3; n++)
                            s = y.getX(e + n),
                            c = y.getX(e + (n + 1) % 3),
                            d[0] = Math.min(s, c),
                            d[1] = Math.max(s, c),
                            void 0 === p[u = d[0] + "," + d[1]] && (p[u] = {
                                index1: d[0],
                                index2: d[1]
                            });
                for (u in p)
                    o = p[u],
                    h.fromBufferAttribute(v, o.index1),
                    l.push(h.x, h.y, h.z),
                    h.fromBufferAttribute(v, o.index2),
                    l.push(h.x, h.y, h.z)
            } else
                for (e = 0,
                r = (v = t.attributes.position).count / 3; e < r; e++)
                    for (n = 0; n < 3; n++)
                        _ = 3 * e + n,
                        h.fromBufferAttribute(v, _),
                        l.push(h.x, h.y, h.z),
                        M = 3 * e + (n + 1) % 3,
                        h.fromBufferAttribute(v, M),
                        l.push(h.x, h.y, h.z)
        }
        this.addAttribute("position", new or(l,3))
    }
    function so(t, e, n) {
        gr.call(this),
        this.type = "ParametricGeometry",
        this.parameters = {
            func: t,
            slices: e,
            stacks: n
        },
        this.fromBufferGeometry(new co(t,e,n)),
        this.mergeVertices()
    }
    function co(t, e, n) {
        pr.call(this),
        this.type = "ParametricBufferGeometry",
        this.parameters = {
            func: t,
            slices: e,
            stacks: n
        };
        var r, i, a = [], o = [], s = [], c = [], u = new We, h = new We, l = new We, d = new We, p = new We;
        t.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
        var f = e + 1;
        for (r = 0; r <= n; r++) {
            var m = r / n;
            for (i = 0; i <= e; i++) {
                var g = i / e;
                t(g, m, h),
                o.push(h.x, h.y, h.z),
                g - 1e-5 >= 0 ? (t(g - 1e-5, m, l),
                d.subVectors(h, l)) : (t(g + 1e-5, m, l),
                d.subVectors(l, h)),
                m - 1e-5 >= 0 ? (t(g, m - 1e-5, l),
                p.subVectors(h, l)) : (t(g, m + 1e-5, l),
                p.subVectors(l, h)),
                u.crossVectors(d, p).normalize(),
                s.push(u.x, u.y, u.z),
                c.push(g, m)
            }
        }
        for (r = 0; r < n; r++)
            for (i = 0; i < e; i++) {
                var v = r * f + i
                  , y = r * f + i + 1
                  , x = (r + 1) * f + i + 1
                  , b = (r + 1) * f + i;
                a.push(v, y, b),
                a.push(y, x, b)
            }
        this.setIndex(a),
        this.addAttribute("position", new or(o,3)),
        this.addAttribute("normal", new or(s,3)),
        this.addAttribute("uv", new or(c,2))
    }
    function uo(t, e, n, r) {
        gr.call(this),
        this.type = "PolyhedronGeometry",
        this.parameters = {
            vertices: t,
            indices: e,
            radius: n,
            detail: r
        },
        this.fromBufferGeometry(new ho(t,e,n,r)),
        this.mergeVertices()
    }
    function ho(t, e, n, r) {
        pr.call(this),
        this.type = "PolyhedronBufferGeometry",
        this.parameters = {
            vertices: t,
            indices: e,
            radius: n,
            detail: r
        },
        n = n || 1;
        var i = []
          , a = [];
        function o(t, e, n, r) {
            var i, a, o = Math.pow(2, r), c = [];
            for (i = 0; i <= o; i++) {
                c[i] = [];
                var u = t.clone().lerp(n, i / o)
                  , h = e.clone().lerp(n, i / o)
                  , l = o - i;
                for (a = 0; a <= l; a++)
                    c[i][a] = 0 === a && i === o ? u : u.clone().lerp(h, a / l)
            }
            for (i = 0; i < o; i++)
                for (a = 0; a < 2 * (o - i) - 1; a++) {
                    var d = Math.floor(a / 2);
                    a % 2 == 0 ? (s(c[i][d + 1]),
                    s(c[i + 1][d]),
                    s(c[i][d])) : (s(c[i][d + 1]),
                    s(c[i + 1][d + 1]),
                    s(c[i + 1][d]))
                }
        }
        function s(t) {
            i.push(t.x, t.y, t.z)
        }
        function c(e, n) {
            var r = 3 * e;
            n.x = t[r + 0],
            n.y = t[r + 1],
            n.z = t[r + 2]
        }
        function u(t, e, n, r) {
            r < 0 && 1 === t.x && (a[e] = t.x - 1),
            0 === n.x && 0 === n.z && (a[e] = r / 2 / Math.PI + .5)
        }
        function h(t) {
            return Math.atan2(t.z, -t.x)
        }
        function l(t) {
            return Math.atan2(-t.y, Math.sqrt(t.x * t.x + t.z * t.z))
        }
        !function(t) {
            for (var n = new We, r = new We, i = new We, a = 0; a < e.length; a += 3)
                c(e[a + 0], n),
                c(e[a + 1], r),
                c(e[a + 2], i),
                o(n, r, i, t)
        }(r = r || 0),
        function(t) {
            for (var e = new We, n = 0; n < i.length; n += 3)
                e.x = i[n + 0],
                e.y = i[n + 1],
                e.z = i[n + 2],
                e.normalize().multiplyScalar(t),
                i[n + 0] = e.x,
                i[n + 1] = e.y,
                i[n + 2] = e.z
        }(n),
        function() {
            for (var t = new We, e = 0; e < i.length; e += 3) {
                t.x = i[e + 0],
                t.y = i[e + 1],
                t.z = i[e + 2];
                var n = h(t) / 2 / Math.PI + .5
                  , r = l(t) / Math.PI + .5;
                a.push(n, 1 - r)
            }
            (function() {
                for (var t = new We, e = new We, n = new We, r = new We, o = new ke, s = new ke, c = new ke, l = 0, d = 0; l < i.length; l += 9,
                d += 6) {
                    t.set(i[l + 0], i[l + 1], i[l + 2]),
                    e.set(i[l + 3], i[l + 4], i[l + 5]),
                    n.set(i[l + 6], i[l + 7], i[l + 8]),
                    o.set(a[d + 0], a[d + 1]),
                    s.set(a[d + 2], a[d + 3]),
                    c.set(a[d + 4], a[d + 5]),
                    r.copy(t).add(e).add(n).divideScalar(3);
                    var p = h(r);
                    u(o, d + 0, t, p),
                    u(s, d + 2, e, p),
                    u(c, d + 4, n, p)
                }
            }
            )(),
            function() {
                for (var t = 0; t < a.length; t += 6) {
                    var e = a[t + 0]
                      , n = a[t + 2]
                      , r = a[t + 4]
                      , i = Math.max(e, n, r)
                      , o = Math.min(e, n, r);
                    i > .9 && o < .1 && (e < .2 && (a[t + 0] += 1),
                    n < .2 && (a[t + 2] += 1),
                    r < .2 && (a[t + 4] += 1))
                }
            }()
        }(),
        this.addAttribute("position", new or(i,3)),
        this.addAttribute("normal", new or(i.slice(),3)),
        this.addAttribute("uv", new or(a,2)),
        0 === r ? this.computeVertexNormals() : this.normalizeNormals()
    }
    function lo(t, e) {
        gr.call(this),
        this.type = "TetrahedronGeometry",
        this.parameters = {
            radius: t,
            detail: e
        },
        this.fromBufferGeometry(new po(t,e)),
        this.mergeVertices()
    }
    function po(t, e) {
        ho.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t, e),
        this.type = "TetrahedronBufferGeometry",
        this.parameters = {
            radius: t,
            detail: e
        }
    }
    function fo(t, e) {
        gr.call(this),
        this.type = "OctahedronGeometry",
        this.parameters = {
            radius: t,
            detail: e
        },
        this.fromBufferGeometry(new mo(t,e)),
        this.mergeVertices()
    }
    function mo(t, e) {
        ho.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t, e),
        this.type = "OctahedronBufferGeometry",
        this.parameters = {
            radius: t,
            detail: e
        }
    }
    function go(t, e) {
        gr.call(this),
        this.type = "IcosahedronGeometry",
        this.parameters = {
            radius: t,
            detail: e
        },
        this.fromBufferGeometry(new vo(t,e)),
        this.mergeVertices()
    }
    function vo(t, e) {
        var n = (1 + Math.sqrt(5)) / 2
          , r = [-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1];
        ho.call(this, r, [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t, e),
        this.type = "IcosahedronBufferGeometry",
        this.parameters = {
            radius: t,
            detail: e
        }
    }
    function yo(t, e) {
        gr.call(this),
        this.type = "DodecahedronGeometry",
        this.parameters = {
            radius: t,
            detail: e
        },
        this.fromBufferGeometry(new xo(t,e)),
        this.mergeVertices()
    }
    function xo(t, e) {
        var n = (1 + Math.sqrt(5)) / 2
          , r = 1 / n
          , i = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -r, -n, 0, -r, n, 0, r, -n, 0, r, n, -r, -n, 0, -r, n, 0, r, -n, 0, r, n, 0, -n, 0, -r, n, 0, -r, -n, 0, r, n, 0, r];
        ho.call(this, i, [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t, e),
        this.type = "DodecahedronBufferGeometry",
        this.parameters = {
            radius: t,
            detail: e
        }
    }
    function bo(t, e, n, r, i, a) {
        gr.call(this),
        this.type = "TubeGeometry",
        this.parameters = {
            path: t,
            tubularSegments: e,
            radius: n,
            radialSegments: r,
            closed: i
        },
        void 0 !== a && console.warn("THREE.TubeGeometry: taper has been removed.");
        var o = new wo(t,e,n,r,i);
        this.tangents = o.tangents,
        this.normals = o.normals,
        this.binormals = o.binormals,
        this.fromBufferGeometry(o),
        this.mergeVertices()
    }
    function wo(t, e, n, r, i) {
        pr.call(this),
        this.type = "TubeBufferGeometry",
        this.parameters = {
            path: t,
            tubularSegments: e,
            radius: n,
            radialSegments: r,
            closed: i
        },
        e = e || 64,
        n = n || 1,
        r = r || 8,
        i = i || !1;
        var a = t.computeFrenetFrames(e, i);
        this.tangents = a.tangents,
        this.normals = a.normals,
        this.binormals = a.binormals;
        var o, s, c = new We, u = new We, h = new ke, l = new We, d = [], p = [], f = [], m = [];
        function g(i) {
            l = t.getPointAt(i / e, l);
            var o = a.normals[i]
              , h = a.binormals[i];
            for (s = 0; s <= r; s++) {
                var f = s / r * Math.PI * 2
                  , m = Math.sin(f)
                  , g = -Math.cos(f);
                u.x = g * o.x + m * h.x,
                u.y = g * o.y + m * h.y,
                u.z = g * o.z + m * h.z,
                u.normalize(),
                p.push(u.x, u.y, u.z),
                c.x = l.x + n * u.x,
                c.y = l.y + n * u.y,
                c.z = l.z + n * u.z,
                d.push(c.x, c.y, c.z)
            }
        }
        !function() {
            for (o = 0; o < e; o++)
                g(o);
            g(!1 === i ? e : 0),
            function() {
                for (o = 0; o <= e; o++)
                    for (s = 0; s <= r; s++)
                        h.x = o / e,
                        h.y = s / r,
                        f.push(h.x, h.y)
            }(),
            function() {
                for (s = 1; s <= e; s++)
                    for (o = 1; o <= r; o++) {
                        var t = (r + 1) * (s - 1) + (o - 1)
                          , n = (r + 1) * s + (o - 1)
                          , i = (r + 1) * s + o
                          , a = (r + 1) * (s - 1) + o;
                        m.push(t, n, a),
                        m.push(n, i, a)
                    }
            }()
        }(),
        this.setIndex(m),
        this.addAttribute("position", new or(d,3)),
        this.addAttribute("normal", new or(p,3)),
        this.addAttribute("uv", new or(f,2))
    }
    function _o(t, e, n, r, i, a, o) {
        gr.call(this),
        this.type = "TorusKnotGeometry",
        this.parameters = {
            radius: t,
            tube: e,
            tubularSegments: n,
            radialSegments: r,
            p: i,
            q: a
        },
        void 0 !== o && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."),
        this.fromBufferGeometry(new Mo(t,e,n,r,i,a)),
        this.mergeVertices()
    }
    function Mo(t, e, n, r, i, a) {
        pr.call(this),
        this.type = "TorusKnotBufferGeometry",
        this.parameters = {
            radius: t,
            tube: e,
            tubularSegments: n,
            radialSegments: r,
            p: i,
            q: a
        },
        t = t || 1,
        e = e || .4,
        n = Math.floor(n) || 64,
        r = Math.floor(r) || 8,
        i = i || 2,
        a = a || 3;
        var o, s, c = [], u = [], h = [], l = [], d = new We, p = new We, f = new We, m = new We, g = new We, v = new We, y = new We;
        for (o = 0; o <= n; ++o) {
            var x = o / n * i * Math.PI * 2;
            for (A(x, i, a, t, f),
            A(x + .01, i, a, t, m),
            v.subVectors(m, f),
            y.addVectors(m, f),
            g.crossVectors(v, y),
            y.crossVectors(g, v),
            g.normalize(),
            y.normalize(),
            s = 0; s <= r; ++s) {
                var b = s / r * Math.PI * 2
                  , w = -e * Math.cos(b)
                  , _ = e * Math.sin(b);
                d.x = f.x + (w * y.x + _ * g.x),
                d.y = f.y + (w * y.y + _ * g.y),
                d.z = f.z + (w * y.z + _ * g.z),
                u.push(d.x, d.y, d.z),
                p.subVectors(d, f).normalize(),
                h.push(p.x, p.y, p.z),
                l.push(o / n),
                l.push(s / r)
            }
        }
        for (s = 1; s <= n; s++)
            for (o = 1; o <= r; o++) {
                var M = (r + 1) * (s - 1) + (o - 1)
                  , E = (r + 1) * s + (o - 1)
                  , S = (r + 1) * s + o
                  , T = (r + 1) * (s - 1) + o;
                c.push(M, E, T),
                c.push(E, S, T)
            }
        function A(t, e, n, r, i) {
            var a = Math.cos(t)
              , o = Math.sin(t)
              , s = n / e * t
              , c = Math.cos(s);
            i.x = r * (2 + c) * .5 * a,
            i.y = r * (2 + c) * o * .5,
            i.z = r * Math.sin(s) * .5
        }
        this.setIndex(c),
        this.addAttribute("position", new or(u,3)),
        this.addAttribute("normal", new or(h,3)),
        this.addAttribute("uv", new or(l,2))
    }
    function Eo(t, e, n, r, i) {
        gr.call(this),
        this.type = "TorusGeometry",
        this.parameters = {
            radius: t,
            tube: e,
            radialSegments: n,
            tubularSegments: r,
            arc: i
        },
        this.fromBufferGeometry(new So(t,e,n,r,i)),
        this.mergeVertices()
    }
    function So(t, e, n, r, i) {
        pr.call(this),
        this.type = "TorusBufferGeometry",
        this.parameters = {
            radius: t,
            tube: e,
            radialSegments: n,
            tubularSegments: r,
            arc: i
        },
        t = t || 1,
        e = e || .4,
        n = Math.floor(n) || 8,
        r = Math.floor(r) || 6,
        i = i || 2 * Math.PI;
        var a, o, s = [], c = [], u = [], h = [], l = new We, d = new We, p = new We;
        for (a = 0; a <= n; a++)
            for (o = 0; o <= r; o++) {
                var f = o / r * i
                  , m = a / n * Math.PI * 2;
                d.x = (t + e * Math.cos(m)) * Math.cos(f),
                d.y = (t + e * Math.cos(m)) * Math.sin(f),
                d.z = e * Math.sin(m),
                c.push(d.x, d.y, d.z),
                l.x = t * Math.cos(f),
                l.y = t * Math.sin(f),
                p.subVectors(d, l).normalize(),
                u.push(p.x, p.y, p.z),
                h.push(o / r),
                h.push(a / n)
            }
        for (a = 1; a <= n; a++)
            for (o = 1; o <= r; o++) {
                var g = (r + 1) * a + o - 1
                  , v = (r + 1) * (a - 1) + o - 1
                  , y = (r + 1) * (a - 1) + o
                  , x = (r + 1) * a + o;
                s.push(g, v, x),
                s.push(v, y, x)
            }
        this.setIndex(s),
        this.addAttribute("position", new or(c,3)),
        this.addAttribute("normal", new or(u,3)),
        this.addAttribute("uv", new or(h,2))
    }
    Object.assign(za.prototype, r.prototype),
    Object.assign(Ua.prototype, r.prototype),
    Object.assign(Fa.prototype, {
        isFogExp2: !0,
        clone: function() {
            return new Fa(this.color,this.density)
        },
        toJSON: function() {
            return {
                type: "FogExp2",
                color: this.color.getHex(),
                density: this.density
            }
        }
    }),
    Object.assign(Ha.prototype, {
        isFog: !0,
        clone: function() {
            return new Ha(this.color,this.near,this.far)
        },
        toJSON: function() {
            return {
                type: "Fog",
                color: this.color.getHex(),
                near: this.near,
                far: this.far
            }
        }
    }),
    Object.defineProperty(Va.prototype, "needsUpdate", {
        set: function(t) {
            !0 === t && this.version++
        }
    }),
    Object.assign(Va.prototype, {
        isInterleavedBuffer: !0,
        onUploadCallback: function() {},
        setArray: function(t) {
            if (Array.isArray(t))
                throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            return this.count = void 0 !== t ? t.length / this.stride : 0,
            this.array = t,
            this
        },
        setDynamic: function(t) {
            return this.dynamic = t,
            this
        },
        copy: function(t) {
            return this.array = new t.array.constructor(t.array),
            this.count = t.count,
            this.stride = t.stride,
            this.dynamic = t.dynamic,
            this
        },
        copyAt: function(t, e, n) {
            t *= this.stride,
            n *= e.stride;
            for (var r = 0, i = this.stride; r < i; r++)
                this.array[t + r] = e.array[n + r];
            return this
        },
        set: function(t, e) {
            return void 0 === e && (e = 0),
            this.array.set(t, e),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        onUpload: function(t) {
            return this.onUploadCallback = t,
            this
        }
    }),
    Object.defineProperties(ka.prototype, {
        count: {
            get: function() {
                return this.data.count
            }
        },
        array: {
            get: function() {
                return this.data.array
            }
        }
    }),
    Object.assign(ka.prototype, {
        isInterleavedBufferAttribute: !0,
        setX: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset] = e,
            this
        },
        setY: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 1] = e,
            this
        },
        setZ: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 2] = e,
            this
        },
        setW: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 3] = e,
            this
        },
        getX: function(t) {
            return this.data.array[t * this.data.stride + this.offset]
        },
        getY: function(t) {
            return this.data.array[t * this.data.stride + this.offset + 1]
        },
        getZ: function(t) {
            return this.data.array[t * this.data.stride + this.offset + 2]
        },
        getW: function(t) {
            return this.data.array[t * this.data.stride + this.offset + 3]
        },
        setXY: function(t, e, n) {
            return t = t * this.data.stride + this.offset,
            this.data.array[t + 0] = e,
            this.data.array[t + 1] = n,
            this
        },
        setXYZ: function(t, e, n, r) {
            return t = t * this.data.stride + this.offset,
            this.data.array[t + 0] = e,
            this.data.array[t + 1] = n,
            this.data.array[t + 2] = r,
            this
        },
        setXYZW: function(t, e, n, r, i) {
            return t = t * this.data.stride + this.offset,
            this.data.array[t + 0] = e,
            this.data.array[t + 1] = n,
            this.data.array[t + 2] = r,
            this.data.array[t + 3] = i,
            this
        }
    }),
    ja.prototype = Object.create(Zn.prototype),
    ja.prototype.constructor = ja,
    ja.prototype.isSpriteMaterial = !0,
    ja.prototype.copy = function(t) {
        return Zn.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this.map = t.map,
        this.rotation = t.rotation,
        this.sizeAttenuation = t.sizeAttenuation,
        this
    }
    ,
    Wa.prototype = Object.assign(Object.create(Dn.prototype), {
        constructor: Wa,
        isSprite: !0,
        raycast: function() {
            var t = new We
              , e = new We
              , n = new We
              , r = new ke
              , i = new ke
              , a = new hn
              , o = new We
              , s = new We
              , c = new We
              , u = new ke
              , h = new ke
              , l = new ke;
            function d(t, e, n, o, s, c) {
                r.subVectors(t, n).addScalar(.5).multiply(o),
                void 0 !== s ? (i.x = c * r.x - s * r.y,
                i.y = s * r.x + c * r.y) : i.copy(r),
                t.copy(e),
                t.x += i.x,
                t.y += i.y,
                t.applyMatrix4(a)
            }
            return function(r, i) {
                e.setFromMatrixScale(this.matrixWorld),
                a.copy(r._camera.matrixWorld),
                this.modelViewMatrix.multiplyMatrices(r._camera.matrixWorldInverse, this.matrixWorld),
                n.setFromMatrixPosition(this.modelViewMatrix),
                r._camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && e.multiplyScalar(-n.z);
                var p, f, m = this.material.rotation;
                0 !== m && (f = Math.cos(m),
                p = Math.sin(m));
                var g = this.center;
                d(o.set(-.5, -.5, 0), n, g, e, p, f),
                d(s.set(.5, -.5, 0), n, g, e, p, f),
                d(c.set(.5, .5, 0), n, g, e, p, f),
                u.set(0, 0),
                h.set(1, 0),
                l.set(1, 1);
                var v = r.ray.intersectTriangle(o, s, c, !1, t);
                if (null !== v || (d(s.set(-.5, .5, 0), n, g, e, p, f),
                h.set(0, 1),
                null !== (v = r.ray.intersectTriangle(o, c, s, !1, t)))) {
                    var y = r.ray.origin.distanceTo(t);
                    y < r.near || y > r.far || i.push({
                        distance: y,
                        point: t.clone(),
                        uv: Gn.getUV(t, o, s, c, u, h, l, new ke),
                        face: null,
                        object: this
                    })
                }
            }
        }(),
        clone: function() {
            return new this.constructor(this.material).copy(this)
        },
        copy: function(t) {
            return Dn.prototype.copy.call(this, t),
            void 0 !== t.center && this.center.copy(t.center),
            this
        }
    }),
    qa.prototype = Object.assign(Object.create(Dn.prototype), {
        constructor: qa,
        isLOD: !0,
        copy: function(t) {
            Dn.prototype.copy.call(this, t, !1);
            for (var e = t.levels, n = 0, r = e.length; n < r; n++) {
                var i = e[n];
                this.addLevel(i.object.clone(), i.distance)
            }
            return this
        },
        addLevel: function(t, e) {
            void 0 === e && (e = 0),
            e = Math.abs(e);
            for (var n = this.levels, r = 0; r < n.length && !(e < n[r].distance); r++)
                ;
            return n.splice(r, 0, {
                distance: e,
                object: t
            }),
            this.add(t),
            this
        },
        getObjectForDistance: function(t) {
            for (var e = this.levels, n = 1, r = e.length; n < r && !(t < e[n].distance); n++)
                ;
            return e[n - 1].object
        },
        raycast: (Ra = new We,
        function(t, e) {
            Ra.setFromMatrixPosition(this.matrixWorld);
            var n = t.ray.origin.distanceTo(Ra);
            this.getObjectForDistance(n).raycast(t, e)
        }
        ),
        update: function() {
            var t = new We
              , e = new We;
            return function(n) {
                var r = this.levels;
                if (r.length > 1) {
                    t.setFromMatrixPosition(n.matrixWorld),
                    e.setFromMatrixPosition(this.matrixWorld);
                    var i = t.distanceTo(e);
                    r[0].object.visible = !0;
                    for (var a = 1, o = r.length; a < o && i >= r[a].distance; a++)
                        r[a - 1].object.visible = !1,
                        r[a].object.visible = !0;
                    for (; a < o; a++)
                        r[a].object.visible = !1
                }
            }
        }(),
        toJSON: function(t) {
            var e = Dn.prototype.toJSON.call(this, t);
            e.object.levels = [];
            for (var n = this.levels, r = 0, i = n.length; r < i; r++) {
                var a = n[r];
                e.object.levels.push({
                    object: a.object.uuid,
                    distance: a.distance
                })
            }
            return e
        }
    }),
    Xa.prototype = Object.assign(Object.create(fr.prototype), {
        constructor: Xa,
        isSkinnedMesh: !0,
        bind: function(t, e) {
            this.skeleton = t,
            void 0 === e && (this.updateMatrixWorld(!0),
            this.skeleton.calculateInverses(),
            e = this.matrixWorld),
            this.bindMatrix.copy(e),
            this.bindMatrixInverse.getInverse(e)
        },
        pose: function() {
            this.skeleton.pose()
        },
        normalizeSkinWeights: function() {
            for (var t = new sn, e = this.geometry.attributes.skinWeight, n = 0, r = e.count; n < r; n++) {
                t.x = e.getX(n),
                t.y = e.getY(n),
                t.z = e.getZ(n),
                t.w = e.getW(n);
                var i = 1 / t.manhattanLength();
                i !== 1 / 0 ? t.multiplyScalar(i) : t.set(1, 0, 0, 0),
                e.setXYZW(n, t.x, t.y, t.z, t.w)
            }
        },
        updateMatrixWorld: function(t) {
            fr.prototype.updateMatrixWorld.call(this, t),
            "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
        },
        clone: function() {
            return new this.constructor(this.geometry,this.material).copy(this)
        }
    }),
    Object.assign(Ya.prototype, {
        calculateInverses: function() {
            this.boneInverses = [];
            for (var t = 0, e = this.bones.length; t < e; t++) {
                var n = new hn;
                this.bones[t] && n.getInverse(this.bones[t].matrixWorld),
                this.boneInverses.push(n)
            }
        },
        pose: function() {
            var t, e, n;
            for (e = 0,
            n = this.bones.length; e < n; e++)
                (t = this.bones[e]) && t.matrixWorld.getInverse(this.boneInverses[e]);
            for (e = 0,
            n = this.bones.length; e < n; e++)
                (t = this.bones[e]) && (t.parent && t.parent.isBone ? (t.matrix.getInverse(t.parent.matrixWorld),
                t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld),
                t.matrix.decompose(t.position, t.quaternion, t.scale))
        },
        update: (Pa = new hn,
        Ca = new hn,
        function() {
            for (var t = this.bones, e = this.boneInverses, n = this.boneMatrices, r = this.boneTexture, i = 0, a = t.length; i < a; i++) {
                var o = t[i] ? t[i].matrixWorld : Ca;
                Pa.multiplyMatrices(o, e[i]),
                Pa.toArray(n, 16 * i)
            }
            void 0 !== r && (r.needsUpdate = !0)
        }
        ),
        clone: function() {
            return new Ya(this.bones,this.boneInverses)
        },
        getBoneByName: function(t) {
            for (var e = 0, n = this.bones.length; e < n; e++) {
                var r = this.bones[e];
                if (r.name === t)
                    return r
            }
        }
    }),
    Ja.prototype = Object.assign(Object.create(Dn.prototype), {
        constructor: Ja,
        isBone: !0
    }),
    Za.prototype = Object.create(Zn.prototype),
    Za.prototype.constructor = Za,
    Za.prototype.isLineBasicMaterial = !0,
    Za.prototype.copy = function(t) {
        return Zn.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this.linewidth = t.linewidth,
        this.linecap = t.linecap,
        this.linejoin = t.linejoin,
        this
    }
    ,
    Qa.prototype = Object.assign(Object.create(Dn.prototype), {
        constructor: Qa,
        isLine: !0,
        computeLineDistances: (Oa = new We,
        Ia = new We,
        function() {
            var t = this.geometry;
            if (t.isBufferGeometry)
                if (null === t.index) {
                    for (var e = t.attributes.position, n = [0], r = 1, i = e.count; r < i; r++)
                        Oa.fromBufferAttribute(e, r - 1),
                        Ia.fromBufferAttribute(e, r),
                        n[r] = n[r - 1],
                        n[r] += Oa.distanceTo(Ia);
                    t.addAttribute("lineDistance", new or(n,1))
                } else
                    console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            else if (t.isGeometry) {
                var a = t.vertices;
                for ((n = t.lineDistances)[0] = 0,
                r = 1,
                i = a.length; r < i; r++)
                    n[r] = n[r - 1],
                    n[r] += a[r - 1].distanceTo(a[r])
            }
            return this
        }
        ),
        raycast: function() {
            var t = new hn
              , e = new Un
              , n = new zn;
            return function(r, i) {
                var a = r.linePrecision
                  , o = this.geometry
                  , s = this.matrixWorld;
                if (null === o.boundingSphere && o.computeBoundingSphere(),
                n.copy(o.boundingSphere),
                n.applyMatrix4(s),
                n.radius += a,
                !1 !== r.ray.intersectsSphere(n)) {
                    t.getInverse(s),
                    e.copy(r.ray).applyMatrix4(t);
                    var c = a / ((this.scale.x + this.scale.y + this.scale.z) / 3)
                      , u = c * c
                      , h = new We
                      , l = new We
                      , d = new We
                      , p = new We
                      , f = this && this.isLineSegments ? 2 : 1;
                    if (o.isBufferGeometry) {
                        var m = o.index
                          , g = o.attributes.position.array;
                        if (null !== m)
                            for (var v = m.array, y = 0, x = v.length - 1; y < x; y += f) {
                                var b = v[y]
                                  , w = v[y + 1];
                                if (h.fromArray(g, 3 * b),
                                l.fromArray(g, 3 * w),
                                !(e.distanceSqToSegment(h, l, p, d) > u))
                                    p.applyMatrix4(this.matrixWorld),
                                    (E = r.ray.origin.distanceTo(p)) < r.near || E > r.far || i.push({
                                        distance: E,
                                        point: d.clone().applyMatrix4(this.matrixWorld),
                                        index: y,
                                        face: null,
                                        faceIndex: null,
                                        object: this
                                    })
                            }
                        else
                            for (y = 0,
                            x = g.length / 3 - 1; y < x; y += f) {
                                if (h.fromArray(g, 3 * y),
                                l.fromArray(g, 3 * y + 3),
                                !(e.distanceSqToSegment(h, l, p, d) > u))
                                    p.applyMatrix4(this.matrixWorld),
                                    (E = r.ray.origin.distanceTo(p)) < r.near || E > r.far || i.push({
                                        distance: E,
                                        point: d.clone().applyMatrix4(this.matrixWorld),
                                        index: y,
                                        face: null,
                                        faceIndex: null,
                                        object: this
                                    })
                            }
                    } else if (o.isGeometry) {
                        var _ = o.vertices
                          , M = _.length;
                        for (y = 0; y < M - 1; y += f) {
                            var E;
                            if (!(e.distanceSqToSegment(_[y], _[y + 1], p, d) > u))
                                p.applyMatrix4(this.matrixWorld),
                                (E = r.ray.origin.distanceTo(p)) < r.near || E > r.far || i.push({
                                    distance: E,
                                    point: d.clone().applyMatrix4(this.matrixWorld),
                                    index: y,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                })
                        }
                    }
                }
            }
        }(),
        clone: function() {
            return new this.constructor(this.geometry,this.material).copy(this)
        }
    }),
    Ka.prototype = Object.assign(Object.create(Qa.prototype), {
        constructor: Ka,
        isLineSegments: !0,
        computeLineDistances: function() {
            var t = new We
              , e = new We;
            return function() {
                var n = this.geometry;
                if (n.isBufferGeometry)
                    if (null === n.index) {
                        for (var r = n.attributes.position, i = [], a = 0, o = r.count; a < o; a += 2)
                            t.fromBufferAttribute(r, a),
                            e.fromBufferAttribute(r, a + 1),
                            i[a] = 0 === a ? 0 : i[a - 1],
                            i[a + 1] = i[a] + t.distanceTo(e);
                        n.addAttribute("lineDistance", new or(i,1))
                    } else
                        console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
                else if (n.isGeometry) {
                    var s = n.vertices;
                    for (i = n.lineDistances,
                    a = 0,
                    o = s.length; a < o; a += 2)
                        t.copy(s[a]),
                        e.copy(s[a + 1]),
                        i[a] = 0 === a ? 0 : i[a - 1],
                        i[a + 1] = i[a] + t.distanceTo(e)
                }
                return this
            }
        }()
    }),
    $a.prototype = Object.assign(Object.create(Qa.prototype), {
        constructor: $a,
        isLineLoop: !0
    }),
    to.prototype = Object.create(Zn.prototype),
    to.prototype.constructor = to,
    to.prototype.isPointsMaterial = !0,
    to.prototype.copy = function(t) {
        return Zn.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this.map = t.map,
        this.size = t.size,
        this.sizeAttenuation = t.sizeAttenuation,
        this.morphTargets = t.morphTargets,
        this
    }
    ,
    eo.prototype = Object.assign(Object.create(Dn.prototype), {
        constructor: eo,
        isPoints: !0,
        raycast: function() {
            var t = new hn
              , e = new Un
              , n = new zn;
            return function(r, i) {
                var a = this
                  , o = this.geometry
                  , s = this.matrixWorld
                  , c = r.params.Points.threshold;
                if (null === o.boundingSphere && o.computeBoundingSphere(),
                n.copy(o.boundingSphere),
                n.applyMatrix4(s),
                n.radius += c,
                !1 !== r.ray.intersectsSphere(n)) {
                    t.getInverse(s),
                    e.copy(r.ray).applyMatrix4(t);
                    var u = c / ((this.scale.x + this.scale.y + this.scale.z) / 3)
                      , h = u * u
                      , l = new We
                      , d = new We;
                    if (o.isBufferGeometry) {
                        var p = o.index
                          , f = o.attributes.position.array;
                        if (null !== p)
                            for (var m = p.array, g = 0, v = m.length; g < v; g++) {
                                var y = m[g];
                                l.fromArray(f, 3 * y),
                                w(l, y)
                            }
                        else {
                            g = 0;
                            for (var x = f.length / 3; g < x; g++)
                                l.fromArray(f, 3 * g),
                                w(l, g)
                        }
                    } else {
                        var b = o.vertices;
                        for (g = 0,
                        x = b.length; g < x; g++)
                            w(b[g], g)
                    }
                }
                function w(t, n) {
                    var o = e.distanceSqToPoint(t);
                    if (o < h) {
                        e.closestPointToPoint(t, d),
                        d.applyMatrix4(s);
                        var c = r.ray.origin.distanceTo(d);
                        if (c < r.near || c > r.far)
                            return;
                        i.push({
                            distance: c,
                            distanceToRay: Math.sqrt(o),
                            point: d.clone(),
                            index: n,
                            face: null,
                            object: a
                        })
                    }
                }
            }
        }(),
        updateMorphTargets: function() {
            var t, e, n, r = this.geometry.morphAttributes, i = Object.keys(r);
            if (i.length > 0) {
                var a = r[i[0]];
                if (void 0 !== a)
                    for (this.morphTargetInfluences = [],
                    this.morphTargetDictionary = {},
                    t = 0,
                    e = a.length; t < e; t++)
                        n = a[t].name || String(t),
                        this.morphTargetInfluences.push(0),
                        this.morphTargetDictionary[n] = t
            }
        },
        clone: function() {
            return new this.constructor(this.geometry,this.material).copy(this)
        }
    }),
    no.prototype = Object.assign(Object.create(on.prototype), {
        constructor: no,
        isVideoTexture: !0,
        update: function() {
            var t = this.image;
            t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
        }
    }),
    ro.prototype = Object.create(on.prototype),
    ro.prototype.constructor = ro,
    ro.prototype.isCompressedTexture = !0,
    io.prototype = Object.create(on.prototype),
    io.prototype.constructor = io,
    io.prototype.isCanvasTexture = !0,
    ao.prototype = Object.create(on.prototype),
    ao.prototype.constructor = ao,
    ao.prototype.isDepthTexture = !0,
    oo.prototype = Object.create(pr.prototype),
    oo.prototype.constructor = oo,
    so.prototype = Object.create(gr.prototype),
    so.prototype.constructor = so,
    co.prototype = Object.create(pr.prototype),
    co.prototype.constructor = co,
    uo.prototype = Object.create(gr.prototype),
    uo.prototype.constructor = uo,
    ho.prototype = Object.create(pr.prototype),
    ho.prototype.constructor = ho,
    lo.prototype = Object.create(gr.prototype),
    lo.prototype.constructor = lo,
    po.prototype = Object.create(ho.prototype),
    po.prototype.constructor = po,
    fo.prototype = Object.create(gr.prototype),
    fo.prototype.constructor = fo,
    mo.prototype = Object.create(ho.prototype),
    mo.prototype.constructor = mo,
    go.prototype = Object.create(gr.prototype),
    go.prototype.constructor = go,
    vo.prototype = Object.create(ho.prototype),
    vo.prototype.constructor = vo,
    yo.prototype = Object.create(gr.prototype),
    yo.prototype.constructor = yo,
    xo.prototype = Object.create(ho.prototype),
    xo.prototype.constructor = xo,
    bo.prototype = Object.create(gr.prototype),
    bo.prototype.constructor = bo,
    wo.prototype = Object.create(pr.prototype),
    wo.prototype.constructor = wo,
    wo.prototype.toJSON = function() {
        var t = pr.prototype.toJSON.call(this);
        return t.path = this.parameters.path.toJSON(),
        t
    }
    ,
    _o.prototype = Object.create(gr.prototype),
    _o.prototype.constructor = _o,
    Mo.prototype = Object.create(pr.prototype),
    Mo.prototype.constructor = Mo,
    Eo.prototype = Object.create(gr.prototype),
    Eo.prototype.constructor = Eo,
    So.prototype = Object.create(pr.prototype),
    So.prototype.constructor = So;
    var To = function(t, e, n) {
        n = n || 2;
        var r, i, a, o, s, c, u, h = e && e.length, l = h ? e[0] * n : t.length, d = Ao(t, 0, l, n, !0), p = [];
        if (!d || d.next === d.prev)
            return p;
        if (h && (d = function(t, e, n, r) {
            var i, a, o, s, c, u = [];
            for (i = 0,
            a = e.length; i < a; i++)
                o = e[i] * r,
                s = i < a - 1 ? e[i + 1] * r : t.length,
                (c = Ao(t, o, s, r, !1)) === c.next && (c.steiner = !0),
                u.push(zo(c));
            for (u.sort(Do),
            i = 0; i < u.length; i++)
                No(u[i], n),
                n = Lo(n, n.next);
            return n
        }(t, e, d, n)),
        t.length > 80 * n) {
            r = a = t[0],
            i = o = t[1];
            for (var f = n; f < l; f += n)
                (s = t[f]) < r && (r = s),
                (c = t[f + 1]) < i && (i = c),
                s > a && (a = s),
                c > o && (o = c);
            u = 0 !== (u = Math.max(a - r, o - i)) ? 1 / u : 0
        }
        return Ro(d, p, n, r, i, u),
        p
    };
    function Ao(t, e, n, r, i) {
        var a, o;
        if (i === function(t, e, n, r) {
            for (var i = 0, a = e, o = n - r; a < n; a += r)
                i += (t[o] - t[a]) * (t[a + 1] + t[o + 1]),
                o = a;
            return i
        }(t, e, n, r) > 0)
            for (a = e; a < n; a += r)
                o = Wo(a, t[a], t[a + 1], o);
        else
            for (a = n - r; a >= e; a -= r)
                o = Wo(a, t[a], t[a + 1], o);
        return o && Ho(o, o.next) && (qo(o),
        o = o.next),
        o
    }
    function Lo(t, e) {
        if (!t)
            return t;
        e || (e = t);
        var n, r = t;
        do {
            if (n = !1,
            r.steiner || !Ho(r, r.next) && 0 !== Fo(r.prev, r, r.next))
                r = r.next;
            else {
                if (qo(r),
                (r = e = r.prev) === r.next)
                    break;
                n = !0
            }
        } while (n || r !== e);return e
    }
    function Ro(t, e, n, r, i, a, o) {
        if (t) {
            !o && a && function(t, e, n, r) {
                var i = t;
                do {
                    null === i.z && (i.z = Bo(i.x, i.y, e, n, r)),
                    i.prevZ = i.prev,
                    i.nextZ = i.next,
                    i = i.next
                } while (i !== t);i.prevZ.nextZ = null,
                i.prevZ = null,
                function(t) {
                    var e, n, r, i, a, o, s, c, u = 1;
                    do {
                        for (n = t,
                        t = null,
                        a = null,
                        o = 0; n; ) {
                            for (o++,
                            r = n,
                            s = 0,
                            e = 0; e < u && (s++,
                            r = r.nextZ); e++)
                                ;
                            for (c = u; s > 0 || c > 0 && r; )
                                0 !== s && (0 === c || !r || n.z <= r.z) ? (i = n,
                                n = n.nextZ,
                                s--) : (i = r,
                                r = r.nextZ,
                                c--),
                                a ? a.nextZ = i : t = i,
                                i.prevZ = a,
                                a = i;
                            n = r
                        }
                        a.nextZ = null,
                        u *= 2
                    } while (o > 1)
                }(i)
            }(t, r, i, a);
            for (var s, c, u = t; t.prev !== t.next; )
                if (s = t.prev,
                c = t.next,
                a ? Co(t, r, i, a) : Po(t))
                    e.push(s.i / n),
                    e.push(t.i / n),
                    e.push(c.i / n),
                    qo(t),
                    t = c.next,
                    u = c.next;
                else if ((t = c) === u) {
                    o ? 1 === o ? Ro(t = Oo(t, e, n), e, n, r, i, a, 2) : 2 === o && Io(t, e, n, r, i, a) : Ro(Lo(t), e, n, r, i, a, 1);
                    break
                }
        }
    }
    function Po(t) {
        var e = t.prev
          , n = t
          , r = t.next;
        if (Fo(e, n, r) >= 0)
            return !1;
        for (var i = t.next.next; i !== t.prev; ) {
            if (Uo(e.x, e.y, n.x, n.y, r.x, r.y, i.x, i.y) && Fo(i.prev, i, i.next) >= 0)
                return !1;
            i = i.next
        }
        return !0
    }
    function Co(t, e, n, r) {
        var i = t.prev
          , a = t
          , o = t.next;
        if (Fo(i, a, o) >= 0)
            return !1;
        for (var s = i.x < a.x ? i.x < o.x ? i.x : o.x : a.x < o.x ? a.x : o.x, c = i.y < a.y ? i.y < o.y ? i.y : o.y : a.y < o.y ? a.y : o.y, u = i.x > a.x ? i.x > o.x ? i.x : o.x : a.x > o.x ? a.x : o.x, h = i.y > a.y ? i.y > o.y ? i.y : o.y : a.y > o.y ? a.y : o.y, l = Bo(s, c, e, n, r), d = Bo(u, h, e, n, r), p = t.prevZ, f = t.nextZ; p && p.z >= l && f && f.z <= d; ) {
            if (p !== t.prev && p !== t.next && Uo(i.x, i.y, a.x, a.y, o.x, o.y, p.x, p.y) && Fo(p.prev, p, p.next) >= 0)
                return !1;
            if (p = p.prevZ,
            f !== t.prev && f !== t.next && Uo(i.x, i.y, a.x, a.y, o.x, o.y, f.x, f.y) && Fo(f.prev, f, f.next) >= 0)
                return !1;
            f = f.nextZ
        }
        for (; p && p.z >= l; ) {
            if (p !== t.prev && p !== t.next && Uo(i.x, i.y, a.x, a.y, o.x, o.y, p.x, p.y) && Fo(p.prev, p, p.next) >= 0)
                return !1;
            p = p.prevZ
        }
        for (; f && f.z <= d; ) {
            if (f !== t.prev && f !== t.next && Uo(i.x, i.y, a.x, a.y, o.x, o.y, f.x, f.y) && Fo(f.prev, f, f.next) >= 0)
                return !1;
            f = f.nextZ
        }
        return !0
    }
    function Oo(t, e, n) {
        var r = t;
        do {
            var i = r.prev
              , a = r.next.next;
            !Ho(i, a) && Vo(i, r, r.next, a) && ko(i, a) && ko(a, i) && (e.push(i.i / n),
            e.push(r.i / n),
            e.push(a.i / n),
            qo(r),
            qo(r.next),
            r = t = a),
            r = r.next
        } while (r !== t);return r
    }
    function Io(t, e, n, r, i, a) {
        var o = t;
        do {
            for (var s = o.next.next; s !== o.prev; ) {
                if (o.i !== s.i && Go(o, s)) {
                    var c = jo(o, s);
                    return o = Lo(o, o.next),
                    c = Lo(c, c.next),
                    Ro(o, e, n, r, i, a),
                    void Ro(c, e, n, r, i, a)
                }
                s = s.next
            }
            o = o.next
        } while (o !== t)
    }
    function Do(t, e) {
        return t.x - e.x
    }
    function No(t, e) {
        if (e = function(t, e) {
            var n, r = e, i = t.x, a = t.y, o = -1 / 0;
            do {
                if (a <= r.y && a >= r.next.y && r.next.y !== r.y) {
                    var s = r.x + (a - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
                    if (s <= i && s > o) {
                        if (o = s,
                        s === i) {
                            if (a === r.y)
                                return r;
                            if (a === r.next.y)
                                return r.next
                        }
                        n = r.x < r.next.x ? r : r.next
                    }
                }
                r = r.next
            } while (r !== e);if (!n)
                return null;
            if (i === o)
                return n.prev;
            var c, u = n, h = n.x, l = n.y, d = 1 / 0;
            r = n.next;
            for (; r !== u; )
                i >= r.x && r.x >= h && i !== r.x && Uo(a < l ? i : o, a, h, l, a < l ? o : i, a, r.x, r.y) && ((c = Math.abs(a - r.y) / (i - r.x)) < d || c === d && r.x > n.x) && ko(r, t) && (n = r,
                d = c),
                r = r.next;
            return n
        }(t, e)) {
            var n = jo(e, t);
            Lo(n, n.next)
        }
    }
    function Bo(t, e, n, r, i) {
        return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * i) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - r) * i) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
    }
    function zo(t) {
        var e = t
          , n = t;
        do {
            (e.x < n.x || e.x === n.x && e.y < n.y) && (n = e),
            e = e.next
        } while (e !== t);return n
    }
    function Uo(t, e, n, r, i, a, o, s) {
        return (i - o) * (e - s) - (t - o) * (a - s) >= 0 && (t - o) * (r - s) - (n - o) * (e - s) >= 0 && (n - o) * (a - s) - (i - o) * (r - s) >= 0
    }
    function Go(t, e) {
        return t.next.i !== e.i && t.prev.i !== e.i && !function(t, e) {
            var n = t;
            do {
                if (n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && Vo(n, n.next, t, e))
                    return !0;
                n = n.next
            } while (n !== t);return !1
        }(t, e) && ko(t, e) && ko(e, t) && function(t, e) {
            var n = t
              , r = !1
              , i = (t.x + e.x) / 2
              , a = (t.y + e.y) / 2;
            do {
                n.y > a != n.next.y > a && n.next.y !== n.y && i < (n.next.x - n.x) * (a - n.y) / (n.next.y - n.y) + n.x && (r = !r),
                n = n.next
            } while (n !== t);return r
        }(t, e)
    }
    function Fo(t, e, n) {
        return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)
    }
    function Ho(t, e) {
        return t.x === e.x && t.y === e.y
    }
    function Vo(t, e, n, r) {
        return !!(Ho(t, n) && Ho(e, r) || Ho(t, r) && Ho(n, e)) || Fo(t, e, n) > 0 != Fo(t, e, r) > 0 && Fo(n, r, t) > 0 != Fo(n, r, e) > 0
    }
    function ko(t, e) {
        return Fo(t.prev, t, t.next) < 0 ? Fo(t, e, t.next) >= 0 && Fo(t, t.prev, e) >= 0 : Fo(t, e, t.prev) < 0 || Fo(t, t.next, e) < 0
    }
    function jo(t, e) {
        var n = new Xo(t.i,t.x,t.y)
          , r = new Xo(e.i,e.x,e.y)
          , i = t.next
          , a = e.prev;
        return t.next = e,
        e.prev = t,
        n.next = i,
        i.prev = n,
        r.next = n,
        n.prev = r,
        a.next = r,
        r.prev = a,
        r
    }
    function Wo(t, e, n, r) {
        var i = new Xo(t,e,n);
        return r ? (i.next = r.next,
        i.prev = r,
        r.next.prev = i,
        r.next = i) : (i.prev = i,
        i.next = i),
        i
    }
    function qo(t) {
        t.next.prev = t.prev,
        t.prev.next = t.next,
        t.prevZ && (t.prevZ.nextZ = t.nextZ),
        t.nextZ && (t.nextZ.prevZ = t.prevZ)
    }
    function Xo(t, e, n) {
        this.i = t,
        this.x = e,
        this.y = n,
        this.prev = null,
        this.next = null,
        this.z = null,
        this.prevZ = null,
        this.nextZ = null,
        this.steiner = !1
    }
    var Yo = {
        area: function(t) {
            for (var e = t.length, n = 0, r = e - 1, i = 0; i < e; r = i++)
                n += t[r].x * t[i].y - t[i].x * t[r].y;
            return .5 * n
        },
        isClockWise: function(t) {
            return Yo.area(t) < 0
        },
        triangulateShape: function(t, e) {
            var n = []
              , r = []
              , i = [];
            Jo(t),
            Zo(n, t);
            var a = t.length;
            e.forEach(Jo);
            for (var o = 0; o < e.length; o++)
                r.push(a),
                a += e[o].length,
                Zo(n, e[o]);
            var s = To(n, r);
            for (o = 0; o < s.length; o += 3)
                i.push(s.slice(o, o + 3));
            return i
        }
    };
    function Jo(t) {
        var e = t.length;
        e > 2 && t[e - 1].equals(t[0]) && t.pop()
    }
    function Zo(t, e) {
        for (var n = 0; n < e.length; n++)
            t.push(e[n].x),
            t.push(e[n].y)
    }
    function Qo(t, e) {
        gr.call(this),
        this.type = "ExtrudeGeometry",
        this.parameters = {
            shapes: t,
            options: e
        },
        this.fromBufferGeometry(new Ko(t,e)),
        this.mergeVertices()
    }
    function Ko(t, e) {
        pr.call(this),
        this.type = "ExtrudeBufferGeometry",
        this.parameters = {
            shapes: t,
            options: e
        },
        t = Array.isArray(t) ? t : [t];
        for (var n = this, r = [], i = [], a = 0, o = t.length; a < o; a++) {
            s(t[a])
        }
        function s(t) {
            var a = []
              , o = void 0 !== e.curveSegments ? e.curveSegments : 12
              , s = void 0 !== e.steps ? e.steps : 1
              , c = void 0 !== e.depth ? e.depth : 100
              , u = void 0 === e.bevelEnabled || e.bevelEnabled
              , h = void 0 !== e.bevelThickness ? e.bevelThickness : 6
              , l = void 0 !== e.bevelSize ? e.bevelSize : h - 2
              , d = void 0 !== e.bevelOffset ? e.bevelOffset : 0
              , p = void 0 !== e.bevelSegments ? e.bevelSegments : 3
              , f = e.extrudePath
              , m = void 0 !== e.UVGenerator ? e.UVGenerator : $o;
            void 0 !== e.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),
            c = e.amount);
            var g, v, y, x, b, w, _, M, E = !1;
            f && (g = f.getSpacedPoints(s),
            E = !0,
            u = !1,
            v = f.computeFrenetFrames(s, !1),
            y = new We,
            x = new We,
            b = new We),
            u || (p = 0,
            h = 0,
            l = 0,
            d = 0);
            var S = t.extractPoints(o)
              , T = S.shape
              , A = S.holes;
            if (!Yo.isClockWise(T))
                for (T = T.reverse(),
                _ = 0,
                M = A.length; _ < M; _++)
                    w = A[_],
                    Yo.isClockWise(w) && (A[_] = w.reverse());
            var L = Yo.triangulateShape(T, A)
              , R = T;
            for (_ = 0,
            M = A.length; _ < M; _++)
                w = A[_],
                T = T.concat(w);
            function P(t, e, n) {
                return e || console.error("THREE.ExtrudeGeometry: vec does not exist"),
                e.clone().multiplyScalar(n).add(t)
            }
            var C, O, I, D, N, B, z = T.length, U = L.length;
            function G(t, e, n) {
                var r, i, a, o = t.x - e.x, s = t.y - e.y, c = n.x - t.x, u = n.y - t.y, h = o * o + s * s, l = o * u - s * c;
                if (Math.abs(l) > Number.EPSILON) {
                    var d = Math.sqrt(h)
                      , p = Math.sqrt(c * c + u * u)
                      , f = e.x - s / d
                      , m = e.y + o / d
                      , g = ((n.x - u / p - f) * u - (n.y + c / p - m) * c) / (o * u - s * c)
                      , v = (r = f + o * g - t.x) * r + (i = m + s * g - t.y) * i;
                    if (v <= 2)
                        return new ke(r,i);
                    a = Math.sqrt(v / 2)
                } else {
                    var y = !1;
                    o > Number.EPSILON ? c > Number.EPSILON && (y = !0) : o < -Number.EPSILON ? c < -Number.EPSILON && (y = !0) : Math.sign(s) === Math.sign(u) && (y = !0),
                    y ? (r = -s,
                    i = o,
                    a = Math.sqrt(h)) : (r = o,
                    i = s,
                    a = Math.sqrt(h / 2))
                }
                return new ke(r / a,i / a)
            }
            for (var F = [], H = 0, V = R.length, k = V - 1, j = H + 1; H < V; H++,
            k++,
            j++)
                k === V && (k = 0),
                j === V && (j = 0),
                F[H] = G(R[H], R[k], R[j]);
            var W, q, X = [], Y = F.concat();
            for (_ = 0,
            M = A.length; _ < M; _++) {
                for (w = A[_],
                W = [],
                H = 0,
                k = (V = w.length) - 1,
                j = H + 1; H < V; H++,
                k++,
                j++)
                    k === V && (k = 0),
                    j === V && (j = 0),
                    W[H] = G(w[H], w[k], w[j]);
                X.push(W),
                Y = Y.concat(W)
            }
            for (C = 0; C < p; C++) {
                for (I = C / p,
                D = h * Math.cos(I * Math.PI / 2),
                O = l * Math.sin(I * Math.PI / 2) + d,
                H = 0,
                V = R.length; H < V; H++)
                    Z((N = P(R[H], F[H], O)).x, N.y, -D);
                for (_ = 0,
                M = A.length; _ < M; _++)
                    for (w = A[_],
                    W = X[_],
                    H = 0,
                    V = w.length; H < V; H++)
                        Z((N = P(w[H], W[H], O)).x, N.y, -D)
            }
            for (O = l + d,
            H = 0; H < z; H++)
                N = u ? P(T[H], Y[H], O) : T[H],
                E ? (x.copy(v.normals[0]).multiplyScalar(N.x),
                y.copy(v.binormals[0]).multiplyScalar(N.y),
                b.copy(g[0]).add(x).add(y),
                Z(b.x, b.y, b.z)) : Z(N.x, N.y, 0);
            for (q = 1; q <= s; q++)
                for (H = 0; H < z; H++)
                    N = u ? P(T[H], Y[H], O) : T[H],
                    E ? (x.copy(v.normals[q]).multiplyScalar(N.x),
                    y.copy(v.binormals[q]).multiplyScalar(N.y),
                    b.copy(g[q]).add(x).add(y),
                    Z(b.x, b.y, b.z)) : Z(N.x, N.y, c / s * q);
            for (C = p - 1; C >= 0; C--) {
                for (I = C / p,
                D = h * Math.cos(I * Math.PI / 2),
                O = l * Math.sin(I * Math.PI / 2) + d,
                H = 0,
                V = R.length; H < V; H++)
                    Z((N = P(R[H], F[H], O)).x, N.y, c + D);
                for (_ = 0,
                M = A.length; _ < M; _++)
                    for (w = A[_],
                    W = X[_],
                    H = 0,
                    V = w.length; H < V; H++)
                        N = P(w[H], W[H], O),
                        E ? Z(N.x, N.y + g[s - 1].y, g[s - 1].x + D) : Z(N.x, N.y, c + D)
            }
            function J(t, e) {
                var n, r;
                for (H = t.length; --H >= 0; ) {
                    n = H,
                    (r = H - 1) < 0 && (r = t.length - 1);
                    var i = 0
                      , a = s + 2 * p;
                    for (i = 0; i < a; i++) {
                        var o = z * i
                          , c = z * (i + 1);
                        K(e + n + o, e + r + o, e + r + c, e + n + c)
                    }
                }
            }
            function Z(t, e, n) {
                a.push(t),
                a.push(e),
                a.push(n)
            }
            function Q(t, e, i) {
                $(t),
                $(e),
                $(i);
                var a = r.length / 3
                  , o = m.generateTopUV(n, r, a - 3, a - 2, a - 1);
                tt(o[0]),
                tt(o[1]),
                tt(o[2])
            }
            function K(t, e, i, a) {
                $(t),
                $(e),
                $(a),
                $(e),
                $(i),
                $(a);
                var o = r.length / 3
                  , s = m.generateSideWallUV(n, r, o - 6, o - 3, o - 2, o - 1);
                tt(s[0]),
                tt(s[1]),
                tt(s[3]),
                tt(s[1]),
                tt(s[2]),
                tt(s[3])
            }
            function $(t) {
                r.push(a[3 * t + 0]),
                r.push(a[3 * t + 1]),
                r.push(a[3 * t + 2])
            }
            function tt(t) {
                i.push(t.x),
                i.push(t.y)
            }
            !function() {
                var t = r.length / 3;
                if (u) {
                    var e = 0
                      , i = z * e;
                    for (H = 0; H < U; H++)
                        Q((B = L[H])[2] + i, B[1] + i, B[0] + i);
                    for (i = z * (e = s + 2 * p),
                    H = 0; H < U; H++)
                        Q((B = L[H])[0] + i, B[1] + i, B[2] + i)
                } else {
                    for (H = 0; H < U; H++)
                        Q((B = L[H])[2], B[1], B[0]);
                    for (H = 0; H < U; H++)
                        Q((B = L[H])[0] + z * s, B[1] + z * s, B[2] + z * s)
                }
                n.addGroup(t, r.length / 3 - t, 0)
            }(),
            function() {
                var t = r.length / 3
                  , e = 0;
                for (J(R, e),
                e += R.length,
                _ = 0,
                M = A.length; _ < M; _++)
                    J(w = A[_], e),
                    e += w.length;
                n.addGroup(t, r.length / 3 - t, 1)
            }()
        }
        this.addAttribute("position", new or(r,3)),
        this.addAttribute("uv", new or(i,2)),
        this.computeVertexNormals()
    }
    Qo.prototype = Object.create(gr.prototype),
    Qo.prototype.constructor = Qo,
    Qo.prototype.toJSON = function() {
        var t = gr.prototype.toJSON.call(this);
        return ts(this.parameters.shapes, this.parameters.options, t)
    }
    ,
    Ko.prototype = Object.create(pr.prototype),
    Ko.prototype.constructor = Ko,
    Ko.prototype.toJSON = function() {
        var t = pr.prototype.toJSON.call(this);
        return ts(this.parameters.shapes, this.parameters.options, t)
    }
    ;
    var $o = {
        generateTopUV: function(t, e, n, r, i) {
            var a = e[3 * n]
              , o = e[3 * n + 1]
              , s = e[3 * r]
              , c = e[3 * r + 1]
              , u = e[3 * i]
              , h = e[3 * i + 1];
            return [new ke(a,o), new ke(s,c), new ke(u,h)]
        },
        generateSideWallUV: function(t, e, n, r, i, a) {
            var o = e[3 * n]
              , s = e[3 * n + 1]
              , c = e[3 * n + 2]
              , u = e[3 * r]
              , h = e[3 * r + 1]
              , l = e[3 * r + 2]
              , d = e[3 * i]
              , p = e[3 * i + 1]
              , f = e[3 * i + 2]
              , m = e[3 * a]
              , g = e[3 * a + 1]
              , v = e[3 * a + 2];
            return Math.abs(s - h) < .01 ? [new ke(o,1 - c), new ke(u,1 - l), new ke(d,1 - f), new ke(m,1 - v)] : [new ke(s,1 - c), new ke(h,1 - l), new ke(p,1 - f), new ke(g,1 - v)]
        }
    };
    function ts(t, e, n) {
        if (n.shapes = [],
        Array.isArray(t))
            for (var r = 0, i = t.length; r < i; r++) {
                var a = t[r];
                n.shapes.push(a.uuid)
            }
        else
            n.shapes.push(t.uuid);
        return void 0 !== e.extrudePath && (n.options.extrudePath = e.extrudePath.toJSON()),
        n
    }
    function es(t, e) {
        gr.call(this),
        this.type = "TextGeometry",
        this.parameters = {
            text: t,
            parameters: e
        },
        this.fromBufferGeometry(new ns(t,e)),
        this.mergeVertices()
    }
    function ns(t, e) {
        var n = (e = e || {}).font;
        if (!n || !n.isFont)
            return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),
            new gr;
        var r = n.generateShapes(t, e.size);
        e.depth = void 0 !== e.height ? e.height : 50,
        void 0 === e.bevelThickness && (e.bevelThickness = 10),
        void 0 === e.bevelSize && (e.bevelSize = 8),
        void 0 === e.bevelEnabled && (e.bevelEnabled = !1),
        Ko.call(this, r, e),
        this.type = "TextBufferGeometry"
    }
    function rs(t, e, n, r, i, a, o) {
        gr.call(this),
        this.type = "SphereGeometry",
        this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: n,
            phiStart: r,
            phiLength: i,
            thetaStart: a,
            thetaLength: o
        },
        this.fromBufferGeometry(new is(t,e,n,r,i,a,o)),
        this.mergeVertices()
    }
    function is(t, e, n, r, i, a, o) {
        pr.call(this),
        this.type = "SphereBufferGeometry",
        this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: n,
            phiStart: r,
            phiLength: i,
            thetaStart: a,
            thetaLength: o
        },
        t = t || 1,
        e = Math.max(3, Math.floor(e) || 8),
        n = Math.max(2, Math.floor(n) || 6),
        r = void 0 !== r ? r : 0,
        i = void 0 !== i ? i : 2 * Math.PI,
        a = void 0 !== a ? a : 0,
        o = void 0 !== o ? o : Math.PI;
        var s, c, u = Math.min(a + o, Math.PI), h = 0, l = [], d = new We, p = new We, f = [], m = [], g = [], v = [];
        for (c = 0; c <= n; c++) {
            var y = []
              , x = c / n
              , b = 0;
            for (0 == c && 0 == a ? b = .5 / e : c == n && u == Math.PI && (b = -.5 / e),
            s = 0; s <= e; s++) {
                var w = s / e;
                d.x = -t * Math.cos(r + w * i) * Math.sin(a + x * o),
                d.y = t * Math.cos(a + x * o),
                d.z = t * Math.sin(r + w * i) * Math.sin(a + x * o),
                m.push(d.x, d.y, d.z),
                p.copy(d).normalize(),
                g.push(p.x, p.y, p.z),
                v.push(w + b, 1 - x),
                y.push(h++)
            }
            l.push(y)
        }
        for (c = 0; c < n; c++)
            for (s = 0; s < e; s++) {
                var _ = l[c][s + 1]
                  , M = l[c][s]
                  , E = l[c + 1][s]
                  , S = l[c + 1][s + 1];
                (0 !== c || a > 0) && f.push(_, M, S),
                (c !== n - 1 || u < Math.PI) && f.push(M, E, S)
            }
        this.setIndex(f),
        this.addAttribute("position", new or(m,3)),
        this.addAttribute("normal", new or(g,3)),
        this.addAttribute("uv", new or(v,2))
    }
    function as(t, e, n, r, i, a) {
        gr.call(this),
        this.type = "RingGeometry",
        this.parameters = {
            innerRadius: t,
            outerRadius: e,
            thetaSegments: n,
            phiSegments: r,
            thetaStart: i,
            thetaLength: a
        },
        this.fromBufferGeometry(new os(t,e,n,r,i,a)),
        this.mergeVertices()
    }
    function os(t, e, n, r, i, a) {
        pr.call(this),
        this.type = "RingBufferGeometry",
        this.parameters = {
            innerRadius: t,
            outerRadius: e,
            thetaSegments: n,
            phiSegments: r,
            thetaStart: i,
            thetaLength: a
        },
        t = t || .5,
        e = e || 1,
        i = void 0 !== i ? i : 0,
        a = void 0 !== a ? a : 2 * Math.PI,
        n = void 0 !== n ? Math.max(3, n) : 8;
        var o, s, c, u = [], h = [], l = [], d = [], p = t, f = (e - t) / (r = void 0 !== r ? Math.max(1, r) : 1), m = new We, g = new ke;
        for (s = 0; s <= r; s++) {
            for (c = 0; c <= n; c++)
                o = i + c / n * a,
                m.x = p * Math.cos(o),
                m.y = p * Math.sin(o),
                h.push(m.x, m.y, m.z),
                l.push(0, 0, 1),
                g.x = (m.x / e + 1) / 2,
                g.y = (m.y / e + 1) / 2,
                d.push(g.x, g.y);
            p += f
        }
        for (s = 0; s < r; s++) {
            var v = s * (n + 1);
            for (c = 0; c < n; c++) {
                var y = o = c + v
                  , x = o + n + 1
                  , b = o + n + 2
                  , w = o + 1;
                u.push(y, x, w),
                u.push(x, b, w)
            }
        }
        this.setIndex(u),
        this.addAttribute("position", new or(h,3)),
        this.addAttribute("normal", new or(l,3)),
        this.addAttribute("uv", new or(d,2))
    }
    function ss(t, e, n, r) {
        gr.call(this),
        this.type = "LatheGeometry",
        this.parameters = {
            points: t,
            segments: e,
            phiStart: n,
            phiLength: r
        },
        this.fromBufferGeometry(new cs(t,e,n,r)),
        this.mergeVertices()
    }
    function cs(t, e, n, r) {
        pr.call(this),
        this.type = "LatheBufferGeometry",
        this.parameters = {
            points: t,
            segments: e,
            phiStart: n,
            phiLength: r
        },
        e = Math.floor(e) || 12,
        n = n || 0,
        r = r || 2 * Math.PI,
        r = Ve.clamp(r, 0, 2 * Math.PI);
        var i, a, o, s = [], c = [], u = [], h = 1 / e, l = new We, d = new ke;
        for (a = 0; a <= e; a++) {
            var p = n + a * h * r
              , f = Math.sin(p)
              , m = Math.cos(p);
            for (o = 0; o <= t.length - 1; o++)
                l.x = t[o].x * f,
                l.y = t[o].y,
                l.z = t[o].x * m,
                c.push(l.x, l.y, l.z),
                d.x = a / e,
                d.y = o / (t.length - 1),
                u.push(d.x, d.y)
        }
        for (a = 0; a < e; a++)
            for (o = 0; o < t.length - 1; o++) {
                var g = i = o + a * t.length
                  , v = i + t.length
                  , y = i + t.length + 1
                  , x = i + 1;
                s.push(g, v, x),
                s.push(v, y, x)
            }
        if (this.setIndex(s),
        this.addAttribute("position", new or(c,3)),
        this.addAttribute("uv", new or(u,2)),
        this.computeVertexNormals(),
        r === 2 * Math.PI) {
            var b = this.attributes.normal.array
              , w = new We
              , _ = new We
              , M = new We;
            for (i = e * t.length * 3,
            a = 0,
            o = 0; a < t.length; a++,
            o += 3)
                w.x = b[o + 0],
                w.y = b[o + 1],
                w.z = b[o + 2],
                _.x = b[i + o + 0],
                _.y = b[i + o + 1],
                _.z = b[i + o + 2],
                M.addVectors(w, _).normalize(),
                b[o + 0] = b[i + o + 0] = M.x,
                b[o + 1] = b[i + o + 1] = M.y,
                b[o + 2] = b[i + o + 2] = M.z
        }
    }
    function us(t, e) {
        gr.call(this),
        this.type = "ShapeGeometry",
        "object" == typeof e && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."),
        e = e.curveSegments),
        this.parameters = {
            shapes: t,
            curveSegments: e
        },
        this.fromBufferGeometry(new hs(t,e)),
        this.mergeVertices()
    }
    function hs(t, e) {
        pr.call(this),
        this.type = "ShapeBufferGeometry",
        this.parameters = {
            shapes: t,
            curveSegments: e
        },
        e = e || 12;
        var n = []
          , r = []
          , i = []
          , a = []
          , o = 0
          , s = 0;
        if (!1 === Array.isArray(t))
            u(t);
        else
            for (var c = 0; c < t.length; c++)
                u(t[c]),
                this.addGroup(o, s, c),
                o += s,
                s = 0;
        function u(t) {
            var o, c, u, h = r.length / 3, l = t.extractPoints(e), d = l.shape, p = l.holes;
            for (!1 === Yo.isClockWise(d) && (d = d.reverse()),
            o = 0,
            c = p.length; o < c; o++)
                u = p[o],
                !0 === Yo.isClockWise(u) && (p[o] = u.reverse());
            var f = Yo.triangulateShape(d, p);
            for (o = 0,
            c = p.length; o < c; o++)
                u = p[o],
                d = d.concat(u);
            for (o = 0,
            c = d.length; o < c; o++) {
                var m = d[o];
                r.push(m.x, m.y, 0),
                i.push(0, 0, 1),
                a.push(m.x, m.y)
            }
            for (o = 0,
            c = f.length; o < c; o++) {
                var g = f[o]
                  , v = g[0] + h
                  , y = g[1] + h
                  , x = g[2] + h;
                n.push(v, y, x),
                s += 3
            }
        }
        this.setIndex(n),
        this.addAttribute("position", new or(r,3)),
        this.addAttribute("normal", new or(i,3)),
        this.addAttribute("uv", new or(a,2))
    }
    function ls(t, e) {
        if (e.shapes = [],
        Array.isArray(t))
            for (var n = 0, r = t.length; n < r; n++) {
                var i = t[n];
                e.shapes.push(i.uuid)
            }
        else
            e.shapes.push(t.uuid);
        return e
    }
    function ds(t, e) {
        pr.call(this),
        this.type = "EdgesGeometry",
        this.parameters = {
            thresholdAngle: e
        },
        e = void 0 !== e ? e : 1;
        var n, r, i, a, o = [], s = Math.cos(Ve.DEG2RAD * e), c = [0, 0], u = {}, h = ["a", "b", "c"];
        t.isBufferGeometry ? (a = new gr).fromBufferGeometry(t) : a = t.clone(),
        a.mergeVertices(),
        a.computeFaceNormals();
        for (var l = a.vertices, d = a.faces, p = 0, f = d.length; p < f; p++)
            for (var m = d[p], g = 0; g < 3; g++)
                n = m[h[g]],
                r = m[h[(g + 1) % 3]],
                c[0] = Math.min(n, r),
                c[1] = Math.max(n, r),
                void 0 === u[i = c[0] + "," + c[1]] ? u[i] = {
                    index1: c[0],
                    index2: c[1],
                    face1: p,
                    face2: void 0
                } : u[i].face2 = p;
        for (i in u) {
            var v = u[i];
            if (void 0 === v.face2 || d[v.face1].normal.dot(d[v.face2].normal) <= s) {
                var y = l[v.index1];
                o.push(y.x, y.y, y.z),
                y = l[v.index2],
                o.push(y.x, y.y, y.z)
            }
        }
        this.addAttribute("position", new or(o,3))
    }
    function ps(t, e, n, r, i, a, o, s) {
        gr.call(this),
        this.type = "CylinderGeometry",
        this.parameters = {
            radiusTop: t,
            radiusBottom: e,
            height: n,
            radialSegments: r,
            heightSegments: i,
            openEnded: a,
            thetaStart: o,
            thetaLength: s
        },
        this.fromBufferGeometry(new fs(t,e,n,r,i,a,o,s)),
        this.mergeVertices()
    }
    function fs(t, e, n, r, i, a, o, s) {
        pr.call(this),
        this.type = "CylinderBufferGeometry",
        this.parameters = {
            radiusTop: t,
            radiusBottom: e,
            height: n,
            radialSegments: r,
            heightSegments: i,
            openEnded: a,
            thetaStart: o,
            thetaLength: s
        };
        var c = this;
        t = void 0 !== t ? t : 1,
        e = void 0 !== e ? e : 1,
        n = n || 1,
        r = Math.floor(r) || 8,
        i = Math.floor(i) || 1,
        a = void 0 !== a && a,
        o = void 0 !== o ? o : 0,
        s = void 0 !== s ? s : 2 * Math.PI;
        var u = []
          , h = []
          , l = []
          , d = []
          , p = 0
          , f = []
          , m = n / 2
          , g = 0;
        function v(n) {
            var i, a, f, v = new ke, y = new We, x = 0, b = !0 === n ? t : e, w = !0 === n ? 1 : -1;
            for (a = p,
            i = 1; i <= r; i++)
                h.push(0, m * w, 0),
                l.push(0, w, 0),
                d.push(.5, .5),
                p++;
            for (f = p,
            i = 0; i <= r; i++) {
                var _ = i / r * s + o
                  , M = Math.cos(_)
                  , E = Math.sin(_);
                y.x = b * E,
                y.y = m * w,
                y.z = b * M,
                h.push(y.x, y.y, y.z),
                l.push(0, w, 0),
                v.x = .5 * M + .5,
                v.y = .5 * E * w + .5,
                d.push(v.x, v.y),
                p++
            }
            for (i = 0; i < r; i++) {
                var S = a + i
                  , T = f + i;
                !0 === n ? u.push(T, T + 1, S) : u.push(T + 1, T, S),
                x += 3
            }
            c.addGroup(g, x, !0 === n ? 1 : 2),
            g += x
        }
        !function() {
            var a, v, y = new We, x = new We, b = 0, w = (e - t) / n;
            for (v = 0; v <= i; v++) {
                var _ = []
                  , M = v / i
                  , E = M * (e - t) + t;
                for (a = 0; a <= r; a++) {
                    var S = a / r
                      , T = S * s + o
                      , A = Math.sin(T)
                      , L = Math.cos(T);
                    x.x = E * A,
                    x.y = -M * n + m,
                    x.z = E * L,
                    h.push(x.x, x.y, x.z),
                    y.set(A, w, L).normalize(),
                    l.push(y.x, y.y, y.z),
                    d.push(S, 1 - M),
                    _.push(p++)
                }
                f.push(_)
            }
            for (a = 0; a < r; a++)
                for (v = 0; v < i; v++) {
                    var R = f[v][a]
                      , P = f[v + 1][a]
                      , C = f[v + 1][a + 1]
                      , O = f[v][a + 1];
                    u.push(R, P, O),
                    u.push(P, C, O),
                    b += 6
                }
            c.addGroup(g, b, 0),
            g += b
        }(),
        !1 === a && (t > 0 && v(!0),
        e > 0 && v(!1)),
        this.setIndex(u),
        this.addAttribute("position", new or(h,3)),
        this.addAttribute("normal", new or(l,3)),
        this.addAttribute("uv", new or(d,2))
    }
    function ms(t, e, n, r, i, a, o) {
        ps.call(this, 0, t, e, n, r, i, a, o),
        this.type = "ConeGeometry",
        this.parameters = {
            radius: t,
            height: e,
            radialSegments: n,
            heightSegments: r,
            openEnded: i,
            thetaStart: a,
            thetaLength: o
        }
    }
    function gs(t, e, n, r, i, a, o) {
        fs.call(this, 0, t, e, n, r, i, a, o),
        this.type = "ConeBufferGeometry",
        this.parameters = {
            radius: t,
            height: e,
            radialSegments: n,
            heightSegments: r,
            openEnded: i,
            thetaStart: a,
            thetaLength: o
        }
    }
    function vs(t, e, n, r) {
        gr.call(this),
        this.type = "CircleGeometry",
        this.parameters = {
            radius: t,
            segments: e,
            thetaStart: n,
            thetaLength: r
        },
        this.fromBufferGeometry(new ys(t,e,n,r)),
        this.mergeVertices()
    }
    function ys(t, e, n, r) {
        pr.call(this),
        this.type = "CircleBufferGeometry",
        this.parameters = {
            radius: t,
            segments: e,
            thetaStart: n,
            thetaLength: r
        },
        t = t || 1,
        e = void 0 !== e ? Math.max(3, e) : 8,
        n = void 0 !== n ? n : 0,
        r = void 0 !== r ? r : 2 * Math.PI;
        var i, a, o = [], s = [], c = [], u = [], h = new We, l = new ke;
        for (s.push(0, 0, 0),
        c.push(0, 0, 1),
        u.push(.5, .5),
        a = 0,
        i = 3; a <= e; a++,
        i += 3) {
            var d = n + a / e * r;
            h.x = t * Math.cos(d),
            h.y = t * Math.sin(d),
            s.push(h.x, h.y, h.z),
            c.push(0, 0, 1),
            l.x = (s[i] / t + 1) / 2,
            l.y = (s[i + 1] / t + 1) / 2,
            u.push(l.x, l.y)
        }
        for (i = 1; i <= e; i++)
            o.push(i, i + 1, 0);
        this.setIndex(o),
        this.addAttribute("position", new or(s,3)),
        this.addAttribute("normal", new or(c,3)),
        this.addAttribute("uv", new or(u,2))
    }
    es.prototype = Object.create(gr.prototype),
    es.prototype.constructor = es,
    ns.prototype = Object.create(Ko.prototype),
    ns.prototype.constructor = ns,
    rs.prototype = Object.create(gr.prototype),
    rs.prototype.constructor = rs,
    is.prototype = Object.create(pr.prototype),
    is.prototype.constructor = is,
    as.prototype = Object.create(gr.prototype),
    as.prototype.constructor = as,
    os.prototype = Object.create(pr.prototype),
    os.prototype.constructor = os,
    ss.prototype = Object.create(gr.prototype),
    ss.prototype.constructor = ss,
    cs.prototype = Object.create(pr.prototype),
    cs.prototype.constructor = cs,
    us.prototype = Object.create(gr.prototype),
    us.prototype.constructor = us,
    us.prototype.toJSON = function() {
        var t = gr.prototype.toJSON.call(this);
        return ls(this.parameters.shapes, t)
    }
    ,
    hs.prototype = Object.create(pr.prototype),
    hs.prototype.constructor = hs,
    hs.prototype.toJSON = function() {
        var t = pr.prototype.toJSON.call(this);
        return ls(this.parameters.shapes, t)
    }
    ,
    ds.prototype = Object.create(pr.prototype),
    ds.prototype.constructor = ds,
    ps.prototype = Object.create(gr.prototype),
    ps.prototype.constructor = ps,
    fs.prototype = Object.create(pr.prototype),
    fs.prototype.constructor = fs,
    ms.prototype = Object.create(ps.prototype),
    ms.prototype.constructor = ms,
    gs.prototype = Object.create(fs.prototype),
    gs.prototype.constructor = gs,
    vs.prototype = Object.create(gr.prototype),
    vs.prototype.constructor = vs,
    ys.prototype = Object.create(pr.prototype),
    ys.prototype.constructor = ys;
    var xs = Object.freeze({
        WireframeGeometry: oo,
        ParametricGeometry: so,
        ParametricBufferGeometry: co,
        TetrahedronGeometry: lo,
        TetrahedronBufferGeometry: po,
        OctahedronGeometry: fo,
        OctahedronBufferGeometry: mo,
        IcosahedronGeometry: go,
        IcosahedronBufferGeometry: vo,
        DodecahedronGeometry: yo,
        DodecahedronBufferGeometry: xo,
        PolyhedronGeometry: uo,
        PolyhedronBufferGeometry: ho,
        TubeGeometry: bo,
        TubeBufferGeometry: wo,
        TorusKnotGeometry: _o,
        TorusKnotBufferGeometry: Mo,
        TorusGeometry: Eo,
        TorusBufferGeometry: So,
        TextGeometry: es,
        TextBufferGeometry: ns,
        SphereGeometry: rs,
        SphereBufferGeometry: is,
        RingGeometry: as,
        RingBufferGeometry: os,
        PlaneGeometry: Hr,
        PlaneBufferGeometry: Vr,
        LatheGeometry: ss,
        LatheBufferGeometry: cs,
        ShapeGeometry: us,
        ShapeBufferGeometry: hs,
        ExtrudeGeometry: Qo,
        ExtrudeBufferGeometry: Ko,
        EdgesGeometry: ds,
        ConeGeometry: ms,
        ConeBufferGeometry: gs,
        CylinderGeometry: ps,
        CylinderBufferGeometry: fs,
        CircleGeometry: vs,
        CircleBufferGeometry: ys,
        BoxGeometry: vr,
        BoxBufferGeometry: yr
    });
    function bs(t) {
        Zn.call(this),
        this.type = "ShadowMaterial",
        this.color = new jn(0),
        this.transparent = !0,
        this.setValues(t)
    }
    function ws(t) {
        Er.call(this, t),
        this.type = "RawShaderMaterial"
    }
    function _s(t) {
        Zn.call(this),
        this.defines = {
            STANDARD: ""
        },
        this.type = "MeshStandardMaterial",
        this.color = new jn(16777215),
        this.roughness = .5,
        this.metalness = .5,
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new jn(0),
        this.emissiveIntensity = 1,
        this.emissiveMap = null,
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalMapType = Fe,
        this.normalScale = new ke(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.roughnessMap = null,
        this.metalnessMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.envMapIntensity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.setValues(t)
    }
    function Ms(t) {
        _s.call(this),
        this.defines = {
            PHYSICAL: ""
        },
        this.type = "MeshPhysicalMaterial",
        this.reflectivity = .5,
        this.clearCoat = 0,
        this.clearCoatRoughness = 0,
        this.setValues(t)
    }
    function Es(t) {
        Zn.call(this),
        this.type = "MeshPhongMaterial",
        this.color = new jn(16777215),
        this.specular = new jn(1118481),
        this.shininess = 30,
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new jn(0),
        this.emissiveIntensity = 1,
        this.emissiveMap = null,
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalMapType = Fe,
        this.normalScale = new ke(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.combine = nt,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.setValues(t)
    }
    function Ss(t) {
        Es.call(this),
        this.defines = {
            TOON: ""
        },
        this.type = "MeshToonMaterial",
        this.gradientMap = null,
        this.setValues(t)
    }
    function Ts(t) {
        Zn.call(this),
        this.type = "MeshNormalMaterial",
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalMapType = Fe,
        this.normalScale = new ke(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.fog = !1,
        this.lights = !1,
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.setValues(t)
    }
    function As(t) {
        Zn.call(this),
        this.type = "MeshLambertMaterial",
        this.color = new jn(16777215),
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new jn(0),
        this.emissiveIntensity = 1,
        this.emissiveMap = null,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.combine = nt,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.setValues(t)
    }
    function Ls(t) {
        Zn.call(this),
        this.defines = {
            MATCAP: ""
        },
        this.type = "MeshMatcapMaterial",
        this.color = new jn(16777215),
        this.matcap = null,
        this.map = null,
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalMapType = Fe,
        this.normalScale = new ke(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.alphaMap = null,
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.lights = !1,
        this.setValues(t)
    }
    function Rs(t) {
        Za.call(this),
        this.type = "LineDashedMaterial",
        this.scale = 1,
        this.dashSize = 3,
        this.gapSize = 1,
        this.setValues(t)
    }
    bs.prototype = Object.create(Zn.prototype),
    bs.prototype.constructor = bs,
    bs.prototype.isShadowMaterial = !0,
    bs.prototype.copy = function(t) {
        return Zn.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this
    }
    ,
    ws.prototype = Object.create(Er.prototype),
    ws.prototype.constructor = ws,
    ws.prototype.isRawShaderMaterial = !0,
    _s.prototype = Object.create(Zn.prototype),
    _s.prototype.constructor = _s,
    _s.prototype.isMeshStandardMaterial = !0,
    _s.prototype.copy = function(t) {
        return Zn.prototype.copy.call(this, t),
        this.defines = {
            STANDARD: ""
        },
        this.color.copy(t.color),
        this.roughness = t.roughness,
        this.metalness = t.metalness,
        this.map = t.map,
        this.lightMap = t.lightMap,
        this.lightMapIntensity = t.lightMapIntensity,
        this.aoMap = t.aoMap,
        this.aoMapIntensity = t.aoMapIntensity,
        this.emissive.copy(t.emissive),
        this.emissiveMap = t.emissiveMap,
        this.emissiveIntensity = t.emissiveIntensity,
        this.bumpMap = t.bumpMap,
        this.bumpScale = t.bumpScale,
        this.normalMap = t.normalMap,
        this.normalMapType = t.normalMapType,
        this.normalScale.copy(t.normalScale),
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this.roughnessMap = t.roughnessMap,
        this.metalnessMap = t.metalnessMap,
        this.alphaMap = t.alphaMap,
        this.envMap = t.envMap,
        this.envMapIntensity = t.envMapIntensity,
        this.refractionRatio = t.refractionRatio,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.wireframeLinecap = t.wireframeLinecap,
        this.wireframeLinejoin = t.wireframeLinejoin,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.morphNormals = t.morphNormals,
        this
    }
    ,
    Ms.prototype = Object.create(_s.prototype),
    Ms.prototype.constructor = Ms,
    Ms.prototype.isMeshPhysicalMaterial = !0,
    Ms.prototype.copy = function(t) {
        return _s.prototype.copy.call(this, t),
        this.defines = {
            PHYSICAL: ""
        },
        this.reflectivity = t.reflectivity,
        this.clearCoat = t.clearCoat,
        this.clearCoatRoughness = t.clearCoatRoughness,
        this
    }
    ,
    Es.prototype = Object.create(Zn.prototype),
    Es.prototype.constructor = Es,
    Es.prototype.isMeshPhongMaterial = !0,
    Es.prototype.copy = function(t) {
        return Zn.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this.specular.copy(t.specular),
        this.shininess = t.shininess,
        this.map = t.map,
        this.lightMap = t.lightMap,
        this.lightMapIntensity = t.lightMapIntensity,
        this.aoMap = t.aoMap,
        this.aoMapIntensity = t.aoMapIntensity,
        this.emissive.copy(t.emissive),
        this.emissiveMap = t.emissiveMap,
        this.emissiveIntensity = t.emissiveIntensity,
        this.bumpMap = t.bumpMap,
        this.bumpScale = t.bumpScale,
        this.normalMap = t.normalMap,
        this.normalMapType = t.normalMapType,
        this.normalScale.copy(t.normalScale),
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this.specularMap = t.specularMap,
        this.alphaMap = t.alphaMap,
        this.envMap = t.envMap,
        this.combine = t.combine,
        this.reflectivity = t.reflectivity,
        this.refractionRatio = t.refractionRatio,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.wireframeLinecap = t.wireframeLinecap,
        this.wireframeLinejoin = t.wireframeLinejoin,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.morphNormals = t.morphNormals,
        this
    }
    ,
    Ss.prototype = Object.create(Es.prototype),
    Ss.prototype.constructor = Ss,
    Ss.prototype.isMeshToonMaterial = !0,
    Ss.prototype.copy = function(t) {
        return Es.prototype.copy.call(this, t),
        this.gradientMap = t.gradientMap,
        this
    }
    ,
    Ts.prototype = Object.create(Zn.prototype),
    Ts.prototype.constructor = Ts,
    Ts.prototype.isMeshNormalMaterial = !0,
    Ts.prototype.copy = function(t) {
        return Zn.prototype.copy.call(this, t),
        this.bumpMap = t.bumpMap,
        this.bumpScale = t.bumpScale,
        this.normalMap = t.normalMap,
        this.normalMapType = t.normalMapType,
        this.normalScale.copy(t.normalScale),
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.morphNormals = t.morphNormals,
        this
    }
    ,
    As.prototype = Object.create(Zn.prototype),
    As.prototype.constructor = As,
    As.prototype.isMeshLambertMaterial = !0,
    As.prototype.copy = function(t) {
        return Zn.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this.map = t.map,
        this.lightMap = t.lightMap,
        this.lightMapIntensity = t.lightMapIntensity,
        this.aoMap = t.aoMap,
        this.aoMapIntensity = t.aoMapIntensity,
        this.emissive.copy(t.emissive),
        this.emissiveMap = t.emissiveMap,
        this.emissiveIntensity = t.emissiveIntensity,
        this.specularMap = t.specularMap,
        this.alphaMap = t.alphaMap,
        this.envMap = t.envMap,
        this.combine = t.combine,
        this.reflectivity = t.reflectivity,
        this.refractionRatio = t.refractionRatio,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.wireframeLinecap = t.wireframeLinecap,
        this.wireframeLinejoin = t.wireframeLinejoin,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.morphNormals = t.morphNormals,
        this
    }
    ,
    Ls.prototype = Object.create(Zn.prototype),
    Ls.prototype.constructor = Ls,
    Ls.prototype.isMeshMatcapMaterial = !0,
    Ls.prototype.copy = function(t) {
        return Zn.prototype.copy.call(this, t),
        this.defines = {
            MATCAP: ""
        },
        this.color.copy(t.color),
        this.matcap = t.matcap,
        this.map = t.map,
        this.bumpMap = t.bumpMap,
        this.bumpScale = t.bumpScale,
        this.normalMap = t.normalMap,
        this.normalMapType = t.normalMapType,
        this.normalScale.copy(t.normalScale),
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this.alphaMap = t.alphaMap,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.morphNormals = t.morphNormals,
        this
    }
    ,
    Rs.prototype = Object.create(Za.prototype),
    Rs.prototype.constructor = Rs,
    Rs.prototype.isLineDashedMaterial = !0,
    Rs.prototype.copy = function(t) {
        return Za.prototype.copy.call(this, t),
        this.scale = t.scale,
        this.dashSize = t.dashSize,
        this.gapSize = t.gapSize,
        this
    }
    ;
    var Ps = Object.freeze({
        ShadowMaterial: bs,
        SpriteMaterial: ja,
        RawShaderMaterial: ws,
        ShaderMaterial: Er,
        PointsMaterial: to,
        MeshPhysicalMaterial: Ms,
        MeshStandardMaterial: _s,
        MeshPhongMaterial: Es,
        MeshToonMaterial: Ss,
        MeshNormalMaterial: Ts,
        MeshLambertMaterial: As,
        MeshDepthMaterial: ba,
        MeshDistanceMaterial: wa,
        MeshBasicMaterial: Qn,
        MeshMatcapMaterial: Ls,
        LineDashedMaterial: Rs,
        LineBasicMaterial: Za,
        Material: Zn
    })
      , Cs = {
        arraySlice: function(t, e, n) {
            return Cs.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length)) : t.slice(e, n)
        },
        convertArray: function(t, e, n) {
            return !t || !n && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
        },
        isTypedArray: function(t) {
            return ArrayBuffer.isView(t) && !(t instanceof DataView)
        },
        getKeyframeOrder: function(t) {
            for (var e = t.length, n = new Array(e), r = 0; r !== e; ++r)
                n[r] = r;
            return n.sort(function(e, n) {
                return t[e] - t[n]
            }),
            n
        },
        sortedArray: function(t, e, n) {
            for (var r = t.length, i = new t.constructor(r), a = 0, o = 0; o !== r; ++a)
                for (var s = n[a] * e, c = 0; c !== e; ++c)
                    i[o++] = t[s + c];
            return i
        },
        flattenJSON: function(t, e, n, r) {
            for (var i = 1, a = t[0]; void 0 !== a && void 0 === a[r]; )
                a = t[i++];
            if (void 0 !== a) {
                var o = a[r];
                if (void 0 !== o)
                    if (Array.isArray(o))
                        do {
                            void 0 !== (o = a[r]) && (e.push(a.time),
                            n.push.apply(n, o)),
                            a = t[i++]
                        } while (void 0 !== a);
                    else if (void 0 !== o.toArray)
                        do {
                            void 0 !== (o = a[r]) && (e.push(a.time),
                            o.toArray(n, n.length)),
                            a = t[i++]
                        } while (void 0 !== a);
                    else
                        do {
                            void 0 !== (o = a[r]) && (e.push(a.time),
                            n.push(o)),
                            a = t[i++]
                        } while (void 0 !== a)
            }
        }
    };
    function Os(t, e, n, r) {
        this.parameterPositions = t,
        this._cachedIndex = 0,
        this.resultBuffer = void 0 !== r ? r : new e.constructor(n),
        this.sampleValues = e,
        this.valueSize = n
    }
    function Is(t, e, n, r) {
        Os.call(this, t, e, n, r),
        this._weightPrev = -0,
        this._offsetPrev = -0,
        this._weightNext = -0,
        this._offsetNext = -0
    }
    function Ds(t, e, n, r) {
        Os.call(this, t, e, n, r)
    }
    function Ns(t, e, n, r) {
        Os.call(this, t, e, n, r)
    }
    function Bs(t, e, n, r) {
        if (void 0 === t)
            throw new Error("THREE.KeyframeTrack: track name is undefined");
        if (void 0 === e || 0 === e.length)
            throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
        this.name = t,
        this.times = Cs.convertArray(e, this.TimeBufferType),
        this.values = Cs.convertArray(n, this.ValueBufferType),
        this.setInterpolation(r || this.DefaultInterpolation)
    }
    function zs(t, e, n) {
        Bs.call(this, t, e, n)
    }
    function Us(t, e, n, r) {
        Bs.call(this, t, e, n, r)
    }
    function Gs(t, e, n, r) {
        Bs.call(this, t, e, n, r)
    }
    function Fs(t, e, n, r) {
        Os.call(this, t, e, n, r)
    }
    function Hs(t, e, n, r) {
        Bs.call(this, t, e, n, r)
    }
    function Vs(t, e, n, r) {
        Bs.call(this, t, e, n, r)
    }
    function ks(t, e, n, r) {
        Bs.call(this, t, e, n, r)
    }
    function js(t, e, n) {
        this.name = t,
        this.tracks = n,
        this.duration = void 0 !== e ? e : -1,
        this.uuid = Ve.generateUUID(),
        this.duration < 0 && this.resetDuration()
    }
    function Ws(t) {
        if (void 0 === t.type)
            throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
        var e = function(t) {
            switch (t.toLowerCase()) {
            case "scalar":
            case "double":
            case "float":
            case "number":
            case "integer":
                return Gs;
            case "vector":
            case "vector2":
            case "vector3":
            case "vector4":
                return ks;
            case "color":
                return Us;
            case "quaternion":
                return Hs;
            case "bool":
            case "boolean":
                return zs;
            case "string":
                return Vs
            }
            throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t)
        }(t.type);
        if (void 0 === t.times) {
            var n = []
              , r = [];
            Cs.flattenJSON(t.keys, n, r, "value"),
            t.times = n,
            t.values = r
        }
        return void 0 !== e.parse ? e.parse(t) : new e(t.name,t.times,t.values,t.interpolation)
    }
    Object.assign(Os.prototype, {
        evaluate: function(t) {
            var e = this.parameterPositions
              , n = this._cachedIndex
              , r = e[n]
              , i = e[n - 1];
            t: {
                e: {
                    var a;
                    n: {
                        r: if (!(t < r)) {
                            for (var o = n + 2; ; ) {
                                if (void 0 === r) {
                                    if (t < i)
                                        break r;
                                    return n = e.length,
                                    this._cachedIndex = n,
                                    this.afterEnd_(n - 1, t, i)
                                }
                                if (n === o)
                                    break;
                                if (i = r,
                                t < (r = e[++n]))
                                    break e
                            }
                            a = e.length;
                            break n
                        }
                        if (t >= i)
                            break t;
                        var s = e[1];
                        t < s && (n = 2,
                        i = s);
                        for (o = n - 2; ; ) {
                            if (void 0 === i)
                                return this._cachedIndex = 0,
                                this.beforeStart_(0, t, r);
                            if (n === o)
                                break;
                            if (r = i,
                            t >= (i = e[--n - 1]))
                                break e
                        }
                        a = n,
                        n = 0
                    }
                    for (; n < a; ) {
                        var c = n + a >>> 1;
                        t < e[c] ? a = c : n = c + 1
                    }
                    if (r = e[n],
                    void 0 === (i = e[n - 1]))
                        return this._cachedIndex = 0,
                        this.beforeStart_(0, t, r);
                    if (void 0 === r)
                        return n = e.length,
                        this._cachedIndex = n,
                        this.afterEnd_(n - 1, i, t)
                }
                this._cachedIndex = n,
                this.intervalChanged_(n, i, r)
            }
            return this.interpolate_(n, i, t, r)
        },
        settings: null,
        DefaultSettings_: {},
        getSettings_: function() {
            return this.settings || this.DefaultSettings_
        },
        copySampleValue_: function(t) {
            for (var e = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = t * r, a = 0; a !== r; ++a)
                e[a] = n[i + a];
            return e
        },
        interpolate_: function() {
            throw new Error("call to abstract method")
        },
        intervalChanged_: function() {}
    }),
    //!\ DECLARE ALIAS AFTER assign prototype !
    Object.assign(Os.prototype, {
        beforeStart_: Os.prototype.copySampleValue_,
        afterEnd_: Os.prototype.copySampleValue_
    }),
    Is.prototype = Object.assign(Object.create(Os.prototype), {
        constructor: Is,
        DefaultSettings_: {
            endingStart: Ee,
            endingEnd: Ee
        },
        intervalChanged_: function(t, e, n) {
            var r = this.parameterPositions
              , i = t - 2
              , a = t + 1
              , o = r[i]
              , s = r[a];
            if (void 0 === o)
                switch (this.getSettings_().endingStart) {
                case Se:
                    i = t,
                    o = 2 * e - n;
                    break;
                case Te:
                    o = e + r[i = r.length - 2] - r[i + 1];
                    break;
                default:
                    i = t,
                    o = n
                }
            if (void 0 === s)
                switch (this.getSettings_().endingEnd) {
                case Se:
                    a = t,
                    s = 2 * n - e;
                    break;
                case Te:
                    a = 1,
                    s = n + r[1] - r[0];
                    break;
                default:
                    a = t - 1,
                    s = e
                }
            var c = .5 * (n - e)
              , u = this.valueSize;
            this._weightPrev = c / (e - o),
            this._weightNext = c / (s - n),
            this._offsetPrev = i * u,
            this._offsetNext = a * u
        },
        interpolate_: function(t, e, n, r) {
            for (var i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = s - o, u = this._offsetPrev, h = this._offsetNext, l = this._weightPrev, d = this._weightNext, p = (n - e) / (r - e), f = p * p, m = f * p, g = -l * m + 2 * l * f - l * p, v = (1 + l) * m + (-1.5 - 2 * l) * f + (-.5 + l) * p + 1, y = (-1 - d) * m + (1.5 + d) * f + .5 * p, x = d * m - d * f, b = 0; b !== o; ++b)
                i[b] = g * a[u + b] + v * a[c + b] + y * a[s + b] + x * a[h + b];
            return i
        }
    }),
    Ds.prototype = Object.assign(Object.create(Os.prototype), {
        constructor: Ds,
        interpolate_: function(t, e, n, r) {
            for (var i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = s - o, u = (n - e) / (r - e), h = 1 - u, l = 0; l !== o; ++l)
                i[l] = a[c + l] * h + a[s + l] * u;
            return i
        }
    }),
    Ns.prototype = Object.assign(Object.create(Os.prototype), {
        constructor: Ns,
        interpolate_: function(t) {
            return this.copySampleValue_(t - 1)
        }
    }),
    Object.assign(Bs, {
        toJSON: function(t) {
            var e, n = t.constructor;
            if (void 0 !== n.toJSON)
                e = n.toJSON(t);
            else {
                e = {
                    name: t.name,
                    times: Cs.convertArray(t.times, Array),
                    values: Cs.convertArray(t.values, Array)
                };
                var r = t.getInterpolation();
                r !== t.DefaultInterpolation && (e.interpolation = r)
            }
            return e.type = t.ValueTypeName,
            e
        }
    }),
    Object.assign(Bs.prototype, {
        constructor: Bs,
        TimeBufferType: Float32Array,
        ValueBufferType: Float32Array,
        DefaultInterpolation: _e,
        InterpolantFactoryMethodDiscrete: function(t) {
            return new Ns(this.times,this.values,this.getValueSize(),t)
        },
        InterpolantFactoryMethodLinear: function(t) {
            return new Ds(this.times,this.values,this.getValueSize(),t)
        },
        InterpolantFactoryMethodSmooth: function(t) {
            return new Is(this.times,this.values,this.getValueSize(),t)
        },
        setInterpolation: function(t) {
            var e;
            switch (t) {
            case we:
                e = this.InterpolantFactoryMethodDiscrete;
                break;
            case _e:
                e = this.InterpolantFactoryMethodLinear;
                break;
            case Me:
                e = this.InterpolantFactoryMethodSmooth
            }
            if (void 0 === e) {
                var n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                if (void 0 === this.createInterpolant) {
                    if (t === this.DefaultInterpolation)
                        throw new Error(n);
                    this.setInterpolation(this.DefaultInterpolation)
                }
                return console.warn("THREE.KeyframeTrack:", n),
                this
            }
            return this.createInterpolant = e,
            this
        },
        getInterpolation: function() {
            switch (this.createInterpolant) {
            case this.InterpolantFactoryMethodDiscrete:
                return we;
            case this.InterpolantFactoryMethodLinear:
                return _e;
            case this.InterpolantFactoryMethodSmooth:
                return Me
            }
        },
        getValueSize: function() {
            return this.values.length / this.times.length
        },
        shift: function(t) {
            if (0 !== t)
                for (var e = this.times, n = 0, r = e.length; n !== r; ++n)
                    e[n] += t;
            return this
        },
        scale: function(t) {
            if (1 !== t)
                for (var e = this.times, n = 0, r = e.length; n !== r; ++n)
                    e[n] *= t;
            return this
        },
        trim: function(t, e) {
            for (var n = this.times, r = n.length, i = 0, a = r - 1; i !== r && n[i] < t; )
                ++i;
            for (; -1 !== a && n[a] > e; )
                --a;
            if (++a,
            0 !== i || a !== r) {
                i >= a && (i = (a = Math.max(a, 1)) - 1);
                var o = this.getValueSize();
                this.times = Cs.arraySlice(n, i, a),
                this.values = Cs.arraySlice(this.values, i * o, a * o)
            }
            return this
        },
        validate: function() {
            var t = !0
              , e = this.getValueSize();
            e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this),
            t = !1);
            var n = this.times
              , r = this.values
              , i = n.length;
            0 === i && (console.error("THREE.KeyframeTrack: Track is empty.", this),
            t = !1);
            for (var a = null, o = 0; o !== i; o++) {
                var s = n[o];
                if ("number" == typeof s && isNaN(s)) {
                    console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, s),
                    t = !1;
                    break
                }
                if (null !== a && a > s) {
                    console.error("THREE.KeyframeTrack: Out of order keys.", this, o, s, a),
                    t = !1;
                    break
                }
                a = s
            }
            if (void 0 !== r && Cs.isTypedArray(r)) {
                o = 0;
                for (var c = r.length; o !== c; ++o) {
                    var u = r[o];
                    if (isNaN(u)) {
                        console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, u),
                        t = !1;
                        break
                    }
                }
            }
            return t
        },
        optimize: function() {
            for (var t = this.times, e = this.values, n = this.getValueSize(), r = this.getInterpolation() === Me, i = 1, a = t.length - 1, o = 1; o < a; ++o) {
                var s = !1
                  , c = t[o];
                if (c !== t[o + 1] && (1 !== o || c !== c[0]))
                    if (r)
                        s = !0;
                    else
                        for (var u = o * n, h = u - n, l = u + n, d = 0; d !== n; ++d) {
                            var p = e[u + d];
                            if (p !== e[h + d] || p !== e[l + d]) {
                                s = !0;
                                break
                            }
                        }
                if (s) {
                    if (o !== i) {
                        t[i] = t[o];
                        var f = o * n
                          , m = i * n;
                        for (d = 0; d !== n; ++d)
                            e[m + d] = e[f + d]
                    }
                    ++i
                }
            }
            if (a > 0) {
                t[i] = t[a];
                for (f = a * n,
                m = i * n,
                d = 0; d !== n; ++d)
                    e[m + d] = e[f + d];
                ++i
            }
            return i !== t.length && (this.times = Cs.arraySlice(t, 0, i),
            this.values = Cs.arraySlice(e, 0, i * n)),
            this
        },
        clone: function() {
            var t = Cs.arraySlice(this.times, 0)
              , e = Cs.arraySlice(this.values, 0)
              , n = new (0,
            this.constructor)(this.name,t,e);
            return n.createInterpolant = this.createInterpolant,
            n
        }
    }),
    zs.prototype = Object.assign(Object.create(Bs.prototype), {
        constructor: zs,
        ValueTypeName: "bool",
        ValueBufferType: Array,
        DefaultInterpolation: we,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    }),
    Us.prototype = Object.assign(Object.create(Bs.prototype), {
        constructor: Us,
        ValueTypeName: "color"
    }),
    Gs.prototype = Object.assign(Object.create(Bs.prototype), {
        constructor: Gs,
        ValueTypeName: "number"
    }),
    Fs.prototype = Object.assign(Object.create(Os.prototype), {
        constructor: Fs,
        interpolate_: function(t, e, n, r) {
            for (var i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = (n - e) / (r - e), u = s + o; s !== u; s += 4)
                je.slerpFlat(i, 0, a, s - o, a, s, c);
            return i
        }
    }),
    Hs.prototype = Object.assign(Object.create(Bs.prototype), {
        constructor: Hs,
        ValueTypeName: "quaternion",
        DefaultInterpolation: _e,
        InterpolantFactoryMethodLinear: function(t) {
            return new Fs(this.times,this.values,this.getValueSize(),t)
        },
        InterpolantFactoryMethodSmooth: void 0
    }),
    Vs.prototype = Object.assign(Object.create(Bs.prototype), {
        constructor: Vs,
        ValueTypeName: "string",
        ValueBufferType: Array,
        DefaultInterpolation: we,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    }),
    ks.prototype = Object.assign(Object.create(Bs.prototype), {
        constructor: ks,
        ValueTypeName: "vector"
    }),
    Object.assign(js, {
        parse: function(t) {
            for (var e = [], n = t.tracks, r = 1 / (t.fps || 1), i = 0, a = n.length; i !== a; ++i)
                e.push(Ws(n[i]).scale(r));
            return new js(t.name,t.duration,e)
        },
        toJSON: function(t) {
            for (var e = [], n = t.tracks, r = {
                name: t.name,
                duration: t.duration,
                tracks: e,
                uuid: t.uuid
            }, i = 0, a = n.length; i !== a; ++i)
                e.push(Bs.toJSON(n[i]));
            return r
        },
        CreateFromMorphTargetSequence: function(t, e, n, r) {
            for (var i = e.length, a = [], o = 0; o < i; o++) {
                var s = []
                  , c = [];
                s.push((o + i - 1) % i, o, (o + 1) % i),
                c.push(0, 1, 0);
                var u = Cs.getKeyframeOrder(s);
                s = Cs.sortedArray(s, 1, u),
                c = Cs.sortedArray(c, 1, u),
                r || 0 !== s[0] || (s.push(i),
                c.push(c[0])),
                a.push(new Gs(".morphTargetInfluences[" + e[o].name + "]",s,c).scale(1 / n))
            }
            return new js(t,-1,a)
        },
        findByName: function(t, e) {
            var n = t;
            if (!Array.isArray(t)) {
                var r = t;
                n = r.geometry && r.geometry.animations || r.animations
            }
            for (var i = 0; i < n.length; i++)
                if (n[i].name === e)
                    return n[i];
            return null
        },
        CreateClipsFromMorphTargetSequences: function(t, e, n) {
            for (var r = {}, i = /^([\w-]*?)([\d]+)$/, a = 0, o = t.length; a < o; a++) {
                var s = t[a]
                  , c = s.name.match(i);
                if (c && c.length > 1) {
                    var u = r[l = c[1]];
                    u || (r[l] = u = []),
                    u.push(s)
                }
            }
            var h = [];
            for (var l in r)
                h.push(js.CreateFromMorphTargetSequence(l, r[l], e, n));
            return h
        },
        parseAnimation: function(t, e) {
            if (!t)
                return console.error("THREE.AnimationClip: No animation in JSONLoader data."),
                null;
            for (var n = function(t, e, n, r, i) {
                if (0 !== n.length) {
                    var a = []
                      , o = [];
                    Cs.flattenJSON(n, a, o, r),
                    0 !== a.length && i.push(new t(e,a,o))
                }
            }, r = [], i = t.name || "default", a = t.length || -1, o = t.fps || 30, s = t.hierarchy || [], c = 0; c < s.length; c++) {
                var u = s[c].keys;
                if (u && 0 !== u.length)
                    if (u[0].morphTargets) {
                        for (var h = {}, l = 0; l < u.length; l++)
                            if (u[l].morphTargets)
                                for (var d = 0; d < u[l].morphTargets.length; d++)
                                    h[u[l].morphTargets[d]] = -1;
                        for (var p in h) {
                            var f = []
                              , m = [];
                            for (d = 0; d !== u[l].morphTargets.length; ++d) {
                                var g = u[l];
                                f.push(g.time),
                                m.push(g.morphTarget === p ? 1 : 0)
                            }
                            r.push(new Gs(".morphTargetInfluence[" + p + "]",f,m))
                        }
                        a = h.length * (o || 1)
                    } else {
                        var v = ".bones[" + e[c].name + "]";
                        n(ks, v + ".position", u, "pos", r),
                        n(Hs, v + ".quaternion", u, "rot", r),
                        n(ks, v + ".scale", u, "scl", r)
                    }
            }
            return 0 === r.length ? null : new js(i,a,r)
        }
    }),
    Object.assign(js.prototype, {
        resetDuration: function() {
            for (var t = 0, e = 0, n = this.tracks.length; e !== n; ++e) {
                var r = this.tracks[e];
                t = Math.max(t, r.times[r.times.length - 1])
            }
            return this.duration = t,
            this
        },
        trim: function() {
            for (var t = 0; t < this.tracks.length; t++)
                this.tracks[t].trim(0, this.duration);
            return this
        },
        validate: function() {
            for (var t = !0, e = 0; e < this.tracks.length; e++)
                t = t && this.tracks[e].validate();
            return t
        },
        optimize: function() {
            for (var t = 0; t < this.tracks.length; t++)
                this.tracks[t].optimize();
            return this
        },
        clone: function() {
            for (var t = [], e = 0; e < this.tracks.length; e++)
                t.push(this.tracks[e].clone());
            return new js(this.name,this.duration,t)
        }
    });
    var qs = {
        enabled: !1,
        files: {},
        add: function(t, e) {
            !1 !== this.enabled && (this.files[t] = e)
        },
        get: function(t) {
            if (!1 !== this.enabled)
                return this.files[t]
        },
        remove: function(t) {
            delete this.files[t]
        },
        clear: function() {
            this.files = {}
        }
    };
    function Xs(t, e, n) {
        var r = this
          , i = !1
          , a = 0
          , o = 0
          , s = void 0;
        this.onStart = void 0,
        this.onLoad = t,
        this.onProgress = e,
        this.onError = n,
        this.itemStart = function(t) {
            o++,
            !1 === i && void 0 !== r.onStart && r.onStart(t, a, o),
            i = !0
        }
        ,
        this.itemEnd = function(t) {
            a++,
            void 0 !== r.onProgress && r.onProgress(t, a, o),
            a === o && (i = !1,
            void 0 !== r.onLoad && r.onLoad())
        }
        ,
        this.itemError = function(t) {
            void 0 !== r.onError && r.onError(t)
        }
        ,
        this.resolveURL = function(t) {
            return s ? s(t) : t
        }
        ,
        this.setURLModifier = function(t) {
            return s = t,
            this
        }
    }
    var Ys = new Xs
      , Js = {};
    function Zs(t) {
        this.manager = void 0 !== t ? t : Ys
    }
    function Qs(t) {
        this.manager = void 0 !== t ? t : Ys
    }
    function Ks(t) {
        this.manager = void 0 !== t ? t : Ys,
        this._parser = null
    }
    function $s(t) {
        this.manager = void 0 !== t ? t : Ys,
        this._parser = null
    }
    function tc(t) {
        this.manager = void 0 !== t ? t : Ys
    }
    function ec(t) {
        this.manager = void 0 !== t ? t : Ys
    }
    function nc(t) {
        this.manager = void 0 !== t ? t : Ys
    }
    function rc() {
        this.type = "Curve",
        this.arcLengthDivisions = 200
    }
    function ic(t, e, n, r, i, a, o, s) {
        rc.call(this),
        this.type = "EllipseCurve",
        this.aX = t || 0,
        this.aY = e || 0,
        this.xRadius = n || 1,
        this.yRadius = r || 1,
        this.aStartAngle = i || 0,
        this.aEndAngle = a || 2 * Math.PI,
        this.aClockwise = o || !1,
        this.aRotation = s || 0
    }
    function ac(t, e, n, r, i, a) {
        ic.call(this, t, e, n, n, r, i, a),
        this.type = "ArcCurve"
    }
    function oc() {
        var t = 0
          , e = 0
          , n = 0
          , r = 0;
        function i(i, a, o, s) {
            t = i,
            e = o,
            n = -3 * i + 3 * a - 2 * o - s,
            r = 2 * i - 2 * a + o + s
        }
        return {
            initCatmullRom: function(t, e, n, r, a) {
                i(e, n, a * (n - t), a * (r - e))
            },
            initNonuniformCatmullRom: function(t, e, n, r, a, o, s) {
                var c = (e - t) / a - (n - t) / (a + o) + (n - e) / o
                  , u = (n - e) / o - (r - e) / (o + s) + (r - n) / s;
                i(e, n, c *= o, u *= o)
            },
            calc: function(i) {
                var a = i * i;
                return t + e * i + n * a + r * (a * i)
            }
        }
    }
    Object.assign(Zs.prototype, {
        load: function(t, e, n, r) {
            void 0 === t && (t = ""),
            void 0 !== this.path && (t = this.path + t),
            t = this.manager.resolveURL(t);
            var i = this
              , a = qs.get(t);
            if (void 0 !== a)
                return i.manager.itemStart(t),
                setTimeout(function() {
                    e && e(a),
                    i.manager.itemEnd(t)
                }, 0),
                a;
            if (void 0 === Js[t]) {
                var o = t.match(/^data:(.*?)(;base64)?,(.*)$/);
                if (o) {
                    var s = o[1]
                      , c = !!o[2]
                      , u = o[3];
                    u = decodeURIComponent(u),
                    c && (u = atob(u));
                    try {
                        var h, l = (this.responseType || "").toLowerCase();
                        switch (l) {
                        case "arraybuffer":
                        case "blob":
                            for (var d = new Uint8Array(u.length), p = 0; p < u.length; p++)
                                d[p] = u.charCodeAt(p);
                            h = "blob" === l ? new Blob([d.buffer],{
                                type: s
                            }) : d.buffer;
                            break;
                        case "document":
                            var f = new DOMParser;
                            h = f.parseFromString(u, s);
                            break;
                        case "json":
                            h = JSON.parse(u);
                            break;
                        default:
                            h = u
                        }
                        setTimeout(function() {
                            e && e(h),
                            i.manager.itemEnd(t)
                        }, 0)
                    } catch (e) {
                        setTimeout(function() {
                            r && r(e),
                            i.manager.itemError(t),
                            i.manager.itemEnd(t)
                        }, 0)
                    }
                } else {
                    Js[t] = [],
                    Js[t].push({
                        onLoad: e,
                        onProgress: n,
                        onError: r
                    });
                    var m = new XMLHttpRequest;
                    for (var g in m.open("GET", t, !0),
                    m.addEventListener("load", function(e) {
                        var n = this.response;
                        qs.add(t, n);
                        var r = Js[t];
                        if (delete Js[t],
                        200 === this.status || 0 === this.status) {
                            0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received.");
                            for (var a = 0, o = r.length; a < o; a++) {
                                (s = r[a]).onLoad && s.onLoad(n)
                            }
                            i.manager.itemEnd(t)
                        } else {
                            for (a = 0,
                            o = r.length; a < o; a++) {
                                var s;
                                (s = r[a]).onError && s.onError(e)
                            }
                            i.manager.itemError(t),
                            i.manager.itemEnd(t)
                        }
                    }, !1),
                    m.addEventListener("progress", function(e) {
                        for (var n = Js[t], r = 0, i = n.length; r < i; r++) {
                            var a = n[r];
                            a.onProgress && a.onProgress(e)
                        }
                    }, !1),
                    m.addEventListener("error", function(e) {
                        var n = Js[t];
                        delete Js[t];
                        for (var r = 0, a = n.length; r < a; r++) {
                            var o = n[r];
                            o.onError && o.onError(e)
                        }
                        i.manager.itemError(t),
                        i.manager.itemEnd(t)
                    }, !1),
                    m.addEventListener("abort", function(e) {
                        var n = Js[t];
                        delete Js[t];
                        for (var r = 0, a = n.length; r < a; r++) {
                            var o = n[r];
                            o.onError && o.onError(e)
                        }
                        i.manager.itemError(t),
                        i.manager.itemEnd(t)
                    }, !1),
                    void 0 !== this.responseType && (m.responseType = this.responseType),
                    void 0 !== this.withCredentials && (m.withCredentials = this.withCredentials),
                    m.overrideMimeType && m.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain"),
                    this.requestHeader)
                        m.setRequestHeader(g, this.requestHeader[g]);
                    m.send(null)
                }
                return i.manager.itemStart(t),
                m
            }
            Js[t].push({
                onLoad: e,
                onProgress: n,
                onError: r
            })
        },
        setPath: function(t) {
            return this.path = t,
            this
        },
        setResponseType: function(t) {
            return this.responseType = t,
            this
        },
        setWithCredentials: function(t) {
            return this.withCredentials = t,
            this
        },
        setMimeType: function(t) {
            return this.mimeType = t,
            this
        },
        setRequestHeader: function(t) {
            return this.requestHeader = t,
            this
        }
    }),
    Object.assign(Qs.prototype, {
        load: function(t, e, n, r) {
            var i = this
              , a = new Zs(i.manager);
            a.setPath(i.path),
            a.load(t, function(t) {
                e(i.parse(JSON.parse(t)))
            }, n, r)
        },
        parse: function(t) {
            for (var e = [], n = 0; n < t.length; n++) {
                var r = js.parse(t[n]);
                e.push(r)
            }
            return e
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    }),
    Object.assign(Ks.prototype, {
        load: function(t, e, n, r) {
            var i = this
              , a = []
              , o = new ro;
            o.image = a;
            var s = new Zs(this.manager);
            function c(c) {
                s.load(t[c], function(t) {
                    var n = i._parser(t, !0);
                    a[c] = {
                        width: n.width,
                        height: n.height,
                        format: n.format,
                        mipmaps: n.mipmaps
                    },
                    6 === (u += 1) && (1 === n.mipmapCount && (o.minFilter = St),
                    o.format = n.format,
                    o.needsUpdate = !0,
                    e && e(o))
                }, n, r)
            }
            if (s.setPath(this.path),
            s.setResponseType("arraybuffer"),
            Array.isArray(t))
                for (var u = 0, h = 0, l = t.length; h < l; ++h)
                    c(h);
            else
                s.load(t, function(t) {
                    var n = i._parser(t, !0);
                    if (n.isCubemap)
                        for (var r = n.mipmaps.length / n.mipmapCount, s = 0; s < r; s++) {
                            a[s] = {
                                mipmaps: []
                            };
                            for (var c = 0; c < n.mipmapCount; c++)
                                a[s].mipmaps.push(n.mipmaps[s * n.mipmapCount + c]),
                                a[s].format = n.format,
                                a[s].width = n.width,
                                a[s].height = n.height
                        }
                    else
                        o.image.width = n.width,
                        o.image.height = n.height,
                        o.mipmaps = n.mipmaps;
                    1 === n.mipmapCount && (o.minFilter = St),
                    o.format = n.format,
                    o.needsUpdate = !0,
                    e && e(o)
                }, n, r);
            return o
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    }),
    Object.assign($s.prototype, {
        load: function(t, e, n, r) {
            var i = this
              , a = new Ir
              , o = new Zs(this.manager);
            return o.setResponseType("arraybuffer"),
            o.setPath(this.path),
            o.load(t, function(t) {
                var n = i._parser(t);
                n && (void 0 !== n.image ? a.image = n.image : void 0 !== n.data && (a.image.width = n.width,
                a.image.height = n.height,
                a.image.data = n.data),
                a.wrapS = void 0 !== n.wrapS ? n.wrapS : bt,
                a.wrapT = void 0 !== n.wrapT ? n.wrapT : bt,
                a.magFilter = void 0 !== n.magFilter ? n.magFilter : St,
                a.minFilter = void 0 !== n.minFilter ? n.minFilter : At,
                a.anisotropy = void 0 !== n.anisotropy ? n.anisotropy : 1,
                void 0 !== n.format && (a.format = n.format),
                void 0 !== n.type && (a.type = n.type),
                void 0 !== n.mipmaps && (a.mipmaps = n.mipmaps),
                1 === n.mipmapCount && (a.minFilter = St),
                a.needsUpdate = !0,
                e && e(a, n))
            }, n, r),
            a
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    }),
    Object.assign(tc.prototype, {
        crossOrigin: "anonymous",
        load: function(t, e, n, r) {
            void 0 === t && (t = ""),
            void 0 !== this.path && (t = this.path + t),
            t = this.manager.resolveURL(t);
            var i = this
              , a = qs.get(t);
            if (void 0 !== a)
                return i.manager.itemStart(t),
                setTimeout(function() {
                    e && e(a),
                    i.manager.itemEnd(t)
                }, 0),
                a;
            var o = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
            function s() {
                o.removeEventListener("load", s, !1),
                o.removeEventListener("error", c, !1),
                qs.add(t, this),
                e && e(this),
                i.manager.itemEnd(t)
            }
            function c(e) {
                o.removeEventListener("load", s, !1),
                o.removeEventListener("error", c, !1),
                r && r(e),
                i.manager.itemError(t),
                i.manager.itemEnd(t)
            }
            return o.addEventListener("load", s, !1),
            o.addEventListener("error", c, !1),
            "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (o.crossOrigin = this.crossOrigin),
            i.manager.itemStart(t),
            o.src = t,
            o
        },
        setCrossOrigin: function(t) {
            return this.crossOrigin = t,
            this
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    }),
    Object.assign(ec.prototype, {
        crossOrigin: "anonymous",
        load: function(t, e, n, r) {
            var i = new ti
              , a = new tc(this.manager);
            a.setCrossOrigin(this.crossOrigin),
            a.setPath(this.path);
            var o = 0;
            function s(n) {
                a.load(t[n], function(t) {
                    i.images[n] = t,
                    6 === ++o && (i.needsUpdate = !0,
                    e && e(i))
                }, void 0, r)
            }
            for (var c = 0; c < t.length; ++c)
                s(c);
            return i
        },
        setCrossOrigin: function(t) {
            return this.crossOrigin = t,
            this
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    }),
    Object.assign(nc.prototype, {
        crossOrigin: "anonymous",
        load: function(t, e, n, r) {
            var i = new on
              , a = new tc(this.manager);
            return a.setCrossOrigin(this.crossOrigin),
            a.setPath(this.path),
            a.load(t, function(n) {
                i.image = n;
                var r = t.search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/);
                i.format = r ? Ht : Vt,
                i.needsUpdate = !0,
                void 0 !== e && e(i)
            }, n, r),
            i
        },
        setCrossOrigin: function(t) {
            return this.crossOrigin = t,
            this
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    }),
    Object.assign(rc.prototype, {
        getPoint: function() {
            return console.warn("THREE.Curve: .getPoint() not implemented."),
            null
        },
        getPointAt: function(t, e) {
            var n = this.getUtoTmapping(t);
            return this.getPoint(n, e)
        },
        getPoints: function(t) {
            void 0 === t && (t = 5);
            for (var e = [], n = 0; n <= t; n++)
                e.push(this.getPoint(n / t));
            return e
        },
        getSpacedPoints: function(t) {
            void 0 === t && (t = 5);
            for (var e = [], n = 0; n <= t; n++)
                e.push(this.getPointAt(n / t));
            return e
        },
        getLength: function() {
            var t = this.getLengths();
            return t[t.length - 1]
        },
        getLengths: function(t) {
            if (void 0 === t && (t = this.arcLengthDivisions),
            this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate)
                return this.cacheArcLengths;
            this.needsUpdate = !1;
            var e, n, r = [], i = this.getPoint(0), a = 0;
            for (r.push(0),
            n = 1; n <= t; n++)
                a += (e = this.getPoint(n / t)).distanceTo(i),
                r.push(a),
                i = e;
            return this.cacheArcLengths = r,
            r
        },
        updateArcLengths: function() {
            this.needsUpdate = !0,
            this.getLengths()
        },
        getUtoTmapping: function(t, e) {
            var n, r = this.getLengths(), i = 0, a = r.length;
            n = e || t * r[a - 1];
            for (var o, s = 0, c = a - 1; s <= c; )
                if ((o = r[i = Math.floor(s + (c - s) / 2)] - n) < 0)
                    s = i + 1;
                else {
                    if (!(o > 0)) {
                        c = i;
                        break
                    }
                    c = i - 1
                }
            if (r[i = c] === n)
                return i / (a - 1);
            var u = r[i];
            return (i + (n - u) / (r[i + 1] - u)) / (a - 1)
        },
        getTangent: function(t) {
            var e = t - 1e-4
              , n = t + 1e-4;
            e < 0 && (e = 0),
            n > 1 && (n = 1);
            var r = this.getPoint(e);
            return this.getPoint(n).clone().sub(r).normalize()
        },
        getTangentAt: function(t) {
            var e = this.getUtoTmapping(t);
            return this.getTangent(e)
        },
        computeFrenetFrames: function(t, e) {
            var n, r, i, a = new We, o = [], s = [], c = [], u = new We, h = new hn;
            for (n = 0; n <= t; n++)
                r = n / t,
                o[n] = this.getTangentAt(r),
                o[n].normalize();
            s[0] = new We,
            c[0] = new We;
            var l = Number.MAX_VALUE
              , d = Math.abs(o[0].x)
              , p = Math.abs(o[0].y)
              , f = Math.abs(o[0].z);
            for (d <= l && (l = d,
            a.set(1, 0, 0)),
            p <= l && (l = p,
            a.set(0, 1, 0)),
            f <= l && a.set(0, 0, 1),
            u.crossVectors(o[0], a).normalize(),
            s[0].crossVectors(o[0], u),
            c[0].crossVectors(o[0], s[0]),
            n = 1; n <= t; n++)
                s[n] = s[n - 1].clone(),
                c[n] = c[n - 1].clone(),
                u.crossVectors(o[n - 1], o[n]),
                u.length() > Number.EPSILON && (u.normalize(),
                i = Math.acos(Ve.clamp(o[n - 1].dot(o[n]), -1, 1)),
                s[n].applyMatrix4(h.makeRotationAxis(u, i))),
                c[n].crossVectors(o[n], s[n]);
            if (!0 === e)
                for (i = Math.acos(Ve.clamp(s[0].dot(s[t]), -1, 1)),
                i /= t,
                o[0].dot(u.crossVectors(s[0], s[t])) > 0 && (i = -i),
                n = 1; n <= t; n++)
                    s[n].applyMatrix4(h.makeRotationAxis(o[n], i * n)),
                    c[n].crossVectors(o[n], s[n]);
            return {
                tangents: o,
                normals: s,
                binormals: c
            }
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.arcLengthDivisions = t.arcLengthDivisions,
            this
        },
        toJSON: function() {
            var t = {
                metadata: {
                    version: 4.5,
                    type: "Curve",
                    generator: "Curve.toJSON"
                }
            };
            return t.arcLengthDivisions = this.arcLengthDivisions,
            t.type = this.type,
            t
        },
        fromJSON: function(t) {
            return this.arcLengthDivisions = t.arcLengthDivisions,
            this
        }
    }),
    ic.prototype = Object.create(rc.prototype),
    ic.prototype.constructor = ic,
    ic.prototype.isEllipseCurve = !0,
    ic.prototype.getPoint = function(t, e) {
        for (var n = e || new ke, r = 2 * Math.PI, i = this.aEndAngle - this.aStartAngle, a = Math.abs(i) < Number.EPSILON; i < 0; )
            i += r;
        for (; i > r; )
            i -= r;
        i < Number.EPSILON && (i = a ? 0 : r),
        !0 !== this.aClockwise || a || (i === r ? i = -r : i -= r);
        var o = this.aStartAngle + t * i
          , s = this.aX + this.xRadius * Math.cos(o)
          , c = this.aY + this.yRadius * Math.sin(o);
        if (0 !== this.aRotation) {
            var u = Math.cos(this.aRotation)
              , h = Math.sin(this.aRotation)
              , l = s - this.aX
              , d = c - this.aY;
            s = l * u - d * h + this.aX,
            c = l * h + d * u + this.aY
        }
        return n.set(s, c)
    }
    ,
    ic.prototype.copy = function(t) {
        return rc.prototype.copy.call(this, t),
        this.aX = t.aX,
        this.aY = t.aY,
        this.xRadius = t.xRadius,
        this.yRadius = t.yRadius,
        this.aStartAngle = t.aStartAngle,
        this.aEndAngle = t.aEndAngle,
        this.aClockwise = t.aClockwise,
        this.aRotation = t.aRotation,
        this
    }
    ,
    ic.prototype.toJSON = function() {
        var t = rc.prototype.toJSON.call(this);
        return t.aX = this.aX,
        t.aY = this.aY,
        t.xRadius = this.xRadius,
        t.yRadius = this.yRadius,
        t.aStartAngle = this.aStartAngle,
        t.aEndAngle = this.aEndAngle,
        t.aClockwise = this.aClockwise,
        t.aRotation = this.aRotation,
        t
    }
    ,
    ic.prototype.fromJSON = function(t) {
        return rc.prototype.fromJSON.call(this, t),
        this.aX = t.aX,
        this.aY = t.aY,
        this.xRadius = t.xRadius,
        this.yRadius = t.yRadius,
        this.aStartAngle = t.aStartAngle,
        this.aEndAngle = t.aEndAngle,
        this.aClockwise = t.aClockwise,
        this.aRotation = t.aRotation,
        this
    }
    ,
    ac.prototype = Object.create(ic.prototype),
    ac.prototype.constructor = ac,
    ac.prototype.isArcCurve = !0;
    var sc = new We
      , cc = new oc
      , uc = new oc
      , hc = new oc;
    function lc(t, e, n, r) {
        rc.call(this),
        this.type = "CatmullRomCurve3",
        this.points = t || [],
        this.closed = e || !1,
        this.curveType = n || "centripetal",
        this.tension = r || .5
    }
    function dc(t, e, n, r, i) {
        var a = .5 * (r - e)
          , o = .5 * (i - n)
          , s = t * t;
        return (2 * n - 2 * r + a + o) * (t * s) + (-3 * n + 3 * r - 2 * a - o) * s + a * t + n
    }
    function pc(t, e, n, r) {
        return function(t, e) {
            var n = 1 - t;
            return n * n * e
        }(t, e) + function(t, e) {
            return 2 * (1 - t) * t * e
        }(t, n) + function(t, e) {
            return t * t * e
        }(t, r)
    }
    function fc(t, e, n, r, i) {
        return function(t, e) {
            var n = 1 - t;
            return n * n * n * e
        }(t, e) + function(t, e) {
            var n = 1 - t;
            return 3 * n * n * t * e
        }(t, n) + function(t, e) {
            return 3 * (1 - t) * t * t * e
        }(t, r) + function(t, e) {
            return t * t * t * e
        }(t, i)
    }
    function mc(t, e, n, r) {
        rc.call(this),
        this.type = "CubicBezierCurve",
        this.v0 = t || new ke,
        this.v1 = e || new ke,
        this.v2 = n || new ke,
        this.v3 = r || new ke
    }
    function gc(t, e, n, r) {
        rc.call(this),
        this.type = "CubicBezierCurve3",
        this.v0 = t || new We,
        this.v1 = e || new We,
        this.v2 = n || new We,
        this.v3 = r || new We
    }
    function vc(t, e) {
        rc.call(this),
        this.type = "LineCurve",
        this.v1 = t || new ke,
        this.v2 = e || new ke
    }
    function yc(t, e) {
        rc.call(this),
        this.type = "LineCurve3",
        this.v1 = t || new We,
        this.v2 = e || new We
    }
    function xc(t, e, n) {
        rc.call(this),
        this.type = "QuadraticBezierCurve",
        this.v0 = t || new ke,
        this.v1 = e || new ke,
        this.v2 = n || new ke
    }
    function bc(t, e, n) {
        rc.call(this),
        this.type = "QuadraticBezierCurve3",
        this.v0 = t || new We,
        this.v1 = e || new We,
        this.v2 = n || new We
    }
    function wc(t) {
        rc.call(this),
        this.type = "SplineCurve",
        this.points = t || []
    }
    lc.prototype = Object.create(rc.prototype),
    lc.prototype.constructor = lc,
    lc.prototype.isCatmullRomCurve3 = !0,
    lc.prototype.getPoint = function(t, e) {
        var n, r, i, a, o = e || new We, s = this.points, c = s.length, u = (c - (this.closed ? 0 : 1)) * t, h = Math.floor(u), l = u - h;
        if (this.closed ? h += h > 0 ? 0 : (Math.floor(Math.abs(h) / c) + 1) * c : 0 === l && h === c - 1 && (h = c - 2,
        l = 1),
        this.closed || h > 0 ? n = s[(h - 1) % c] : (sc.subVectors(s[0], s[1]).add(s[0]),
        n = sc),
        r = s[h % c],
        i = s[(h + 1) % c],
        this.closed || h + 2 < c ? a = s[(h + 2) % c] : (sc.subVectors(s[c - 1], s[c - 2]).add(s[c - 1]),
        a = sc),
        "centripetal" === this.curveType || "chordal" === this.curveType) {
            var d = "chordal" === this.curveType ? .5 : .25
              , p = Math.pow(n.distanceToSquared(r), d)
              , f = Math.pow(r.distanceToSquared(i), d)
              , m = Math.pow(i.distanceToSquared(a), d);
            f < 1e-4 && (f = 1),
            p < 1e-4 && (p = f),
            m < 1e-4 && (m = f),
            cc.initNonuniformCatmullRom(n.x, r.x, i.x, a.x, p, f, m),
            uc.initNonuniformCatmullRom(n.y, r.y, i.y, a.y, p, f, m),
            hc.initNonuniformCatmullRom(n.z, r.z, i.z, a.z, p, f, m)
        } else
            "catmullrom" === this.curveType && (cc.initCatmullRom(n.x, r.x, i.x, a.x, this.tension),
            uc.initCatmullRom(n.y, r.y, i.y, a.y, this.tension),
            hc.initCatmullRom(n.z, r.z, i.z, a.z, this.tension));
        return o.set(cc.calc(l), uc.calc(l), hc.calc(l)),
        o
    }
    ,
    lc.prototype.copy = function(t) {
        rc.prototype.copy.call(this, t),
        this.points = [];
        for (var e = 0, n = t.points.length; e < n; e++) {
            var r = t.points[e];
            this.points.push(r.clone())
        }
        return this.closed = t.closed,
        this.curveType = t.curveType,
        this.tension = t.tension,
        this
    }
    ,
    lc.prototype.toJSON = function() {
        var t = rc.prototype.toJSON.call(this);
        t.points = [];
        for (var e = 0, n = this.points.length; e < n; e++) {
            var r = this.points[e];
            t.points.push(r.toArray())
        }
        return t.closed = this.closed,
        t.curveType = this.curveType,
        t.tension = this.tension,
        t
    }
    ,
    lc.prototype.fromJSON = function(t) {
        rc.prototype.fromJSON.call(this, t),
        this.points = [];
        for (var e = 0, n = t.points.length; e < n; e++) {
            var r = t.points[e];
            this.points.push((new We).fromArray(r))
        }
        return this.closed = t.closed,
        this.curveType = t.curveType,
        this.tension = t.tension,
        this
    }
    ,
    mc.prototype = Object.create(rc.prototype),
    mc.prototype.constructor = mc,
    mc.prototype.isCubicBezierCurve = !0,
    mc.prototype.getPoint = function(t, e) {
        var n = e || new ke
          , r = this.v0
          , i = this.v1
          , a = this.v2
          , o = this.v3;
        return n.set(fc(t, r.x, i.x, a.x, o.x), fc(t, r.y, i.y, a.y, o.y)),
        n
    }
    ,
    mc.prototype.copy = function(t) {
        return rc.prototype.copy.call(this, t),
        this.v0.copy(t.v0),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this.v3.copy(t.v3),
        this
    }
    ,
    mc.prototype.toJSON = function() {
        var t = rc.prototype.toJSON.call(this);
        return t.v0 = this.v0.toArray(),
        t.v1 = this.v1.toArray(),
        t.v2 = this.v2.toArray(),
        t.v3 = this.v3.toArray(),
        t
    }
    ,
    mc.prototype.fromJSON = function(t) {
        return rc.prototype.fromJSON.call(this, t),
        this.v0.fromArray(t.v0),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this.v3.fromArray(t.v3),
        this
    }
    ,
    gc.prototype = Object.create(rc.prototype),
    gc.prototype.constructor = gc,
    gc.prototype.isCubicBezierCurve3 = !0,
    gc.prototype.getPoint = function(t, e) {
        var n = e || new We
          , r = this.v0
          , i = this.v1
          , a = this.v2
          , o = this.v3;
        return n.set(fc(t, r.x, i.x, a.x, o.x), fc(t, r.y, i.y, a.y, o.y), fc(t, r.z, i.z, a.z, o.z)),
        n
    }
    ,
    gc.prototype.copy = function(t) {
        return rc.prototype.copy.call(this, t),
        this.v0.copy(t.v0),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this.v3.copy(t.v3),
        this
    }
    ,
    gc.prototype.toJSON = function() {
        var t = rc.prototype.toJSON.call(this);
        return t.v0 = this.v0.toArray(),
        t.v1 = this.v1.toArray(),
        t.v2 = this.v2.toArray(),
        t.v3 = this.v3.toArray(),
        t
    }
    ,
    gc.prototype.fromJSON = function(t) {
        return rc.prototype.fromJSON.call(this, t),
        this.v0.fromArray(t.v0),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this.v3.fromArray(t.v3),
        this
    }
    ,
    vc.prototype = Object.create(rc.prototype),
    vc.prototype.constructor = vc,
    vc.prototype.isLineCurve = !0,
    vc.prototype.getPoint = function(t, e) {
        var n = e || new ke;
        return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1),
        n.multiplyScalar(t).add(this.v1)),
        n
    }
    ,
    vc.prototype.getPointAt = function(t, e) {
        return this.getPoint(t, e)
    }
    ,
    vc.prototype.getTangent = function() {
        return this.v2.clone().sub(this.v1).normalize()
    }
    ,
    vc.prototype.copy = function(t) {
        return rc.prototype.copy.call(this, t),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this
    }
    ,
    vc.prototype.toJSON = function() {
        var t = rc.prototype.toJSON.call(this);
        return t.v1 = this.v1.toArray(),
        t.v2 = this.v2.toArray(),
        t
    }
    ,
    vc.prototype.fromJSON = function(t) {
        return rc.prototype.fromJSON.call(this, t),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this
    }
    ,
    yc.prototype = Object.create(rc.prototype),
    yc.prototype.constructor = yc,
    yc.prototype.isLineCurve3 = !0,
    yc.prototype.getPoint = function(t, e) {
        var n = e || new We;
        return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1),
        n.multiplyScalar(t).add(this.v1)),
        n
    }
    ,
    yc.prototype.getPointAt = function(t, e) {
        return this.getPoint(t, e)
    }
    ,
    yc.prototype.copy = function(t) {
        return rc.prototype.copy.call(this, t),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this
    }
    ,
    yc.prototype.toJSON = function() {
        var t = rc.prototype.toJSON.call(this);
        return t.v1 = this.v1.toArray(),
        t.v2 = this.v2.toArray(),
        t
    }
    ,
    yc.prototype.fromJSON = function(t) {
        return rc.prototype.fromJSON.call(this, t),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this
    }
    ,
    xc.prototype = Object.create(rc.prototype),
    xc.prototype.constructor = xc,
    xc.prototype.isQuadraticBezierCurve = !0,
    xc.prototype.getPoint = function(t, e) {
        var n = e || new ke
          , r = this.v0
          , i = this.v1
          , a = this.v2;
        return n.set(pc(t, r.x, i.x, a.x), pc(t, r.y, i.y, a.y)),
        n
    }
    ,
    xc.prototype.copy = function(t) {
        return rc.prototype.copy.call(this, t),
        this.v0.copy(t.v0),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this
    }
    ,
    xc.prototype.toJSON = function() {
        var t = rc.prototype.toJSON.call(this);
        return t.v0 = this.v0.toArray(),
        t.v1 = this.v1.toArray(),
        t.v2 = this.v2.toArray(),
        t
    }
    ,
    xc.prototype.fromJSON = function(t) {
        return rc.prototype.fromJSON.call(this, t),
        this.v0.fromArray(t.v0),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this
    }
    ,
    bc.prototype = Object.create(rc.prototype),
    bc.prototype.constructor = bc,
    bc.prototype.isQuadraticBezierCurve3 = !0,
    bc.prototype.getPoint = function(t, e) {
        var n = e || new We
          , r = this.v0
          , i = this.v1
          , a = this.v2;
        return n.set(pc(t, r.x, i.x, a.x), pc(t, r.y, i.y, a.y), pc(t, r.z, i.z, a.z)),
        n
    }
    ,
    bc.prototype.copy = function(t) {
        return rc.prototype.copy.call(this, t),
        this.v0.copy(t.v0),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this
    }
    ,
    bc.prototype.toJSON = function() {
        var t = rc.prototype.toJSON.call(this);
        return t.v0 = this.v0.toArray(),
        t.v1 = this.v1.toArray(),
        t.v2 = this.v2.toArray(),
        t
    }
    ,
    bc.prototype.fromJSON = function(t) {
        return rc.prototype.fromJSON.call(this, t),
        this.v0.fromArray(t.v0),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this
    }
    ,
    wc.prototype = Object.create(rc.prototype),
    wc.prototype.constructor = wc,
    wc.prototype.isSplineCurve = !0,
    wc.prototype.getPoint = function(t, e) {
        var n = e || new ke
          , r = this.points
          , i = (r.length - 1) * t
          , a = Math.floor(i)
          , o = i - a
          , s = r[0 === a ? a : a - 1]
          , c = r[a]
          , u = r[a > r.length - 2 ? r.length - 1 : a + 1]
          , h = r[a > r.length - 3 ? r.length - 1 : a + 2];
        return n.set(dc(o, s.x, c.x, u.x, h.x), dc(o, s.y, c.y, u.y, h.y)),
        n
    }
    ,
    wc.prototype.copy = function(t) {
        rc.prototype.copy.call(this, t),
        this.points = [];
        for (var e = 0, n = t.points.length; e < n; e++) {
            var r = t.points[e];
            this.points.push(r.clone())
        }
        return this
    }
    ,
    wc.prototype.toJSON = function() {
        var t = rc.prototype.toJSON.call(this);
        t.points = [];
        for (var e = 0, n = this.points.length; e < n; e++) {
            var r = this.points[e];
            t.points.push(r.toArray())
        }
        return t
    }
    ,
    wc.prototype.fromJSON = function(t) {
        rc.prototype.fromJSON.call(this, t),
        this.points = [];
        for (var e = 0, n = t.points.length; e < n; e++) {
            var r = t.points[e];
            this.points.push((new ke).fromArray(r))
        }
        return this
    }
    ;
    var _c = Object.freeze({
        ArcCurve: ac,
        CatmullRomCurve3: lc,
        CubicBezierCurve: mc,
        CubicBezierCurve3: gc,
        EllipseCurve: ic,
        LineCurve: vc,
        LineCurve3: yc,
        QuadraticBezierCurve: xc,
        QuadraticBezierCurve3: bc,
        SplineCurve: wc
    });
    function Mc() {
        rc.call(this),
        this.type = "CurvePath",
        this.curves = [],
        this.autoClose = !1
    }
    function Ec(t) {
        Mc.call(this),
        this.type = "Path",
        this.currentPoint = new ke,
        t && this.setFromPoints(t)
    }
    function Sc(t) {
        Ec.call(this, t),
        this.uuid = Ve.generateUUID(),
        this.type = "Shape",
        this.holes = []
    }
    function Tc(t, e) {
        Dn.call(this),
        this.type = "Light",
        this.color = new jn(t),
        this.intensity = void 0 !== e ? e : 1,
        this.receiveShadow = void 0
    }
    function Ac(t, e, n) {
        Tc.call(this, t, n),
        this.type = "HemisphereLight",
        this.castShadow = void 0,
        this.position.copy(Dn.DefaultUp),
        this.updateMatrix(),
        this.groundColor = new jn(e)
    }
    function Lc(t) {
        this.camera = t,
        this.bias = 0,
        this.radius = 1,
        this.mapSize = new ke(512,512),
        this.map = null,
        this.matrix = new hn
    }
    function Rc() {
        Lc.call(this, new Tr(50,1,.5,500))
    }
    function Pc(t, e, n, r, i, a) {
        Tc.call(this, t, e),
        this.type = "SpotLight",
        this.position.copy(Dn.DefaultUp),
        this.updateMatrix(),
        this.target = new Dn,
        Object.defineProperty(this, "power", {
            get: function() {
                return this.intensity * Math.PI
            },
            set: function(t) {
                this.intensity = t / Math.PI
            }
        }),
        this.distance = void 0 !== n ? n : 0,
        this.angle = void 0 !== r ? r : Math.PI / 3,
        this.penumbra = void 0 !== i ? i : 0,
        this.decay = void 0 !== a ? a : 1,
        this.shadow = new Rc
    }
    function Cc(t, e, n, r) {
        Tc.call(this, t, e),
        this.type = "PointLight",
        Object.defineProperty(this, "power", {
            get: function() {
                return 4 * this.intensity * Math.PI
            },
            set: function(t) {
                this.intensity = t / (4 * Math.PI)
            }
        }),
        this.distance = void 0 !== n ? n : 0,
        this.decay = void 0 !== r ? r : 1,
        this.shadow = new Lc(new Tr(90,1,.5,500))
    }
    function Oc(t, e, n, r, i, a) {
        Sr.call(this),
        this.type = "OrthographicCamera",
        this.zoom = 1,
        this.view = null,
        this.left = void 0 !== t ? t : -1,
        this.right = void 0 !== e ? e : 1,
        this.top = void 0 !== n ? n : 1,
        this.bottom = void 0 !== r ? r : -1,
        this.near = void 0 !== i ? i : .1,
        this.far = void 0 !== a ? a : 2e3,
        this.updateProjectionMatrix()
    }
    function Ic() {
        Lc.call(this, new Oc(-5,5,5,-5,.5,500))
    }
    function Dc(t, e) {
        Tc.call(this, t, e),
        this.type = "DirectionalLight",
        this.position.copy(Dn.DefaultUp),
        this.updateMatrix(),
        this.target = new Dn,
        this.shadow = new Ic
    }
    function Nc(t, e) {
        Tc.call(this, t, e),
        this.type = "AmbientLight",
        this.castShadow = void 0
    }
    function Bc(t, e, n, r) {
        Tc.call(this, t, e),
        this.type = "RectAreaLight",
        this.width = void 0 !== n ? n : 10,
        this.height = void 0 !== r ? r : 10
    }
    function zc(t) {
        this.manager = void 0 !== t ? t : Ys,
        this.textures = {}
    }
    Mc.prototype = Object.assign(Object.create(rc.prototype), {
        constructor: Mc,
        add: function(t) {
            this.curves.push(t)
        },
        closePath: function() {
            var t = this.curves[0].getPoint(0)
              , e = this.curves[this.curves.length - 1].getPoint(1);
            t.equals(e) || this.curves.push(new vc(e,t))
        },
        getPoint: function(t) {
            for (var e = t * this.getLength(), n = this.getCurveLengths(), r = 0; r < n.length; ) {
                if (n[r] >= e) {
                    var i = n[r] - e
                      , a = this.curves[r]
                      , o = a.getLength()
                      , s = 0 === o ? 0 : 1 - i / o;
                    return a.getPointAt(s)
                }
                r++
            }
            return null
        },
        getLength: function() {
            var t = this.getCurveLengths();
            return t[t.length - 1]
        },
        updateArcLengths: function() {
            this.needsUpdate = !0,
            this.cacheLengths = null,
            this.getCurveLengths()
        },
        getCurveLengths: function() {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
                return this.cacheLengths;
            for (var t = [], e = 0, n = 0, r = this.curves.length; n < r; n++)
                e += this.curves[n].getLength(),
                t.push(e);
            return this.cacheLengths = t,
            t
        },
        getSpacedPoints: function(t) {
            void 0 === t && (t = 40);
            for (var e = [], n = 0; n <= t; n++)
                e.push(this.getPoint(n / t));
            return this.autoClose && e.push(e[0]),
            e
        },
        getPoints: function(t) {
            t = t || 12;
            for (var e, n = [], r = 0, i = this.curves; r < i.length; r++)
                for (var a = i[r], o = a && a.isEllipseCurve ? 2 * t : a && (a.isLineCurve || a.isLineCurve3) ? 1 : a && a.isSplineCurve ? t * a.points.length : t, s = a.getPoints(o), c = 0; c < s.length; c++) {
                    var u = s[c];
                    e && e.equals(u) || (n.push(u),
                    e = u)
                }
            return this.autoClose && n.length > 1 && !n[n.length - 1].equals(n[0]) && n.push(n[0]),
            n
        },
        copy: function(t) {
            rc.prototype.copy.call(this, t),
            this.curves = [];
            for (var e = 0, n = t.curves.length; e < n; e++) {
                var r = t.curves[e];
                this.curves.push(r.clone())
            }
            return this.autoClose = t.autoClose,
            this
        },
        toJSON: function() {
            var t = rc.prototype.toJSON.call(this);
            t.autoClose = this.autoClose,
            t.curves = [];
            for (var e = 0, n = this.curves.length; e < n; e++) {
                var r = this.curves[e];
                t.curves.push(r.toJSON())
            }
            return t
        },
        fromJSON: function(t) {
            rc.prototype.fromJSON.call(this, t),
            this.autoClose = t.autoClose,
            this.curves = [];
            for (var e = 0, n = t.curves.length; e < n; e++) {
                var r = t.curves[e];
                this.curves.push((new _c[r.type]).fromJSON(r))
            }
            return this
        }
    }),
    Ec.prototype = Object.assign(Object.create(Mc.prototype), {
        constructor: Ec,
        setFromPoints: function(t) {
            this.moveTo(t[0].x, t[0].y);
            for (var e = 1, n = t.length; e < n; e++)
                this.lineTo(t[e].x, t[e].y)
        },
        moveTo: function(t, e) {
            this.currentPoint.set(t, e)
        },
        lineTo: function(t, e) {
            var n = new vc(this.currentPoint.clone(),new ke(t,e));
            this.curves.push(n),
            this.currentPoint.set(t, e)
        },
        quadraticCurveTo: function(t, e, n, r) {
            var i = new xc(this.currentPoint.clone(),new ke(t,e),new ke(n,r));
            this.curves.push(i),
            this.currentPoint.set(n, r)
        },
        bezierCurveTo: function(t, e, n, r, i, a) {
            var o = new mc(this.currentPoint.clone(),new ke(t,e),new ke(n,r),new ke(i,a));
            this.curves.push(o),
            this.currentPoint.set(i, a)
        },
        splineThru: function(t) {
            var e = new wc([this.currentPoint.clone()].concat(t));
            this.curves.push(e),
            this.currentPoint.copy(t[t.length - 1])
        },
        arc: function(t, e, n, r, i, a) {
            var o = this.currentPoint.x
              , s = this.currentPoint.y;
            this.absarc(t + o, e + s, n, r, i, a)
        },
        absarc: function(t, e, n, r, i, a) {
            this.absellipse(t, e, n, n, r, i, a)
        },
        ellipse: function(t, e, n, r, i, a, o, s) {
            var c = this.currentPoint.x
              , u = this.currentPoint.y;
            this.absellipse(t + c, e + u, n, r, i, a, o, s)
        },
        absellipse: function(t, e, n, r, i, a, o, s) {
            var c = new ic(t,e,n,r,i,a,o,s);
            if (this.curves.length > 0) {
                var u = c.getPoint(0);
                u.equals(this.currentPoint) || this.lineTo(u.x, u.y)
            }
            this.curves.push(c);
            var h = c.getPoint(1);
            this.currentPoint.copy(h)
        },
        copy: function(t) {
            return Mc.prototype.copy.call(this, t),
            this.currentPoint.copy(t.currentPoint),
            this
        },
        toJSON: function() {
            var t = Mc.prototype.toJSON.call(this);
            return t.currentPoint = this.currentPoint.toArray(),
            t
        },
        fromJSON: function(t) {
            return Mc.prototype.fromJSON.call(this, t),
            this.currentPoint.fromArray(t.currentPoint),
            this
        }
    }),
    Sc.prototype = Object.assign(Object.create(Ec.prototype), {
        constructor: Sc,
        getPointsHoles: function(t) {
            for (var e = [], n = 0, r = this.holes.length; n < r; n++)
                e[n] = this.holes[n].getPoints(t);
            return e
        },
        extractPoints: function(t) {
            return {
                shape: this.getPoints(t),
                holes: this.getPointsHoles(t)
            }
        },
        copy: function(t) {
            Ec.prototype.copy.call(this, t),
            this.holes = [];
            for (var e = 0, n = t.holes.length; e < n; e++) {
                var r = t.holes[e];
                this.holes.push(r.clone())
            }
            return this
        },
        toJSON: function() {
            var t = Ec.prototype.toJSON.call(this);
            t.uuid = this.uuid,
            t.holes = [];
            for (var e = 0, n = this.holes.length; e < n; e++) {
                var r = this.holes[e];
                t.holes.push(r.toJSON())
            }
            return t
        },
        fromJSON: function(t) {
            Ec.prototype.fromJSON.call(this, t),
            this.uuid = t.uuid,
            this.holes = [];
            for (var e = 0, n = t.holes.length; e < n; e++) {
                var r = t.holes[e];
                this.holes.push((new Ec).fromJSON(r))
            }
            return this
        }
    }),
    Tc.prototype = Object.assign(Object.create(Dn.prototype), {
        constructor: Tc,
        isLight: !0,
        copy: function(t) {
            return Dn.prototype.copy.call(this, t),
            this.color.copy(t.color),
            this.intensity = t.intensity,
            this
        },
        toJSON: function(t) {
            var e = Dn.prototype.toJSON.call(this, t);
            return e.object.color = this.color.getHex(),
            e.object.intensity = this.intensity,
            void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()),
            void 0 !== this.distance && (e.object.distance = this.distance),
            void 0 !== this.angle && (e.object.angle = this.angle),
            void 0 !== this.decay && (e.object.decay = this.decay),
            void 0 !== this.penumbra && (e.object.penumbra = this.penumbra),
            void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()),
            e
        }
    }),
    Ac.prototype = Object.assign(Object.create(Tc.prototype), {
        constructor: Ac,
        isHemisphereLight: !0,
        copy: function(t) {
            return Tc.prototype.copy.call(this, t),
            this.groundColor.copy(t.groundColor),
            this
        }
    }),
    Object.assign(Lc.prototype, {
        copy: function(t) {
            return this.camera = t.camera.clone(),
            this.bias = t.bias,
            this.radius = t.radius,
            this.mapSize.copy(t.mapSize),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        toJSON: function() {
            var t = {};
            return 0 !== this.bias && (t.bias = this.bias),
            1 !== this.radius && (t.radius = this.radius),
            512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()),
            t.camera = this.camera.toJSON(!1).object,
            delete t.camera.matrix,
            t
        }
    }),
    Rc.prototype = Object.assign(Object.create(Lc.prototype), {
        constructor: Rc,
        isSpotLightShadow: !0,
        update: function(t) {
            var e = this.camera
              , n = 2 * Ve.RAD2DEG * t.angle
              , r = this.mapSize.width / this.mapSize.height
              , i = t.distance || e.far;
            n === e.fov && r === e.aspect && i === e.far || (e.fov = n,
            e.aspect = r,
            e.far = i,
            e.updateProjectionMatrix())
        }
    }),
    Pc.prototype = Object.assign(Object.create(Tc.prototype), {
        constructor: Pc,
        isSpotLight: !0,
        copy: function(t) {
            return Tc.prototype.copy.call(this, t),
            this.distance = t.distance,
            this.angle = t.angle,
            this.penumbra = t.penumbra,
            this.decay = t.decay,
            this.target = t.target.clone(),
            this.shadow = t.shadow.clone(),
            this
        }
    }),
    Cc.prototype = Object.assign(Object.create(Tc.prototype), {
        constructor: Cc,
        isPointLight: !0,
        copy: function(t) {
            return Tc.prototype.copy.call(this, t),
            this.distance = t.distance,
            this.decay = t.decay,
            this.shadow = t.shadow.clone(),
            this
        }
    }),
    Oc.prototype = Object.assign(Object.create(Sr.prototype), {
        constructor: Oc,
        isOrthographicCamera: !0,
        copy: function(t, e) {
            return Sr.prototype.copy.call(this, t, e),
            this.left = t.left,
            this.right = t.right,
            this.top = t.top,
            this.bottom = t.bottom,
            this.near = t.near,
            this.far = t.far,
            this.zoom = t.zoom,
            this.view = null === t.view ? null : Object.assign({}, t.view),
            this
        },
        setViewOffset: function(t, e, n, r, i, a) {
            null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }),
            this.view.enabled = !0,
            this.view.fullWidth = t,
            this.view.fullHeight = e,
            this.view.offsetX = n,
            this.view.offsetY = r,
            this.view.width = i,
            this.view.height = a,
            this.updateProjectionMatrix()
        },
        clearViewOffset: function() {
            null !== this.view && (this.view.enabled = !1),
            this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function() {
            var t = (this.right - this.left) / (2 * this.zoom)
              , e = (this.top - this.bottom) / (2 * this.zoom)
              , n = (this.right + this.left) / 2
              , r = (this.top + this.bottom) / 2
              , i = n - t
              , a = n + t
              , o = r + e
              , s = r - e;
            if (null !== this.view && this.view.enabled) {
                var c = this.zoom / (this.view.width / this.view.fullWidth)
                  , u = this.zoom / (this.view.height / this.view.fullHeight)
                  , h = (this.right - this.left) / this.view.width
                  , l = (this.top - this.bottom) / this.view.height;
                a = (i += h * (this.view.offsetX / c)) + h * (this.view.width / c),
                s = (o -= l * (this.view.offsetY / u)) - l * (this.view.height / u)
            }
            this.projectionMatrix.makeOrthographic(i, a, o, s, this.near, this.far),
            this.projectionMatrixInverse.getInverse(this.projectionMatrix)
        },
        toJSON: function(t) {
            var e = Dn.prototype.toJSON.call(this, t);
            return e.object.zoom = this.zoom,
            e.object.left = this.left,
            e.object.right = this.right,
            e.object.top = this.top,
            e.object.bottom = this.bottom,
            e.object.near = this.near,
            e.object.far = this.far,
            null !== this.view && (e.object.view = Object.assign({}, this.view)),
            e
        }
    }),
    Ic.prototype = Object.assign(Object.create(Lc.prototype), {
        constructor: Ic
    }),
    Dc.prototype = Object.assign(Object.create(Tc.prototype), {
        constructor: Dc,
        isDirectionalLight: !0,
        copy: function(t) {
            return Tc.prototype.copy.call(this, t),
            this.target = t.target.clone(),
            this.shadow = t.shadow.clone(),
            this
        }
    }),
    Nc.prototype = Object.assign(Object.create(Tc.prototype), {
        constructor: Nc,
        isAmbientLight: !0
    }),
    Bc.prototype = Object.assign(Object.create(Tc.prototype), {
        constructor: Bc,
        isRectAreaLight: !0,
        copy: function(t) {
            return Tc.prototype.copy.call(this, t),
            this.width = t.width,
            this.height = t.height,
            this
        },
        toJSON: function(t) {
            var e = Tc.prototype.toJSON.call(this, t);
            return e.object.width = this.width,
            e.object.height = this.height,
            e
        }
    }),
    Object.assign(zc.prototype, {
        load: function(t, e, n, r) {
            var i = this
              , a = new Zs(i.manager);
            a.setPath(i.path),
            a.load(t, function(t) {
                e(i.parse(JSON.parse(t)))
            }, n, r)
        },
        parse: function(t) {
            var e = this.textures;
            function n(t) {
                return void 0 === e[t] && console.warn("THREE.MaterialLoader: Undefined texture", t),
                e[t]
            }
            var r = new Ps[t.type];
            if (void 0 !== t.uuid && (r.uuid = t.uuid),
            void 0 !== t.name && (r.name = t.name),
            void 0 !== t.color && r.color.setHex(t.color),
            void 0 !== t.roughness && (r.roughness = t.roughness),
            void 0 !== t.metalness && (r.metalness = t.metalness),
            void 0 !== t.emissive && r.emissive.setHex(t.emissive),
            void 0 !== t.specular && r.specular.setHex(t.specular),
            void 0 !== t.shininess && (r.shininess = t.shininess),
            void 0 !== t.clearCoat && (r.clearCoat = t.clearCoat),
            void 0 !== t.clearCoatRoughness && (r.clearCoatRoughness = t.clearCoatRoughness),
            void 0 !== t.vertexColors && (r.vertexColors = t.vertexColors),
            void 0 !== t.fog && (r.fog = t.fog),
            void 0 !== t.flatShading && (r.flatShading = t.flatShading),
            void 0 !== t.blending && (r.blending = t.blending),
            void 0 !== t.combine && (r.combine = t.combine),
            void 0 !== t.side && (r.side = t.side),
            void 0 !== t.opacity && (r.opacity = t.opacity),
            void 0 !== t.transparent && (r.transparent = t.transparent),
            void 0 !== t.alphaTest && (r.alphaTest = t.alphaTest),
            void 0 !== t.depthTest && (r.depthTest = t.depthTest),
            void 0 !== t.depthWrite && (r.depthWrite = t.depthWrite),
            void 0 !== t.colorWrite && (r.colorWrite = t.colorWrite),
            void 0 !== t.wireframe && (r.wireframe = t.wireframe),
            void 0 !== t.wireframeLinewidth && (r.wireframeLinewidth = t.wireframeLinewidth),
            void 0 !== t.wireframeLinecap && (r.wireframeLinecap = t.wireframeLinecap),
            void 0 !== t.wireframeLinejoin && (r.wireframeLinejoin = t.wireframeLinejoin),
            void 0 !== t.rotation && (r.rotation = t.rotation),
            1 !== t.linewidth && (r.linewidth = t.linewidth),
            void 0 !== t.dashSize && (r.dashSize = t.dashSize),
            void 0 !== t.gapSize && (r.gapSize = t.gapSize),
            void 0 !== t.scale && (r.scale = t.scale),
            void 0 !== t.polygonOffset && (r.polygonOffset = t.polygonOffset),
            void 0 !== t.polygonOffsetFactor && (r.polygonOffsetFactor = t.polygonOffsetFactor),
            void 0 !== t.polygonOffsetUnits && (r.polygonOffsetUnits = t.polygonOffsetUnits),
            void 0 !== t.skinning && (r.skinning = t.skinning),
            void 0 !== t.morphTargets && (r.morphTargets = t.morphTargets),
            void 0 !== t.morphNormals && (r.morphNormals = t.morphNormals),
            void 0 !== t.dithering && (r.dithering = t.dithering),
            void 0 !== t.visible && (r.visible = t.visible),
            void 0 !== t.userData && (r.userData = t.userData),
            void 0 !== t.uniforms)
                for (var i in t.uniforms) {
                    var a = t.uniforms[i];
                    switch (r.uniforms[i] = {},
                    a.type) {
                    case "t":
                        r.uniforms[i].value = n(a.value);
                        break;
                    case "c":
                        r.uniforms[i].value = (new jn).setHex(a.value);
                        break;
                    case "v2":
                        r.uniforms[i].value = (new ke).fromArray(a.value);
                        break;
                    case "v3":
                        r.uniforms[i].value = (new We).fromArray(a.value);
                        break;
                    case "v4":
                        r.uniforms[i].value = (new sn).fromArray(a.value);
                        break;
                    case "m3":
                        r.uniforms[i].value = (new qe).fromArray(a.value);
                    case "m4":
                        r.uniforms[i].value = (new hn).fromArray(a.value);
                        break;
                    default:
                        r.uniforms[i].value = a.value
                    }
                }
            if (void 0 !== t.defines && (r.defines = t.defines),
            void 0 !== t.vertexShader && (r.vertexShader = t.vertexShader),
            void 0 !== t.fragmentShader && (r.fragmentShader = t.fragmentShader),
            void 0 !== t.extensions)
                for (var o in t.extensions)
                    r.extensions[o] = t.extensions[o];
            if (void 0 !== t.shading && (r.flatShading = 1 === t.shading),
            void 0 !== t.size && (r.size = t.size),
            void 0 !== t.sizeAttenuation && (r.sizeAttenuation = t.sizeAttenuation),
            void 0 !== t.map && (r.map = n(t.map)),
            void 0 !== t.matcap && (r.matcap = n(t.matcap)),
            void 0 !== t.alphaMap && (r.alphaMap = n(t.alphaMap),
            r.transparent = !0),
            void 0 !== t.bumpMap && (r.bumpMap = n(t.bumpMap)),
            void 0 !== t.bumpScale && (r.bumpScale = t.bumpScale),
            void 0 !== t.normalMap && (r.normalMap = n(t.normalMap)),
            void 0 !== t.normalMapType && (r.normalMapType = t.normalMapType),
            void 0 !== t.normalScale) {
                var s = t.normalScale;
                !1 === Array.isArray(s) && (s = [s, s]),
                r.normalScale = (new ke).fromArray(s)
            }
            return void 0 !== t.displacementMap && (r.displacementMap = n(t.displacementMap)),
            void 0 !== t.displacementScale && (r.displacementScale = t.displacementScale),
            void 0 !== t.displacementBias && (r.displacementBias = t.displacementBias),
            void 0 !== t.roughnessMap && (r.roughnessMap = n(t.roughnessMap)),
            void 0 !== t.metalnessMap && (r.metalnessMap = n(t.metalnessMap)),
            void 0 !== t.emissiveMap && (r.emissiveMap = n(t.emissiveMap)),
            void 0 !== t.emissiveIntensity && (r.emissiveIntensity = t.emissiveIntensity),
            void 0 !== t.specularMap && (r.specularMap = n(t.specularMap)),
            void 0 !== t.envMap && (r.envMap = n(t.envMap)),
            void 0 !== t.envMapIntensity && (r.envMapIntensity = t.envMapIntensity),
            void 0 !== t.reflectivity && (r.reflectivity = t.reflectivity),
            void 0 !== t.refractionRatio && (r.refractionRatio = t.refractionRatio),
            void 0 !== t.lightMap && (r.lightMap = n(t.lightMap)),
            void 0 !== t.lightMapIntensity && (r.lightMapIntensity = t.lightMapIntensity),
            void 0 !== t.aoMap && (r.aoMap = n(t.aoMap)),
            void 0 !== t.aoMapIntensity && (r.aoMapIntensity = t.aoMapIntensity),
            void 0 !== t.gradientMap && (r.gradientMap = n(t.gradientMap)),
            r
        },
        setPath: function(t) {
            return this.path = t,
            this
        },
        setTextures: function(t) {
            return this.textures = t,
            this
        }
    });
    var Uc = {
        decodeText: function(t) {
            if ("undefined" != typeof TextDecoder)
                return (new TextDecoder).decode(t);
            for (var e = "", n = 0, r = t.length; n < r; n++)
                e += String.fromCharCode(t[n]);
            try {
                return decodeURIComponent(escape(e))
            } catch (t) {
                return e
            }
        },
        extractUrlBase: function(t) {
            var e = t.lastIndexOf("/");
            return -1 === e ? "./" : t.substr(0, e + 1)
        }
    };
    function Gc() {
        pr.call(this),
        this.type = "InstancedBufferGeometry",
        this.maxInstancedCount = void 0
    }
    function Fc(t, e, n, r) {
        "number" == typeof n && (r = n,
        n = !1,
        console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),
        Kn.call(this, t, e, n),
        this.meshPerAttribute = r || 1
    }
    function Hc(t) {
        this.manager = void 0 !== t ? t : Ys
    }
    Gc.prototype = Object.assign(Object.create(pr.prototype), {
        constructor: Gc,
        isInstancedBufferGeometry: !0,
        copy: function(t) {
            return pr.prototype.copy.call(this, t),
            this.maxInstancedCount = t.maxInstancedCount,
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        toJSON: function() {
            var t = pr.prototype.toJSON.call(this);
            return t.maxInstancedCount = this.maxInstancedCount,
            t.isInstancedBufferGeometry = !0,
            t
        }
    }),
    Fc.prototype = Object.assign(Object.create(Kn.prototype), {
        constructor: Fc,
        isInstancedBufferAttribute: !0,
        copy: function(t) {
            return Kn.prototype.copy.call(this, t),
            this.meshPerAttribute = t.meshPerAttribute,
            this
        },
        toJSON: function() {
            var t = Kn.prototype.toJSON.call(this);
            return t.meshPerAttribute = this.meshPerAttribute,
            t.isInstancedBufferAttribute = !0,
            t
        }
    }),
    Object.assign(Hc.prototype, {
        load: function(t, e, n, r) {
            var i = this
              , a = new Zs(i.manager);
            a.setPath(i.path),
            a.load(t, function(t) {
                e(i.parse(JSON.parse(t)))
            }, n, r)
        },
        parse: function(t) {
            var e = t.isInstancedBufferGeometry ? new Gc : new pr
              , n = t.data.index;
            if (void 0 !== n) {
                var r = new Vc[n.type](n.array);
                e.setIndex(new Kn(r,1))
            }
            var i = t.data.attributes;
            for (var a in i) {
                var o = i[a]
                  , s = (r = new Vc[o.type](o.array),
                new (o.isInstancedBufferAttribute ? Fc : Kn)(r,o.itemSize,o.normalized));
                void 0 !== o.name && (s.name = o.name),
                e.addAttribute(a, s)
            }
            var c = t.data.morphAttributes;
            if (c)
                for (var a in c) {
                    for (var u = c[a], h = [], l = 0, d = u.length; l < d; l++) {
                        o = u[l],
                        s = new Kn(r = new Vc[o.type](o.array),o.itemSize,o.normalized);
                        void 0 !== o.name && (s.name = o.name),
                        h.push(s)
                    }
                    e.morphAttributes[a] = h
                }
            var p = t.data.groups || t.data.drawcalls || t.data.offsets;
            if (void 0 !== p) {
                l = 0;
                for (var f = p.length; l !== f; ++l) {
                    var m = p[l];
                    e.addGroup(m.start, m.count, m.materialIndex)
                }
            }
            var g = t.data.boundingSphere;
            if (void 0 !== g) {
                var v = new We;
                void 0 !== g.center && v.fromArray(g.center),
                e.boundingSphere = new zn(v,g.radius)
            }
            return t.name && (e.name = t.name),
            t.userData && (e.userData = t.userData),
            e
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    });
    var Vc = {
        Int8Array: Int8Array,
        Uint8Array: Uint8Array,
        Uint8ClampedArray: "undefined" != typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
        Int16Array: Int16Array,
        Uint16Array: Uint16Array,
        Int32Array: Int32Array,
        Uint32Array: Uint32Array,
        Float32Array: Float32Array,
        Float64Array: Float64Array
    };
    function kc(t) {
        this.manager = void 0 !== t ? t : Ys,
        this.resourcePath = ""
    }
    Object.assign(kc.prototype, {
        crossOrigin: "anonymous",
        load: function(t, e, n, r) {
            var i = this
              , a = void 0 === this.path ? Uc.extractUrlBase(t) : this.path;
            this.resourcePath = this.resourcePath || a;
            var o = new Zs(i.manager);
            o.setPath(this.path),
            o.load(t, function(n) {
                var a = null;
                try {
                    a = JSON.parse(n)
                } catch (e) {
                    return void 0 !== r && r(e),
                    void console.error("THREE:ObjectLoader: Can't parse " + t + ".", e.message)
                }
                var o = a.metadata;
                void 0 !== o && void 0 !== o.type && "geometry" !== o.type.toLowerCase() ? i.parse(a, e) : console.error("THREE.ObjectLoader: Can't load " + t)
            }, n, r)
        },
        setPath: function(t) {
            return this.path = t,
            this
        },
        setResourcePath: function(t) {
            return this.resourcePath = t,
            this
        },
        setCrossOrigin: function(t) {
            return this.crossOrigin = t,
            this
        },
        parse: function(t, e) {
            var n = this.parseShape(t.shapes)
              , r = this.parseGeometries(t.geometries, n)
              , i = this.parseImages(t.images, function() {
                void 0 !== e && e(s)
            })
              , a = this.parseTextures(t.textures, i)
              , o = this.parseMaterials(t.materials, a)
              , s = this.parseObject(t.object, r, o);
            return t.animations && (s.animations = this.parseAnimations(t.animations)),
            void 0 !== t.images && 0 !== t.images.length || void 0 !== e && e(s),
            s
        },
        parseShape: function(t) {
            var e = {};
            if (void 0 !== t)
                for (var n = 0, r = t.length; n < r; n++) {
                    var i = (new Sc).fromJSON(t[n]);
                    e[i.uuid] = i
                }
            return e
        },
        parseGeometries: function(t, e) {
            var n = {};
            if (void 0 !== t)
                for (var r = new Hc, i = 0, a = t.length; i < a; i++) {
                    var o, s = t[i];
                    switch (s.type) {
                    case "PlaneGeometry":
                    case "PlaneBufferGeometry":
                        o = new xs[s.type](s.width,s.height,s.widthSegments,s.heightSegments);
                        break;
                    case "BoxGeometry":
                    case "BoxBufferGeometry":
                    case "CubeGeometry":
                        o = new xs[s.type](s.width,s.height,s.depth,s.widthSegments,s.heightSegments,s.depthSegments);
                        break;
                    case "CircleGeometry":
                    case "CircleBufferGeometry":
                        o = new xs[s.type](s.radius,s.segments,s.thetaStart,s.thetaLength);
                        break;
                    case "CylinderGeometry":
                    case "CylinderBufferGeometry":
                        o = new xs[s.type](s.radiusTop,s.radiusBottom,s.height,s.radialSegments,s.heightSegments,s.openEnded,s.thetaStart,s.thetaLength);
                        break;
                    case "ConeGeometry":
                    case "ConeBufferGeometry":
                        o = new xs[s.type](s.radius,s.height,s.radialSegments,s.heightSegments,s.openEnded,s.thetaStart,s.thetaLength);
                        break;
                    case "SphereGeometry":
                    case "SphereBufferGeometry":
                        o = new xs[s.type](s.radius,s.widthSegments,s.heightSegments,s.phiStart,s.phiLength,s.thetaStart,s.thetaLength);
                        break;
                    case "DodecahedronGeometry":
                    case "DodecahedronBufferGeometry":
                    case "IcosahedronGeometry":
                    case "IcosahedronBufferGeometry":
                    case "OctahedronGeometry":
                    case "OctahedronBufferGeometry":
                    case "TetrahedronGeometry":
                    case "TetrahedronBufferGeometry":
                        o = new xs[s.type](s.radius,s.detail);
                        break;
                    case "RingGeometry":
                    case "RingBufferGeometry":
                        o = new xs[s.type](s.innerRadius,s.outerRadius,s.thetaSegments,s.phiSegments,s.thetaStart,s.thetaLength);
                        break;
                    case "TorusGeometry":
                    case "TorusBufferGeometry":
                        o = new xs[s.type](s.radius,s.tube,s.radialSegments,s.tubularSegments,s.arc);
                        break;
                    case "TorusKnotGeometry":
                    case "TorusKnotBufferGeometry":
                        o = new xs[s.type](s.radius,s.tube,s.tubularSegments,s.radialSegments,s.p,s.q);
                        break;
                    case "TubeGeometry":
                    case "TubeBufferGeometry":
                        o = new xs[s.type]((new _c[s.path.type]).fromJSON(s.path),s.tubularSegments,s.radius,s.radialSegments,s.closed);
                        break;
                    case "LatheGeometry":
                    case "LatheBufferGeometry":
                        o = new xs[s.type](s.points,s.segments,s.phiStart,s.phiLength);
                        break;
                    case "PolyhedronGeometry":
                    case "PolyhedronBufferGeometry":
                        o = new xs[s.type](s.vertices,s.indices,s.radius,s.details);
                        break;
                    case "ShapeGeometry":
                    case "ShapeBufferGeometry":
                        for (var c = [], u = 0, h = s.shapes.length; u < h; u++) {
                            var l = e[s.shapes[u]];
                            c.push(l)
                        }
                        o = new xs[s.type](c,s.curveSegments);
                        break;
                    case "ExtrudeGeometry":
                    case "ExtrudeBufferGeometry":
                        for (c = [],
                        u = 0,
                        h = s.shapes.length; u < h; u++) {
                            l = e[s.shapes[u]];
                            c.push(l)
                        }
                        var d = s.options.extrudePath;
                        void 0 !== d && (s.options.extrudePath = (new _c[d.type]).fromJSON(d)),
                        o = new xs[s.type](c,s.options);
                        break;
                    case "BufferGeometry":
                    case "InstancedBufferGeometry":
                        o = r.parse(s);
                        break;
                    case "Geometry":
                        if ("THREE"in window && "LegacyJSONLoader"in THREE)
                            o = (new THREE.LegacyJSONLoader).parse(s, this.resourcePath).geometry;
                        else
                            console.error('THREE.ObjectLoader: You have to import LegacyJSONLoader in order load geometry data of type "Geometry".');
                        break;
                    default:
                        console.warn('THREE.ObjectLoader: Unsupported geometry type "' + s.type + '"');
                        continue
                    }
                    o.uuid = s.uuid,
                    void 0 !== s.name && (o.name = s.name),
                    !0 === o.isBufferGeometry && void 0 !== s.userData && (o.userData = s.userData),
                    n[s.uuid] = o
                }
            return n
        },
        parseMaterials: function(t, e) {
            var n = {}
              , r = {};
            if (void 0 !== t) {
                var i = new zc;
                i.setTextures(e);
                for (var a = 0, o = t.length; a < o; a++) {
                    var s = t[a];
                    if ("MultiMaterial" === s.type) {
                        for (var c = [], u = 0; u < s.materials.length; u++) {
                            var h = s.materials[u];
                            void 0 === n[h.uuid] && (n[h.uuid] = i.parse(h)),
                            c.push(n[h.uuid])
                        }
                        r[s.uuid] = c
                    } else
                        void 0 === n[s.uuid] && (n[s.uuid] = i.parse(s)),
                        r[s.uuid] = n[s.uuid]
                }
            }
            return r
        },
        parseAnimations: function(t) {
            for (var e = [], n = 0; n < t.length; n++) {
                var r = t[n]
                  , i = js.parse(r);
                void 0 !== r.uuid && (i.uuid = r.uuid),
                e.push(i)
            }
            return e
        },
        parseImages: function(t, e) {
            var n = this
              , r = {};
            function i(t) {
                return n.manager.itemStart(t),
                a.load(t, function() {
                    n.manager.itemEnd(t)
                }, void 0, function() {
                    n.manager.itemError(t),
                    n.manager.itemEnd(t)
                })
            }
            if (void 0 !== t && t.length > 0) {
                var a = new tc(new Xs(e));
                a.setCrossOrigin(this.crossOrigin);
                for (var o = 0, s = t.length; o < s; o++) {
                    var c = t[o]
                      , u = c.url;
                    if (Array.isArray(u)) {
                        r[c.uuid] = [];
                        for (var h = 0, l = u.length; h < l; h++) {
                            var d = u[h]
                              , p = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(d) ? d : n.resourcePath + d;
                            r[c.uuid].push(i(p))
                        }
                    } else {
                        p = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(c.url) ? c.url : n.resourcePath + c.url;
                        r[c.uuid] = i(p)
                    }
                }
            }
            return r
        },
        parseTextures: function(t, e) {
            function n(t, e) {
                return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t),
                e[t])
            }
            var r = {};
            if (void 0 !== t)
                for (var i = 0, a = t.length; i < a; i++) {
                    var o, s = t[i];
                    void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid),
                    void 0 === e[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image),
                    (o = Array.isArray(e[s.image]) ? new ti(e[s.image]) : new on(e[s.image])).needsUpdate = !0,
                    o.uuid = s.uuid,
                    void 0 !== s.name && (o.name = s.name),
                    void 0 !== s.mapping && (o.mapping = n(s.mapping, Jc)),
                    void 0 !== s.offset && o.offset.fromArray(s.offset),
                    void 0 !== s.repeat && o.repeat.fromArray(s.repeat),
                    void 0 !== s.center && o.center.fromArray(s.center),
                    void 0 !== s.rotation && (o.rotation = s.rotation),
                    void 0 !== s.wrap && (o.wrapS = n(s.wrap[0], Zc),
                    o.wrapT = n(s.wrap[1], Zc)),
                    void 0 !== s.format && (o.format = s.format),
                    void 0 !== s.type && (o.type = s.type),
                    void 0 !== s.encoding && (o.encoding = s.encoding),
                    void 0 !== s.minFilter && (o.minFilter = n(s.minFilter, Qc)),
                    void 0 !== s.magFilter && (o.magFilter = n(s.magFilter, Qc)),
                    void 0 !== s.anisotropy && (o.anisotropy = s.anisotropy),
                    void 0 !== s.flipY && (o.flipY = s.flipY),
                    void 0 !== s.premultiplyAlpha && (o.premultiplyAlpha = s.premultiplyAlpha),
                    void 0 !== s.unpackAlignment && (o.unpackAlignment = s.unpackAlignment),
                    r[s.uuid] = o
                }
            return r
        },
        parseObject: function(t, e, n) {
            var r;
            function i(t) {
                return void 0 === e[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t),
                e[t]
            }
            function a(t) {
                if (void 0 !== t) {
                    if (Array.isArray(t)) {
                        for (var e = [], r = 0, i = t.length; r < i; r++) {
                            var a = t[r];
                            void 0 === n[a] && console.warn("THREE.ObjectLoader: Undefined material", a),
                            e.push(n[a])
                        }
                        return e
                    }
                    return void 0 === n[t] && console.warn("THREE.ObjectLoader: Undefined material", t),
                    n[t]
                }
            }
            switch (t.type) {
            case "Scene":
                r = new Nn,
                void 0 !== t.background && Number.isInteger(t.background) && (r.background = new jn(t.background)),
                void 0 !== t.fog && ("Fog" === t.fog.type ? r.fog = new Ha(t.fog.color,t.fog.near,t.fog.far) : "FogExp2" === t.fog.type && (r.fog = new Fa(t.fog.color,t.fog.density)));
                break;
            case "PerspectiveCamera":
                r = new Tr(t.fov,t.aspect,t.near,t.far),
                void 0 !== t.focus && (r.focus = t.focus),
                void 0 !== t.zoom && (r.zoom = t.zoom),
                void 0 !== t.filmGauge && (r.filmGauge = t.filmGauge),
                void 0 !== t.filmOffset && (r.filmOffset = t.filmOffset),
                void 0 !== t.view && (r.view = Object.assign({}, t.view));
                break;
            case "OrthographicCamera":
                r = new Oc(t.left,t.right,t.top,t.bottom,t.near,t.far),
                void 0 !== t.zoom && (r.zoom = t.zoom),
                void 0 !== t.view && (r.view = Object.assign({}, t.view));
                break;
            case "AmbientLight":
                r = new Nc(t.color,t.intensity);
                break;
            case "DirectionalLight":
                r = new Dc(t.color,t.intensity);
                break;
            case "PointLight":
                r = new Cc(t.color,t.intensity,t.distance,t.decay);
                break;
            case "RectAreaLight":
                r = new Bc(t.color,t.intensity,t.width,t.height);
                break;
            case "SpotLight":
                r = new Pc(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay);
                break;
            case "HemisphereLight":
                r = new Ac(t.color,t.groundColor,t.intensity);
                break;
            case "SkinnedMesh":
                console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
            case "Mesh":
                var o = i(t.geometry)
                  , s = a(t.material);
                r = o.bones && o.bones.length > 0 ? new Xa(o,s) : new fr(o,s),
                void 0 !== t.drawMode && r.setDrawMode(t.drawMode);
                break;
            case "LOD":
                r = new qa;
                break;
            case "Line":
                r = new Qa(i(t.geometry),a(t.material),t.mode);
                break;
            case "LineLoop":
                r = new $a(i(t.geometry),a(t.material));
                break;
            case "LineSegments":
                r = new Ka(i(t.geometry),a(t.material));
                break;
            case "PointCloud":
            case "Points":
                r = new eo(i(t.geometry),a(t.material));
                break;
            case "Sprite":
                r = new Wa(a(t.material));
                break;
            case "Group":
                r = new Ta;
                break;
            default:
                r = new Dn
            }
            if (r.uuid = t.uuid,
            void 0 !== t.name && (r.name = t.name),
            void 0 !== t.matrix ? (r.matrix.fromArray(t.matrix),
            void 0 !== t.matrixAutoUpdate && (r.matrixAutoUpdate = t.matrixAutoUpdate),
            r.matrixAutoUpdate && r.matrix.decompose(r.position, r.quaternion, r.scale)) : (void 0 !== t.position && r.position.fromArray(t.position),
            void 0 !== t.rotation && r.rotation.fromArray(t.rotation),
            void 0 !== t.quaternion && r.quaternion.fromArray(t.quaternion),
            void 0 !== t.scale && r.scale.fromArray(t.scale)),
            void 0 !== t.castShadow && (r.castShadow = t.castShadow),
            void 0 !== t.receiveShadow && (r.receiveShadow = t.receiveShadow),
            t.shadow && (void 0 !== t.shadow.bias && (r.shadow.bias = t.shadow.bias),
            void 0 !== t.shadow.radius && (r.shadow.radius = t.shadow.radius),
            void 0 !== t.shadow.mapSize && r.shadow.mapSize.fromArray(t.shadow.mapSize),
            void 0 !== t.shadow.camera && (r.shadow.camera = this.parseObject(t.shadow.camera))),
            void 0 !== t.visible && (r.visible = t.visible),
            void 0 !== t.frustumCulled && (r.frustumCulled = t.frustumCulled),
            void 0 !== t.renderOrder && (r.renderOrder = t.renderOrder),
            void 0 !== t.userData && (r.userData = t.userData),
            void 0 !== t.layers && (r.layers.mask = t.layers),
            void 0 !== t.children)
                for (var c = t.children, u = 0; u < c.length; u++)
                    r.add(this.parseObject(c[u], e, n));
            if ("LOD" === t.type)
                for (var h = t.levels, l = 0; l < h.length; l++) {
                    var d = h[l]
                      , p = r.getObjectByProperty("uuid", d.object);
                    void 0 !== p && r.addLevel(p, d.distance)
                }
            return r
        }
    });
    var jc, Wc, qc, Xc, Yc, Jc = {
        UVMapping: lt,
        CubeReflectionMapping: dt,
        CubeRefractionMapping: pt,
        EquirectangularReflectionMapping: ft,
        EquirectangularRefractionMapping: mt,
        SphericalReflectionMapping: gt,
        CubeUVReflectionMapping: vt,
        CubeUVRefractionMapping: yt
    }, Zc = {
        RepeatWrapping: xt,
        ClampToEdgeWrapping: bt,
        MirroredRepeatWrapping: wt
    }, Qc = {
        NearestFilter: _t,
        NearestMipMapNearestFilter: Mt,
        NearestMipMapLinearFilter: Et,
        LinearFilter: St,
        LinearMipMapNearestFilter: Tt,
        LinearMipMapLinearFilter: At
    };
    function Kc(t) {
        "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),
        "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."),
        this.manager = void 0 !== t ? t : Ys,
        this.options = void 0
    }
    function $c() {
        this.type = "ShapePath",
        this.color = new jn,
        this.subPaths = [],
        this.currentPath = null
    }
    function tu(t) {
        this.type = "Font",
        this.data = t
    }
    function eu(t, e, n, r, i) {
        var a = i.glyphs[t] || i.glyphs["?"];
        if (a) {
            var o, s, c, u, h, l, d, p, f = new $c;
            if (a.o)
                for (var m = a._cachedOutline || (a._cachedOutline = a.o.split(" ")), g = 0, v = m.length; g < v; ) {
                    switch (m[g++]) {
                    case "m":
                        o = m[g++] * e + n,
                        s = m[g++] * e + r,
                        f.moveTo(o, s);
                        break;
                    case "l":
                        o = m[g++] * e + n,
                        s = m[g++] * e + r,
                        f.lineTo(o, s);
                        break;
                    case "q":
                        c = m[g++] * e + n,
                        u = m[g++] * e + r,
                        h = m[g++] * e + n,
                        l = m[g++] * e + r,
                        f.quadraticCurveTo(h, l, c, u);
                        break;
                    case "b":
                        c = m[g++] * e + n,
                        u = m[g++] * e + r,
                        h = m[g++] * e + n,
                        l = m[g++] * e + r,
                        d = m[g++] * e + n,
                        p = m[g++] * e + r,
                        f.bezierCurveTo(h, l, d, p, c, u)
                    }
                }
            return {
                offsetX: a.ha * e,
                path: f
            }
        }
    }
    function nu(t) {
        this.manager = void 0 !== t ? t : Ys
    }
    function ru() {}
    Kc.prototype = {
        constructor: Kc,
        setOptions: function(t) {
            return this.options = t,
            this
        },
        load: function(t, e, n, r) {
            void 0 === t && (t = ""),
            void 0 !== this.path && (t = this.path + t),
            t = this.manager.resolveURL(t);
            var i = this
              , a = qs.get(t);
            if (void 0 !== a)
                return i.manager.itemStart(t),
                setTimeout(function() {
                    e && e(a),
                    i.manager.itemEnd(t)
                }, 0),
                a;
            fetch(t).then(function(t) {
                return t.blob()
            }).then(function(t) {
                return void 0 === i.options ? createImageBitmap(t) : createImageBitmap(t, i.options)
            }).then(function(n) {
                qs.add(t, n),
                e && e(n),
                i.manager.itemEnd(t)
            }).catch(function(e) {
                r && r(e),
                i.manager.itemError(t),
                i.manager.itemEnd(t)
            }),
            i.manager.itemStart(t)
        },
        setCrossOrigin: function() {
            return this
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    },
    Object.assign($c.prototype, {
        moveTo: function(t, e) {
            this.currentPath = new Ec,
            this.subPaths.push(this.currentPath),
            this.currentPath.moveTo(t, e)
        },
        lineTo: function(t, e) {
            this.currentPath.lineTo(t, e)
        },
        quadraticCurveTo: function(t, e, n, r) {
            this.currentPath.quadraticCurveTo(t, e, n, r)
        },
        bezierCurveTo: function(t, e, n, r, i, a) {
            this.currentPath.bezierCurveTo(t, e, n, r, i, a)
        },
        splineThru: function(t) {
            this.currentPath.splineThru(t)
        },
        toShapes: function(t, e) {
            function n(t) {
                for (var e = [], n = 0, r = t.length; n < r; n++) {
                    var i = t[n]
                      , a = new Sc;
                    a.curves = i.curves,
                    e.push(a)
                }
                return e
            }
            function r(t, e) {
                for (var n = e.length, r = !1, i = n - 1, a = 0; a < n; i = a++) {
                    var o = e[i]
                      , s = e[a]
                      , c = s.x - o.x
                      , u = s.y - o.y;
                    if (Math.abs(u) > Number.EPSILON) {
                        if (u < 0 && (o = e[a],
                        c = -c,
                        s = e[i],
                        u = -u),
                        t.y < o.y || t.y > s.y)
                            continue;
                        if (t.y === o.y) {
                            if (t.x === o.x)
                                return !0
                        } else {
                            var h = u * (t.x - o.x) - c * (t.y - o.y);
                            if (0 === h)
                                return !0;
                            if (h < 0)
                                continue;
                            r = !r
                        }
                    } else {
                        if (t.y !== o.y)
                            continue;
                        if (s.x <= t.x && t.x <= o.x || o.x <= t.x && t.x <= s.x)
                            return !0
                    }
                }
                return r
            }
            var i = Yo.isClockWise
              , a = this.subPaths;
            if (0 === a.length)
                return [];
            if (!0 === e)
                return n(a);
            var o, s, c, u = [];
            if (1 === a.length)
                return s = a[0],
                (c = new Sc).curves = s.curves,
                u.push(c),
                u;
            var h = !i(a[0].getPoints());
            h = t ? !h : h;
            var l, d, p = [], f = [], m = [], g = 0;
            f[g] = void 0,
            m[g] = [];
            for (var v = 0, y = a.length; v < y; v++)
                o = i(l = (s = a[v]).getPoints()),
                (o = t ? !o : o) ? (!h && f[g] && g++,
                f[g] = {
                    s: new Sc,
                    p: l
                },
                f[g].s.curves = s.curves,
                h && g++,
                m[g] = []) : m[g].push({
                    h: s,
                    p: l[0]
                });
            if (!f[0])
                return n(a);
            if (f.length > 1) {
                for (var x = !1, b = [], w = 0, _ = f.length; w < _; w++)
                    p[w] = [];
                for (w = 0,
                _ = f.length; w < _; w++)
                    for (var M = m[w], E = 0; E < M.length; E++) {
                        for (var S = M[E], T = !0, A = 0; A < f.length; A++)
                            r(S.p, f[A].p) && (w !== A && b.push({
                                froms: w,
                                tos: A,
                                hole: E
                            }),
                            T ? (T = !1,
                            p[A].push(S)) : x = !0);
                        T && p[w].push(S)
                    }
                b.length > 0 && (x || (m = p))
            }
            v = 0;
            for (var L = f.length; v < L; v++) {
                c = f[v].s,
                u.push(c);
                for (var R = 0, P = (d = m[v]).length; R < P; R++)
                    c.holes.push(d[R].h)
            }
            return u
        }
    }),
    Object.assign(tu.prototype, {
        isFont: !0,
        generateShapes: function(t, e) {
            void 0 === e && (e = 100);
            for (var n = [], r = function(t, e, n) {
                for (var r = Array.from ? Array.from(t) : String(t).split(""), i = e / n.resolution, a = (n.boundingBox.yMax - n.boundingBox.yMin + n.underlineThickness) * i, o = [], s = 0, c = 0, u = 0; u < r.length; u++) {
                    var h = r[u];
                    if ("\n" === h)
                        s = 0,
                        c -= a;
                    else {
                        var l = eu(h, i, s, c, n);
                        s += l.offsetX,
                        o.push(l.path)
                    }
                }
                return o
            }(t, e, this.data), i = 0, a = r.length; i < a; i++)
                Array.prototype.push.apply(n, r[i].toShapes());
            return n
        }
    }),
    Object.assign(nu.prototype, {
        load: function(t, e, n, r) {
            var i = this
              , a = new Zs(this.manager);
            a.setPath(this.path),
            a.load(t, function(t) {
                var n;
                try {
                    n = JSON.parse(t)
                } catch (e) {
                    console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),
                    n = JSON.parse(t.substring(65, t.length - 2))
                }
                var r = i.parse(n);
                e && e(r)
            }, n, r)
        },
        parse: function(t) {
            return new tu(t)
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    }),
    ru.Handlers = {
        handlers: [],
        add: function(t, e) {
            this.handlers.push(t, e)
        },
        get: function(t) {
            for (var e = this.handlers, n = 0, r = e.length; n < r; n += 2) {
                var i = e[n]
                  , a = e[n + 1];
                if (i.test(t))
                    return a
            }
            return null
        }
    },
    Object.assign(ru.prototype, {
        crossOrigin: "anonymous",
        onLoadStart: function() {},
        onLoadProgress: function() {},
        onLoadComplete: function() {},
        initMaterials: function(t, e, n) {
            for (var r = [], i = 0; i < t.length; ++i)
                r[i] = this.createMaterial(t[i], e, n);
            return r
        },
        createMaterial: (jc = {
            NoBlending: T,
            NormalBlending: A,
            AdditiveBlending: L,
            SubtractiveBlending: R,
            MultiplyBlending: P,
            CustomBlending: C
        },
        Wc = new jn,
        qc = new nc,
        Xc = new zc,
        function(t, e, n) {
            var r = {};
            function i(t, i, a, o, s) {
                var c, u = e + t, h = ru.Handlers.get(u);
                null !== h ? c = h.load(u) : (qc.setCrossOrigin(n),
                c = qc.load(u)),
                void 0 !== i && (c.repeat.fromArray(i),
                1 !== i[0] && (c.wrapS = xt),
                1 !== i[1] && (c.wrapT = xt)),
                void 0 !== a && c.offset.fromArray(a),
                void 0 !== o && ("repeat" === o[0] && (c.wrapS = xt),
                "mirror" === o[0] && (c.wrapS = wt),
                "repeat" === o[1] && (c.wrapT = xt),
                "mirror" === o[1] && (c.wrapT = wt)),
                void 0 !== s && (c.anisotropy = s);
                var l = Ve.generateUUID();
                return r[l] = c,
                l
            }
            var a = {
                uuid: Ve.generateUUID(),
                type: "MeshLambertMaterial"
            };
            for (var o in t) {
                var s = t[o];
                switch (o) {
                case "DbgColor":
                case "DbgIndex":
                case "opticalDensity":
                case "illumination":
                    break;
                case "DbgName":
                    a.name = s;
                    break;
                case "blending":
                    a.blending = jc[s];
                    break;
                case "colorAmbient":
                case "mapAmbient":
                    console.warn("THREE.Loader.createMaterial:", o, "is no longer supported.");
                    break;
                case "colorDiffuse":
                    a.color = Wc.fromArray(s).getHex();
                    break;
                case "colorSpecular":
                    a.specular = Wc.fromArray(s).getHex();
                    break;
                case "colorEmissive":
                    a.emissive = Wc.fromArray(s).getHex();
                    break;
                case "specularCoef":
                    a.shininess = s;
                    break;
                case "shading":
                    "basic" === s.toLowerCase() && (a.type = "MeshBasicMaterial"),
                    "phong" === s.toLowerCase() && (a.type = "MeshPhongMaterial"),
                    "standard" === s.toLowerCase() && (a.type = "MeshStandardMaterial");
                    break;
                case "mapDiffuse":
                    a.map = i(s, t.mapDiffuseRepeat, t.mapDiffuseOffset, t.mapDiffuseWrap, t.mapDiffuseAnisotropy);
                    break;
                case "mapDiffuseRepeat":
                case "mapDiffuseOffset":
                case "mapDiffuseWrap":
                case "mapDiffuseAnisotropy":
                    break;
                case "mapEmissive":
                    a.emissiveMap = i(s, t.mapEmissiveRepeat, t.mapEmissiveOffset, t.mapEmissiveWrap, t.mapEmissiveAnisotropy);
                    break;
                case "mapEmissiveRepeat":
                case "mapEmissiveOffset":
                case "mapEmissiveWrap":
                case "mapEmissiveAnisotropy":
                    break;
                case "mapLight":
                    a.lightMap = i(s, t.mapLightRepeat, t.mapLightOffset, t.mapLightWrap, t.mapLightAnisotropy);
                    break;
                case "mapLightRepeat":
                case "mapLightOffset":
                case "mapLightWrap":
                case "mapLightAnisotropy":
                    break;
                case "mapAO":
                    a.aoMap = i(s, t.mapAORepeat, t.mapAOOffset, t.mapAOWrap, t.mapAOAnisotropy);
                    break;
                case "mapAORepeat":
                case "mapAOOffset":
                case "mapAOWrap":
                case "mapAOAnisotropy":
                    break;
                case "mapBump":
                    a.bumpMap = i(s, t.mapBumpRepeat, t.mapBumpOffset, t.mapBumpWrap, t.mapBumpAnisotropy);
                    break;
                case "mapBumpScale":
                    a.bumpScale = s;
                    break;
                case "mapBumpRepeat":
                case "mapBumpOffset":
                case "mapBumpWrap":
                case "mapBumpAnisotropy":
                    break;
                case "mapNormal":
                    a.normalMap = i(s, t.mapNormalRepeat, t.mapNormalOffset, t.mapNormalWrap, t.mapNormalAnisotropy);
                    break;
                case "mapNormalFactor":
                    a.normalScale = s;
                    break;
                case "mapNormalRepeat":
                case "mapNormalOffset":
                case "mapNormalWrap":
                case "mapNormalAnisotropy":
                    break;
                case "mapSpecular":
                    a.specularMap = i(s, t.mapSpecularRepeat, t.mapSpecularOffset, t.mapSpecularWrap, t.mapSpecularAnisotropy);
                    break;
                case "mapSpecularRepeat":
                case "mapSpecularOffset":
                case "mapSpecularWrap":
                case "mapSpecularAnisotropy":
                    break;
                case "mapMetalness":
                    a.metalnessMap = i(s, t.mapMetalnessRepeat, t.mapMetalnessOffset, t.mapMetalnessWrap, t.mapMetalnessAnisotropy);
                    break;
                case "mapMetalnessRepeat":
                case "mapMetalnessOffset":
                case "mapMetalnessWrap":
                case "mapMetalnessAnisotropy":
                    break;
                case "mapRoughness":
                    a.roughnessMap = i(s, t.mapRoughnessRepeat, t.mapRoughnessOffset, t.mapRoughnessWrap, t.mapRoughnessAnisotropy);
                    break;
                case "mapRoughnessRepeat":
                case "mapRoughnessOffset":
                case "mapRoughnessWrap":
                case "mapRoughnessAnisotropy":
                    break;
                case "mapAlpha":
                    a.alphaMap = i(s, t.mapAlphaRepeat, t.mapAlphaOffset, t.mapAlphaWrap, t.mapAlphaAnisotropy);
                    break;
                case "mapAlphaRepeat":
                case "mapAlphaOffset":
                case "mapAlphaWrap":
                case "mapAlphaAnisotropy":
                    break;
                case "flipSided":
                    a.side = x;
                    break;
                case "doubleSided":
                    a.side = b;
                    break;
                case "transparency":
                    console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"),
                    a.opacity = s;
                    break;
                case "depthTest":
                case "depthWrite":
                case "colorWrite":
                case "opacity":
                case "reflectivity":
                case "transparent":
                case "visible":
                case "wireframe":
                    a[o] = s;
                    break;
                case "vertexColors":
                    !0 === s && (a.vertexColors = S),
                    "face" === s && (a.vertexColors = E);
                    break;
                default:
                    console.error("THREE.Loader.createMaterial: Unsupported", o, s)
                }
            }
            return "MeshBasicMaterial" === a.type && delete a.emissive,
            "MeshPhongMaterial" !== a.type && delete a.specular,
            a.opacity < 1 && (a.transparent = !0),
            Xc.setTextures(r),
            Xc.parse(a)
        }
        )
    });
    var iu = {
        getContext: function() {
            return void 0 === Yc && (Yc = new (window.AudioContext || window.webkitAudioContext)),
            Yc
        },
        setContext: function(t) {
            Yc = t
        }
    };
    function au(t) {
        this.manager = void 0 !== t ? t : Ys
    }
    function ou() {
        this.coefficients = [];
        for (var t = 0; t < 9; t++)
            this.coefficients.push(new We)
    }
    function su(t, e) {
        Tc.call(this, void 0, e),
        this.sh = void 0 !== t ? t : new ou
    }
    function cu(t, e, n) {
        su.call(this, void 0, n);
        var r = (new jn).set(t)
          , i = (new jn).set(e)
          , a = new We(r.r,r.g,r.b)
          , o = new We(i.r,i.g,i.b)
          , s = Math.sqrt(Math.PI)
          , c = s * Math.sqrt(.75);
        this.sh.coefficients[0].copy(a).add(o).multiplyScalar(s),
        this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c)
    }
    function uu(t, e) {
        su.call(this, void 0, e);
        var n = (new jn).set(t);
        this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI))
    }
    function hu() {
        this.type = "StereoCamera",
        this.aspect = 1,
        this.eyeSep = .064,
        this.cameraL = new Tr,
        this.cameraL.layers.enable(1),
        this.cameraL.matrixAutoUpdate = !1,
        this.cameraR = new Tr,
        this.cameraR.layers.enable(2),
        this.cameraR.matrixAutoUpdate = !1
    }
    function lu(t) {
        this.autoStart = void 0 === t || t,
        this.startTime = 0,
        this.oldTime = 0,
        this.elapsedTime = 0,
        this.running = !1
    }
    function du() {
        Dn.call(this),
        this.type = "AudioListener",
        this.context = iu.getContext(),
        this.gain = this.context.createGain(),
        this.gain.connect(this.context.destination),
        this.filter = null,
        this.timeDelta = 0
    }
    function pu(t) {
        Dn.call(this),
        this.type = "Audio",
        this.listener = t,
        this.context = t.context,
        this.gain = this.context.createGain(),
        this.gain.connect(t.getInput()),
        this.autoplay = !1,
        this.buffer = null,
        this.detune = 0,
        this.loop = !1,
        this.startTime = 0,
        this.offset = 0,
        this.playbackRate = 1,
        this.isPlaying = !1,
        this.hasPlaybackControl = !0,
        this.sourceType = "empty",
        this.filters = []
    }
    function fu(t) {
        pu.call(this, t),
        this.panner = this.context.createPanner(),
        this.panner.panningModel = "HRTF",
        this.panner.connect(this.gain)
    }
    function mu(t, e) {
        this.analyser = t.context.createAnalyser(),
        this.analyser.fftSize = void 0 !== e ? e : 2048,
        this.data = new Uint8Array(this.analyser.frequencyBinCount),
        t.getOutput().connect(this.analyser)
    }
    function gu(t, e, n) {
        this.binding = t,
        this.valueSize = n;
        var r, i = Float64Array;
        switch (e) {
        case "quaternion":
            r = this._slerp;
            break;
        case "string":
        case "bool":
            i = Array,
            r = this._select;
            break;
        default:
            r = this._lerp
        }
        this.buffer = new i(4 * n),
        this._mixBufferRegion = r,
        this.cumulativeWeight = 0,
        this.useCount = 0,
        this.referenceCount = 0
    }
    Object.assign(au.prototype, {
        load: function(t, e, n, r) {
            var i = new Zs(this.manager);
            i.setResponseType("arraybuffer"),
            i.setPath(this.path),
            i.load(t, function(t) {
                var n = t.slice(0);
                iu.getContext().decodeAudioData(n, function(t) {
                    e(t)
                })
            }, n, r)
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    }),
    Object.assign(ou.prototype, {
        isSphericalHarmonics3: !0,
        set: function(t) {
            for (var e = 0; e < 9; e++)
                this.coefficients[e].copy(t[e]);
            return this
        },
        zero: function() {
            for (var t = 0; t < 9; t++)
                this.coefficients[t].set(0, 0, 0);
            return this
        },
        getAt: function(t, e) {
            var n = t.x
              , r = t.y
              , i = t.z
              , a = this.coefficients;
            return e.copy(a[0]).multiplyScalar(.282095),
            e.addScale(a[1], .488603 * r),
            e.addScale(a[2], .488603 * i),
            e.addScale(a[3], .488603 * n),
            e.addScale(a[4], n * r * 1.092548),
            e.addScale(a[5], r * i * 1.092548),
            e.addScale(a[6], .315392 * (3 * i * i - 1)),
            e.addScale(a[7], n * i * 1.092548),
            e.addScale(a[8], .546274 * (n * n - r * r)),
            e
        },
        getIrradianceAt: function(t, e) {
            var n = t.x
              , r = t.y
              , i = t.z
              , a = this.coefficients;
            return e.copy(a[0]).multiplyScalar(.886227),
            e.addScale(a[1], 1.023328 * r),
            e.addScale(a[2], 1.023328 * i),
            e.addScale(a[3], 1.023328 * n),
            e.addScale(a[4], .858086 * n * r),
            e.addScale(a[5], .858086 * r * i),
            e.addScale(a[6], .743125 * i * i - .247708),
            e.addScale(a[7], .858086 * n * i),
            e.addScale(a[8], .429043 * (n * n - r * r)),
            e
        },
        add: function(t) {
            for (var e = 0; e < 9; e++)
                this.coefficients[e].add(t.coefficients[e]);
            return this
        },
        scale: function(t) {
            for (var e = 0; e < 9; e++)
                this.coefficients[e].multiplyScalar(t);
            return this
        },
        lerp: function(t, e) {
            for (var n = 0; n < 9; n++)
                this.coefficients[n].lerp(t.coefficients[n], e);
            return this
        },
        equals: function(t) {
            for (var e = 0; e < 9; e++)
                if (!this.coefficients[e].equals(t.coefficients[e]))
                    return !1;
            return !0
        },
        copy: function(t) {
            return this.set(t.coefficients)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        fromArray: function(t) {
            for (var e = this.coefficients, n = 0; n < 9; n++)
                e[n].fromArray(t, 3 * n);
            return this
        },
        toArray: function() {
            for (var t = [], e = this.coefficients, n = 0; n < 9; n++)
                e[n].toArray(t, 3 * n);
            return t
        }
    }),
    Object.assign(ou, {
        getBasisAt: function(t, e) {
            var n = t.x
              , r = t.y
              , i = t.z;
            e[0] = .282095,
            e[1] = .488603 * r,
            e[2] = .488603 * i,
            e[3] = .488603 * n,
            e[4] = 1.092548 * n * r,
            e[5] = 1.092548 * r * i,
            e[6] = .315392 * (3 * i * i - 1),
            e[7] = 1.092548 * n * i,
            e[8] = .546274 * (n * n - r * r)
        }
    }),
    su.prototype = Object.assign(Object.create(Tc.prototype), {
        constructor: su,
        isLightProbe: !0,
        copy: function(t) {
            return Tc.prototype.copy.call(this, t),
            this.sh.copy(t.sh),
            this.intensity = t.intensity,
            this
        },
        toJSON: function(t) {
            return Tc.prototype.toJSON.call(this, t)
        }
    }),
    cu.prototype = Object.assign(Object.create(su.prototype), {
        constructor: cu,
        isHemisphereLightProbe: !0,
        copy: function(t) {
            return su.prototype.copy.call(this, t),
            this
        },
        toJSON: function(t) {
            return su.prototype.toJSON.call(this, t)
        }
    }),
    uu.prototype = Object.assign(Object.create(su.prototype), {
        constructor: uu,
        isAmbientLightProbe: !0,
        copy: function(t) {
            return su.prototype.copy.call(this, t),
            this
        },
        toJSON: function(t) {
            return su.prototype.toJSON.call(this, t)
        }
    }),
    Object.assign(hu.prototype, {
        update: function() {
            var t, e, n, r, i, a, o, s, c = new hn, u = new hn;
            return function(h) {
                if (t !== this || e !== h.focus || n !== h.fov || r !== h.aspect * this.aspect || i !== h.near || a !== h.far || o !== h.zoom || s !== this.eyeSep) {
                    t = this,
                    e = h.focus,
                    n = h.fov,
                    r = h.aspect * this.aspect,
                    i = h.near,
                    a = h.far,
                    o = h.zoom;
                    var l, d, p = h.projectionMatrix.clone(), f = (s = this.eyeSep / 2) * i / e, m = i * Math.tan(Ve.DEG2RAD * n * .5) / o;
                    u.elements[12] = -s,
                    c.elements[12] = s,
                    l = -m * r + f,
                    d = m * r + f,
                    p.elements[0] = 2 * i / (d - l),
                    p.elements[8] = (d + l) / (d - l),
                    this.cameraL.projectionMatrix.copy(p),
                    l = -m * r - f,
                    d = m * r - f,
                    p.elements[0] = 2 * i / (d - l),
                    p.elements[8] = (d + l) / (d - l),
                    this.cameraR.projectionMatrix.copy(p)
                }
                this.cameraL.matrixWorld.copy(h.matrixWorld).multiply(u),
                this.cameraR.matrixWorld.copy(h.matrixWorld).multiply(c)
            }
        }()
    }),
    Object.assign(lu.prototype, {
        start: function() {
            this.startTime = ("undefined" == typeof performance ? Date : performance).now(),
            this.oldTime = this.startTime,
            this.elapsedTime = 0,
            this.running = !0
        },
        stop: function() {
            this.getElapsedTime(),
            this.running = !1,
            this.autoStart = !1
        },
        getElapsedTime: function() {
            return this.getDelta(),
            this.elapsedTime
        },
        getDelta: function() {
            var t = 0;
            if (this.autoStart && !this.running)
                return this.start(),
                0;
            if (this.running) {
                var e = ("undefined" == typeof performance ? Date : performance).now();
                t = (e - this.oldTime) / 1e3,
                this.oldTime = e,
                this.elapsedTime += t
            }
            return t
        }
    }),
    du.prototype = Object.assign(Object.create(Dn.prototype), {
        constructor: du,
        getInput: function() {
            return this.gain
        },
        removeFilter: function() {
            return null !== this.filter && (this.gain.disconnect(this.filter),
            this.filter.disconnect(this.context.destination),
            this.gain.connect(this.context.destination),
            this.filter = null),
            this
        },
        getFilter: function() {
            return this.filter
        },
        setFilter: function(t) {
            return null !== this.filter ? (this.gain.disconnect(this.filter),
            this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination),
            this.filter = t,
            this.gain.connect(this.filter),
            this.filter.connect(this.context.destination),
            this
        },
        getMasterVolume: function() {
            return this.gain.gain.value
        },
        setMasterVolume: function(t) {
            return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01),
            this
        },
        updateMatrixWorld: function() {
            var t = new We
              , e = new je
              , n = new We
              , r = new We
              , i = new lu;
            return function(a) {
                Dn.prototype.updateMatrixWorld.call(this, a);
                var o = this.context.listener
                  , s = this.up;
                if (this.timeDelta = i.getDelta(),
                this.matrixWorld.decompose(t, e, n),
                r.set(0, 0, -1).applyQuaternion(e),
                o.positionX) {
                    var c = this.context.currentTime + this.timeDelta;
                    o.positionX.linearRampToValueAtTime(t.x, c),
                    o.positionY.linearRampToValueAtTime(t.y, c),
                    o.positionZ.linearRampToValueAtTime(t.z, c),
                    o.forwardX.linearRampToValueAtTime(r.x, c),
                    o.forwardY.linearRampToValueAtTime(r.y, c),
                    o.forwardZ.linearRampToValueAtTime(r.z, c),
                    o.upX.linearRampToValueAtTime(s.x, c),
                    o.upY.linearRampToValueAtTime(s.y, c),
                    o.upZ.linearRampToValueAtTime(s.z, c)
                } else
                    o.setPosition(t.x, t.y, t.z),
                    o.setOrientation(r.x, r.y, r.z, s.x, s.y, s.z)
            }
        }()
    }),
    pu.prototype = Object.assign(Object.create(Dn.prototype), {
        constructor: pu,
        getOutput: function() {
            return this.gain
        },
        setNodeSource: function(t) {
            return this.hasPlaybackControl = !1,
            this.sourceType = "audioNode",
            this.source = t,
            this.connect(),
            this
        },
        setMediaElementSource: function(t) {
            return this.hasPlaybackControl = !1,
            this.sourceType = "mediaNode",
            this.source = this.context.createMediaElementSource(t),
            this.connect(),
            this
        },
        setBuffer: function(t) {
            return this.buffer = t,
            this.sourceType = "buffer",
            this.autoplay && this.play(),
            this
        },
        play: function() {
            if (!0 !== this.isPlaying) {
                if (!1 !== this.hasPlaybackControl) {
                    var t = this.context.createBufferSource();
                    return t.buffer = this.buffer,
                    t.loop = this.loop,
                    t.onended = this.onEnded.bind(this),
                    this.startTime = this.context.currentTime,
                    t.start(this.startTime, this.offset),
                    this.isPlaying = !0,
                    this.source = t,
                    this.setDetune(this.detune),
                    this.setPlaybackRate(this.playbackRate),
                    this.connect()
                }
                console.warn("THREE.Audio: this Audio has no playback control.")
            } else
                console.warn("THREE.Audio: Audio is already playing.")
        },
        pause: function() {
            if (!1 !== this.hasPlaybackControl)
                return !0 === this.isPlaying && (this.source.stop(),
                this.source.onended = null,
                this.offset += (this.context.currentTime - this.startTime) * this.playbackRate,
                this.isPlaying = !1),
                this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        },
        stop: function() {
            if (!1 !== this.hasPlaybackControl)
                return this.source.stop(),
                this.source.onended = null,
                this.offset = 0,
                this.isPlaying = !1,
                this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        },
        connect: function() {
            if (this.filters.length > 0) {
                this.source.connect(this.filters[0]);
                for (var t = 1, e = this.filters.length; t < e; t++)
                    this.filters[t - 1].connect(this.filters[t]);
                this.filters[this.filters.length - 1].connect(this.getOutput())
            } else
                this.source.connect(this.getOutput());
            return this
        },
        disconnect: function() {
            if (this.filters.length > 0) {
                this.source.disconnect(this.filters[0]);
                for (var t = 1, e = this.filters.length; t < e; t++)
                    this.filters[t - 1].disconnect(this.filters[t]);
                this.filters[this.filters.length - 1].disconnect(this.getOutput())
            } else
                this.source.disconnect(this.getOutput());
            return this
        },
        getFilters: function() {
            return this.filters
        },
        setFilters: function(t) {
            return t || (t = []),
            !0 === this.isPlaying ? (this.disconnect(),
            this.filters = t,
            this.connect()) : this.filters = t,
            this
        },
        setDetune: function(t) {
            if (this.detune = t,
            void 0 !== this.source.detune)
                return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01),
                this
        },
        getDetune: function() {
            return this.detune
        },
        getFilter: function() {
            return this.getFilters()[0]
        },
        setFilter: function(t) {
            return this.setFilters(t ? [t] : [])
        },
        setPlaybackRate: function(t) {
            if (!1 !== this.hasPlaybackControl)
                return this.playbackRate = t,
                !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01),
                this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        },
        getPlaybackRate: function() {
            return this.playbackRate
        },
        onEnded: function() {
            this.isPlaying = !1
        },
        getLoop: function() {
            return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."),
            !1) : this.loop
        },
        setLoop: function(t) {
            if (!1 !== this.hasPlaybackControl)
                return this.loop = t,
                !0 === this.isPlaying && (this.source.loop = this.loop),
                this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        },
        getVolume: function() {
            return this.gain.gain.value
        },
        setVolume: function(t) {
            return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01),
            this
        }
    }),
    fu.prototype = Object.assign(Object.create(pu.prototype), {
        constructor: fu,
        getOutput: function() {
            return this.panner
        },
        getRefDistance: function() {
            return this.panner.refDistance
        },
        setRefDistance: function(t) {
            return this.panner.refDistance = t,
            this
        },
        getRolloffFactor: function() {
            return this.panner.rolloffFactor
        },
        setRolloffFactor: function(t) {
            return this.panner.rolloffFactor = t,
            this
        },
        getDistanceModel: function() {
            return this.panner.distanceModel
        },
        setDistanceModel: function(t) {
            return this.panner.distanceModel = t,
            this
        },
        getMaxDistance: function() {
            return this.panner.maxDistance
        },
        setMaxDistance: function(t) {
            return this.panner.maxDistance = t,
            this
        },
        setDirectionalCone: function(t, e, n) {
            return this.panner.coneInnerAngle = t,
            this.panner.coneOuterAngle = e,
            this.panner.coneOuterGain = n,
            this
        },
        updateMatrixWorld: function() {
            var t = new We
              , e = new je
              , n = new We
              , r = new We;
            return function(i) {
                if (Dn.prototype.updateMatrixWorld.call(this, i),
                !0 !== this.hasPlaybackControl || !1 !== this.isPlaying) {
                    this.matrixWorld.decompose(t, e, n),
                    r.set(0, 0, 1).applyQuaternion(e);
                    var a = this.panner;
                    if (a.positionX) {
                        var o = this.context.currentTime + this.listener.timeDelta;
                        a.positionX.linearRampToValueAtTime(t.x, o),
                        a.positionY.linearRampToValueAtTime(t.y, o),
                        a.positionZ.linearRampToValueAtTime(t.z, o),
                        a.orientationX.linearRampToValueAtTime(r.x, o),
                        a.orientationY.linearRampToValueAtTime(r.y, o),
                        a.orientationZ.linearRampToValueAtTime(r.z, o)
                    } else
                        a.setPosition(t.x, t.y, t.z),
                        a.setOrientation(r.x, r.y, r.z)
                }
            }
        }()
    }),
    Object.assign(mu.prototype, {
        getFrequencyData: function() {
            return this.analyser.getByteFrequencyData(this.data),
            this.data
        },
        getAverageFrequency: function() {
            for (var t = 0, e = this.getFrequencyData(), n = 0; n < e.length; n++)
                t += e[n];
            return t / e.length
        }
    }),
    Object.assign(gu.prototype, {
        accumulate: function(t, e) {
            var n = this.buffer
              , r = this.valueSize
              , i = t * r + r
              , a = this.cumulativeWeight;
            if (0 === a) {
                for (var o = 0; o !== r; ++o)
                    n[i + o] = n[o];
                a = e
            } else {
                var s = e / (a += e);
                this._mixBufferRegion(n, i, 0, s, r)
            }
            this.cumulativeWeight = a
        },
        apply: function(t) {
            var e = this.valueSize
              , n = this.buffer
              , r = t * e + e
              , i = this.cumulativeWeight
              , a = this.binding;
            if (this.cumulativeWeight = 0,
            i < 1) {
                var o = 3 * e;
                this._mixBufferRegion(n, r, o, 1 - i, e)
            }
            for (var s = e, c = e + e; s !== c; ++s)
                if (n[s] !== n[s + e]) {
                    a.setValue(n, r);
                    break
                }
        },
        saveOriginalState: function() {
            var t = this.binding
              , e = this.buffer
              , n = this.valueSize
              , r = 3 * n;
            t.getValue(e, r);
            for (var i = n, a = r; i !== a; ++i)
                e[i] = e[r + i % n];
            this.cumulativeWeight = 0
        },
        restoreOriginalState: function() {
            var t = 3 * this.valueSize;
            this.binding.setValue(this.buffer, t)
        },
        _select: function(t, e, n, r, i) {
            if (r >= .5)
                for (var a = 0; a !== i; ++a)
                    t[e + a] = t[n + a]
        },
        _slerp: function(t, e, n, r) {
            je.slerpFlat(t, e, t, e, t, n, r)
        },
        _lerp: function(t, e, n, r, i) {
            for (var a = 1 - r, o = 0; o !== i; ++o) {
                var s = e + o;
                t[s] = t[s] * a + t[n + o] * r
            }
        }
    });
    var vu, yu, xu, bu, wu, _u, Mu, Eu, Su, Tu, Au, Lu, Ru, Pu, Cu;
    function Ou(t, e, n) {
        var r = n || Iu.parseTrackName(e);
        this._targetGroup = t,
        this._bindings = t.subscribe_(e, r)
    }
    function Iu(t, e, n) {
        this.path = e,
        this.parsedPath = n || Iu.parseTrackName(e),
        this.node = Iu.findNode(t, this.parsedPath.nodeName) || t,
        this.rootNode = t
    }
    function Du() {
        this.uuid = Ve.generateUUID(),
        this._objects = Array.prototype.slice.call(arguments),
        this.nCachedObjects_ = 0;
        var t = {};
        this._indicesByUUID = t;
        for (var e = 0, n = arguments.length; e !== n; ++e)
            t[arguments[e].uuid] = e;
        this._paths = [],
        this._parsedPaths = [],
        this._bindings = [],
        this._bindingsIndicesByPath = {};
        var r = this;
        this.stats = {
            objects: {
                get total() {
                    return r._objects.length
                },
                get inUse() {
                    return this.total - r.nCachedObjects_
                }
            },
            get bindingsPerObject() {
                return r._bindings.length
            }
        }
    }
    function Nu(t, e, n) {
        this._mixer = t,
        this._clip = e,
        this._localRoot = n || null;
        for (var r = e.tracks, i = r.length, a = new Array(i), o = {
            endingStart: Ee,
            endingEnd: Ee
        }, s = 0; s !== i; ++s) {
            var c = r[s].createInterpolant(null);
            a[s] = c,
            c.settings = o
        }
        this._interpolantSettings = o,
        this._interpolants = a,
        this._propertyBindings = new Array(i),
        this._cacheIndex = null,
        this._byClipCacheIndex = null,
        this._timeScaleInterpolant = null,
        this._weightInterpolant = null,
        this.loop = xe,
        this._loopCount = -1,
        this._startTime = null,
        this.time = 0,
        this.timeScale = 1,
        this._effectiveTimeScale = 1,
        this.weight = 1,
        this._effectiveWeight = 1,
        this.repetitions = 1 / 0,
        this.paused = !1,
        this.enabled = !0,
        this.clampWhenFinished = !1,
        this.zeroSlopeAtStart = !0,
        this.zeroSlopeAtEnd = !0
    }
    function Bu(t) {
        this._root = t,
        this._initMemoryManager(),
        this._accuIndex = 0,
        this.time = 0,
        this.timeScale = 1
    }
    function zu(t) {
        "string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."),
        t = arguments[1]),
        this.value = t
    }
    function Uu(t, e, n) {
        Va.call(this, t, e),
        this.meshPerAttribute = n || 1
    }
    function Gu(t, e, n, r) {
        this.ray = new Un(t,e),
        this.near = n || 0,
        this.far = r || 1 / 0,
        this.params = {
            Mesh: {},
            Line: {},
            LOD: {},
            Points: {
                threshold: 1
            },
            Sprite: {}
        },
        Object.defineProperties(this.params, {
            PointCloud: {
                get: function() {
                    return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),
                    this.Points
                }
            }
        })
    }
    function Fu(t, e) {
        return t.distance - e.distance
    }
    function Hu(t, e, n, r) {
        if (!1 !== t.visible && (t.raycast(e, n),
        !0 === r))
            for (var i = t.children, a = 0, o = i.length; a < o; a++)
                Hu(i[a], e, n, !0)
    }
    function Vu(t, e, n) {
        return this.radius = void 0 !== t ? t : 1,
        this.phi = void 0 !== e ? e : 0,
        this.theta = void 0 !== n ? n : 0,
        this
    }
    function ku(t, e, n) {
        return this.radius = void 0 !== t ? t : 1,
        this.theta = void 0 !== e ? e : 0,
        this.y = void 0 !== n ? n : 0,
        this
    }
    function ju(t, e) {
        this.min = void 0 !== t ? t : new ke(1 / 0,1 / 0),
        this.max = void 0 !== e ? e : new ke(-1 / 0,-1 / 0)
    }
    function Wu(t, e) {
        this.start = void 0 !== t ? t : new We,
        this.end = void 0 !== e ? e : new We
    }
    function qu(t) {
        Dn.call(this),
        this.material = t,
        this.render = function() {}
    }
    function Xu(t, e, n, r) {
        this.object = t,
        this.size = void 0 !== e ? e : 1;
        var i = void 0 !== n ? n : 16711680
          , a = void 0 !== r ? r : 1
          , o = 0
          , s = this.object.geometry;
        s && s.isGeometry ? o = 3 * s.faces.length : s && s.isBufferGeometry && (o = s.attributes.normal.count);
        var c = new pr
          , u = new or(2 * o * 3,3);
        c.addAttribute("position", u),
        Ka.call(this, c, new Za({
            color: i,
            linewidth: a
        })),
        this.matrixAutoUpdate = !1,
        this.update()
    }
    function Yu(t, e) {
        Dn.call(this),
        this.light = t,
        this.light.updateMatrixWorld(),
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1,
        this.color = e;
        for (var n = new pr, r = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], i = 0, a = 1; i < 32; i++,
        a++) {
            var o = i / 32 * Math.PI * 2
              , s = a / 32 * Math.PI * 2;
            r.push(Math.cos(o), Math.sin(o), 1, Math.cos(s), Math.sin(s), 1)
        }
        n.addAttribute("position", new or(r,3));
        var c = new Za({
            fog: !1
        });
        this.cone = new Ka(n,c),
        this.add(this.cone),
        this.update()
    }
    function Ju(t) {
        for (var e = function t(e) {
            var n = [];
            e && e.isBone && n.push(e);
            for (var r = 0; r < e.children.length; r++)
                n.push.apply(n, t(e.children[r]));
            return n
        }(t), n = new pr, r = [], i = [], a = new jn(0,0,1), o = new jn(0,1,0), s = 0; s < e.length; s++) {
            var c = e[s];
            c.parent && c.parent.isBone && (r.push(0, 0, 0),
            r.push(0, 0, 0),
            i.push(a.r, a.g, a.b),
            i.push(o.r, o.g, o.b))
        }
        n.addAttribute("position", new or(r,3)),
        n.addAttribute("color", new or(i,3));
        var u = new Za({
            vertexColors: S,
            depthTest: !1,
            depthWrite: !1,
            transparent: !0
        });
        Ka.call(this, n, u),
        this.root = t,
        this.bones = e,
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1
    }
    function Zu(t, e, n) {
        this.light = t,
        this.light.updateMatrixWorld(),
        this.color = n;
        var r = new is(e,4,2)
          , i = new Qn({
            wireframe: !0,
            fog: !1
        });
        fr.call(this, r, i),
        this.matrix = this.light.matrixWorld,
        this.matrixAutoUpdate = !1,
        this.update()
    }
    function Qu(t, e) {
        this.type = "RectAreaLightHelper",
        this.light = t,
        this.color = e;
        var n = new pr;
        n.addAttribute("position", new or([1, 1, 0, -1, 1, 0, -1, -1, 0, 1, -1, 0, 1, 1, 0],3)),
        n.computeBoundingSphere();
        var r = new Za({
            fog: !1
        });
        Qa.call(this, n, r);
        var i = new pr;
        i.addAttribute("position", new or([1, 1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0],3)),
        i.computeBoundingSphere(),
        this.add(new fr(i,new Qn({
            side: x,
            fog: !1
        }))),
        this.update()
    }
    function Ku(t, e, n) {
        Dn.call(this),
        this.light = t,
        this.light.updateMatrixWorld(),
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1,
        this.color = n;
        var r = new mo(e);
        r.rotateY(.5 * Math.PI),
        this.material = new Qn({
            wireframe: !0,
            fog: !1
        }),
        void 0 === this.color && (this.material.vertexColors = S);
        var i = r.getAttribute("position")
          , a = new Float32Array(3 * i.count);
        r.addAttribute("color", new Kn(a,3)),
        this.add(new fr(r,this.material)),
        this.update()
    }
    function $u(t, e) {
        this.lightProbe = t,
        this.size = e;
        var n = {
            GAMMA_OUTPUT: ""
        }
          , r = new Er({
            defines: n,
            uniforms: {
                sh: {
                    value: this.lightProbe.sh.coefficients
                },
                intensity: {
                    value: this.lightProbe.intensity
                }
            },
            vertexShader: ["varying vec3 vNormal;", "void main() {", "\tvNormal = normalize( normalMatrix * normal );", "\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
            fragmentShader: ["#define RECIPROCAL_PI 0.318309886", "vec3 inverseTransformDirection( in vec3 normal, in mat4 matrix ) {", "\t// matrix is assumed to be orthogonal", "\treturn normalize( ( vec4( normal, 0.0 ) * matrix ).xyz );", "}", "vec3 linearToOutput( in vec3 a ) {", "\t#ifdef GAMMA_OUTPUT", "\t\treturn pow( a, vec3( 1.0 / float( GAMMA_FACTOR ) ) );", "\t#else", "\t\treturn a;", "\t#endif", "}", "// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf", "vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {", "\t// normal is assumed to have unit length", "\tfloat x = normal.x, y = normal.y, z = normal.z;", "\t// band 0", "\tvec3 result = shCoefficients[ 0 ] * 0.886227;", "\t// band 1", "\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;", "\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;", "\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;", "\t// band 2", "\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;", "\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;", "\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );", "\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;", "\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );", "\treturn result;", "}", "uniform vec3 sh[ 9 ]; // sh coefficients", "uniform float intensity; // light probe intensity", "varying vec3 vNormal;", "void main() {", "\tvec3 normal = normalize( vNormal );", "\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );", "\tvec3 irradiance = shGetIrradianceAt( worldNormal, sh );", "\tvec3 outgoingLight = RECIPROCAL_PI * irradiance * intensity;", "\toutgoingLight = linearToOutput( outgoingLight );", "\tgl_FragColor = vec4( outgoingLight, 1.0 );", "}"].join("\n")
        })
          , i = new is(1,32,16);
        fr.call(this, i, r),
        this.onBeforeRender()
    }
    function th(t, e, n, r) {
        t = t || 10,
        e = e || 10,
        n = new jn(void 0 !== n ? n : 4473924),
        r = new jn(void 0 !== r ? r : 8947848);
        for (var i = e / 2, a = t / e, o = t / 2, s = [], c = [], u = 0, h = 0, l = -o; u <= e; u++,
        l += a) {
            s.push(-o, 0, l, o, 0, l),
            s.push(l, 0, -o, l, 0, o);
            var d = u === i ? n : r;
            d.toArray(c, h),
            h += 3,
            d.toArray(c, h),
            h += 3,
            d.toArray(c, h),
            h += 3,
            d.toArray(c, h),
            h += 3
        }
        var p = new pr;
        p.addAttribute("position", new or(s,3)),
        p.addAttribute("color", new or(c,3));
        var f = new Za({
            vertexColors: S
        });
        Ka.call(this, p, f)
    }
    function eh(t, e, n, r, i, a) {
        t = t || 10,
        e = e || 16,
        n = n || 8,
        r = r || 64,
        i = new jn(void 0 !== i ? i : 4473924),
        a = new jn(void 0 !== a ? a : 8947848);
        var o, s, c, u, h, l, d, p = [], f = [];
        for (u = 0; u <= e; u++)
            c = u / e * (2 * Math.PI),
            o = Math.sin(c) * t,
            s = Math.cos(c) * t,
            p.push(0, 0, 0),
            p.push(o, 0, s),
            d = 1 & u ? i : a,
            f.push(d.r, d.g, d.b),
            f.push(d.r, d.g, d.b);
        for (u = 0; u <= n; u++)
            for (d = 1 & u ? i : a,
            l = t - t / n * u,
            h = 0; h < r; h++)
                c = h / r * (2 * Math.PI),
                o = Math.sin(c) * l,
                s = Math.cos(c) * l,
                p.push(o, 0, s),
                f.push(d.r, d.g, d.b),
                c = (h + 1) / r * (2 * Math.PI),
                o = Math.sin(c) * l,
                s = Math.cos(c) * l,
                p.push(o, 0, s),
                f.push(d.r, d.g, d.b);
        var m = new pr;
        m.addAttribute("position", new or(p,3)),
        m.addAttribute("color", new or(f,3));
        var g = new Za({
            vertexColors: S
        });
        Ka.call(this, m, g)
    }
    function nh(t, e, n, r) {
        this.audio = t,
        this.range = e || 1,
        this.divisionsInnerAngle = n || 16,
        this.divisionsOuterAngle = r || 2;
        var i = new pr
          , a = this.divisionsInnerAngle + 2 * this.divisionsOuterAngle
          , o = new Float32Array(3 * (3 * a + 3));
        i.addAttribute("position", new Kn(o,3));
        var s = new Za({
            color: 65280
        })
          , c = new Za({
            color: 16776960
        });
        Qa.call(this, i, [c, s]),
        this.update()
    }
    function rh(t, e, n, r) {
        this.object = t,
        this.size = void 0 !== e ? e : 1;
        var i = void 0 !== n ? n : 16776960
          , a = void 0 !== r ? r : 1
          , o = 0
          , s = this.object.geometry;
        s && s.isGeometry ? o = s.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
        var c = new pr
          , u = new or(2 * o * 3,3);
        c.addAttribute("position", u),
        Ka.call(this, c, new Za({
            color: i,
            linewidth: a
        })),
        this.matrixAutoUpdate = !1,
        this.update()
    }
    function ih(t, e, n) {
        Dn.call(this),
        this.light = t,
        this.light.updateMatrixWorld(),
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1,
        this.color = n,
        void 0 === e && (e = 1);
        var r = new pr;
        r.addAttribute("position", new or([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0],3));
        var i = new Za({
            fog: !1
        });
        this.lightPlane = new Qa(r,i),
        this.add(this.lightPlane),
        (r = new pr).addAttribute("position", new or([0, 0, 0, 0, 0, 1],3)),
        this.targetLine = new Qa(r,i),
        this.add(this.targetLine),
        this.update()
    }
    function ah(t) {
        var e = new pr
          , n = new Za({
            color: 16777215,
            vertexColors: E
        })
          , r = []
          , i = []
          , a = {}
          , o = new jn(16755200)
          , s = new jn(16711680)
          , c = new jn(43775)
          , u = new jn(16777215)
          , h = new jn(3355443);
        function l(t, e, n) {
            d(t, n),
            d(e, n)
        }
        function d(t, e) {
            r.push(0, 0, 0),
            i.push(e.r, e.g, e.b),
            void 0 === a[t] && (a[t] = []),
            a[t].push(r.length / 3 - 1)
        }
        l("n1", "n2", o),
        l("n2", "n4", o),
        l("n4", "n3", o),
        l("n3", "n1", o),
        l("f1", "f2", o),
        l("f2", "f4", o),
        l("f4", "f3", o),
        l("f3", "f1", o),
        l("n1", "f1", o),
        l("n2", "f2", o),
        l("n3", "f3", o),
        l("n4", "f4", o),
        l("p", "n1", s),
        l("p", "n2", s),
        l("p", "n3", s),
        l("p", "n4", s),
        l("u1", "u2", c),
        l("u2", "u3", c),
        l("u3", "u1", c),
        l("c", "t", u),
        l("p", "c", h),
        l("cn1", "cn2", h),
        l("cn3", "cn4", h),
        l("cf1", "cf2", h),
        l("cf3", "cf4", h),
        e.addAttribute("position", new or(r,3)),
        e.addAttribute("color", new or(i,3)),
        Ka.call(this, e, n),
        this.camera = t,
        this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(),
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1,
        this.pointMap = a,
        this.update()
    }
    function oh(t, e) {
        this.object = t,
        void 0 === e && (e = 16776960);
        var n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7])
          , r = new Float32Array(24)
          , i = new pr;
        i.setIndex(new Kn(n,1)),
        i.addAttribute("position", new Kn(r,3)),
        Ka.call(this, i, new Za({
            color: e
        })),
        this.matrixAutoUpdate = !1,
        this.update()
    }
    function sh(t, e) {
        this.type = "Box3Helper",
        this.box = t,
        e = e || 16776960;
        var n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7])
          , r = new pr;
        r.setIndex(new Kn(n,1)),
        r.addAttribute("position", new or([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1],3)),
        Ka.call(this, r, new Za({
            color: e
        })),
        this.geometry.computeBoundingSphere()
    }
    function ch(t, e, n) {
        this.type = "PlaneHelper",
        this.plane = t,
        this.size = void 0 === e ? 1 : e;
        var r = void 0 !== n ? n : 16776960
          , i = new pr;
        i.addAttribute("position", new or([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0],3)),
        i.computeBoundingSphere(),
        Qa.call(this, i, new Za({
            color: r
        }));
        var a = new pr;
        a.addAttribute("position", new or([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1],3)),
        a.computeBoundingSphere(),
        this.add(new fr(a,new Qn({
            color: r,
            opacity: .2,
            transparent: !0,
            depthWrite: !1
        })))
    }
    function uh(t, e, n, r, i, a) {
        Dn.call(this),
        void 0 === t && (t = new We(0,0,1)),
        void 0 === e && (e = new We(0,0,0)),
        void 0 === n && (n = 1),
        void 0 === r && (r = 16776960),
        void 0 === i && (i = .2 * n),
        void 0 === a && (a = .2 * i),
        void 0 === Lu && ((Lu = new pr).addAttribute("position", new or([0, 0, 0, 0, 1, 0],3)),
        (Ru = new fs(0,.5,1,5,1)).translate(0, -.5, 0)),
        this.position.copy(e),
        this.line = new Qa(Lu,new Za({
            color: r
        })),
        this.line.matrixAutoUpdate = !1,
        this.add(this.line),
        this.cone = new fr(Ru,new Qn({
            color: r
        })),
        this.cone.matrixAutoUpdate = !1,
        this.add(this.cone),
        this.setDirection(t),
        this.setLength(n, i, a)
    }
    function hh(t) {
        var e = [0, 0, 0, t = t || 1, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t]
          , n = new pr;
        n.addAttribute("position", new or(e,3)),
        n.addAttribute("color", new or([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1],3));
        var r = new Za({
            vertexColors: S
        });
        Ka.call(this, n, r)
    }
    function lh(t, e, n, r, i, a, o) {
        return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."),
        new Yn(t,e,n,i,a,o)
    }
    Object.assign(Ou.prototype, {
        getValue: function(t, e) {
            this.bind();
            var n = this._targetGroup.nCachedObjects_
              , r = this._bindings[n];
            void 0 !== r && r.getValue(t, e)
        },
        setValue: function(t, e) {
            for (var n = this._bindings, r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r)
                n[r].setValue(t, e)
        },
        bind: function() {
            for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)
                t[e].bind()
        },
        unbind: function() {
            for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)
                t[e].unbind()
        }
    }),
    Object.assign(Iu, {
        Composite: Ou,
        create: function(t, e, n) {
            return t && t.isAnimationObjectGroup ? new Iu.Composite(t,e,n) : new Iu(t,e,n)
        },
        sanitizeNodeName: (Su = new RegExp("[\\[\\]\\.:\\/]","g"),
        function(t) {
            return t.replace(/\s/g, "_").replace(Su, "")
        }
        ),
        parseTrackName: (vu = "[^\\[\\]\\.:\\/]",
        yu = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]",
        xu = /((?:WC+[\/:])*)/.source.replace("WC", vu),
        bu = /(WCOD+)?/.source.replace("WCOD", yu),
        wu = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", vu),
        _u = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", vu),
        Mu = new RegExp("^" + xu + bu + wu + _u + "$"),
        Eu = ["material", "materials", "bones"],
        function(t) {
            var e = Mu.exec(t);
            if (!e)
                throw new Error("PropertyBinding: Cannot parse trackName: " + t);
            var n = {
                nodeName: e[2],
                objectName: e[3],
                objectIndex: e[4],
                propertyName: e[5],
                propertyIndex: e[6]
            }
              , r = n.nodeName && n.nodeName.lastIndexOf(".");
            if (void 0 !== r && -1 !== r) {
                var i = n.nodeName.substring(r + 1);
                -1 !== Eu.indexOf(i) && (n.nodeName = n.nodeName.substring(0, r),
                n.objectName = i)
            }
            if (null === n.propertyName || 0 === n.propertyName.length)
                throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
            return n
        }
        ),
        findNode: function(t, e) {
            if (!e || "" === e || "root" === e || "." === e || -1 === e || e === t.name || e === t.uuid)
                return t;
            if (t.skeleton) {
                var n = t.skeleton.getBoneByName(e);
                if (void 0 !== n)
                    return n
            }
            if (t.children) {
                var r = function(t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        if (i.name === e || i.uuid === e)
                            return i;
                        var a = r(i.children);
                        if (a)
                            return a
                    }
                    return null
                }
                  , i = r(t.children);
                if (i)
                    return i
            }
            return null
        }
    }),
    Object.assign(Iu.prototype, {
        _getValue_unavailable: function() {},
        _setValue_unavailable: function() {},
        BindingType: {
            Direct: 0,
            EntireArray: 1,
            ArrayElement: 2,
            HasFromToArray: 3
        },
        Versioning: {
            None: 0,
            NeedsUpdate: 1,
            MatrixWorldNeedsUpdate: 2
        },
        GetterByBindingType: [function(t, e) {
            t[e] = this.node[this.propertyName]
        }
        , function(t, e) {
            for (var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r)
                t[e++] = n[r]
        }
        , function(t, e) {
            t[e] = this.resolvedProperty[this.propertyIndex]
        }
        , function(t, e) {
            this.resolvedProperty.toArray(t, e)
        }
        ],
        SetterByBindingTypeAndVersioning: [[function(t, e) {
            this.targetObject[this.propertyName] = t[e]
        }
        , function(t, e) {
            this.targetObject[this.propertyName] = t[e],
            this.targetObject.needsUpdate = !0
        }
        , function(t, e) {
            this.targetObject[this.propertyName] = t[e],
            this.targetObject.matrixWorldNeedsUpdate = !0
        }
        ], [function(t, e) {
            for (var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r)
                n[r] = t[e++]
        }
        , function(t, e) {
            for (var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r)
                n[r] = t[e++];
            this.targetObject.needsUpdate = !0
        }
        , function(t, e) {
            for (var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r)
                n[r] = t[e++];
            this.targetObject.matrixWorldNeedsUpdate = !0
        }
        ], [function(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e]
        }
        , function(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e],
            this.targetObject.needsUpdate = !0
        }
        , function(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e],
            this.targetObject.matrixWorldNeedsUpdate = !0
        }
        ], [function(t, e) {
            this.resolvedProperty.fromArray(t, e)
        }
        , function(t, e) {
            this.resolvedProperty.fromArray(t, e),
            this.targetObject.needsUpdate = !0
        }
        , function(t, e) {
            this.resolvedProperty.fromArray(t, e),
            this.targetObject.matrixWorldNeedsUpdate = !0
        }
        ]],
        getValue: function(t, e) {
            this.bind(),
            this.getValue(t, e)
        },
        setValue: function(t, e) {
            this.bind(),
            this.setValue(t, e)
        },
        bind: function() {
            var t = this.node
              , e = this.parsedPath
              , n = e.objectName
              , r = e.propertyName
              , i = e.propertyIndex;
            if (t || (t = Iu.findNode(this.rootNode, e.nodeName) || this.rootNode,
            this.node = t),
            this.getValue = this._getValue_unavailable,
            this.setValue = this._setValue_unavailable,
            t) {
                if (n) {
                    var a = e.objectIndex;
                    switch (n) {
                    case "materials":
                        if (!t.material)
                            return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                        if (!t.material.materials)
                            return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                        t = t.material.materials;
                        break;
                    case "bones":
                        if (!t.skeleton)
                            return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                        t = t.skeleton.bones;
                        for (var o = 0; o < t.length; o++)
                            if (t[o].name === a) {
                                a = o;
                                break
                            }
                        break;
                    default:
                        if (void 0 === t[n])
                            return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                        t = t[n]
                    }
                    if (void 0 !== a) {
                        if (void 0 === t[a])
                            return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
                        t = t[a]
                    }
                }
                var s = t[r];
                if (void 0 !== s) {
                    var c = this.Versioning.None;
                    this.targetObject = t,
                    void 0 !== t.needsUpdate ? c = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (c = this.Versioning.MatrixWorldNeedsUpdate);
                    var u = this.BindingType.Direct;
                    if (void 0 !== i) {
                        if ("morphTargetInfluences" === r) {
                            if (!t.geometry)
                                return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                            if (t.geometry.isBufferGeometry) {
                                if (!t.geometry.morphAttributes)
                                    return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                                for (o = 0; o < this.node.geometry.morphAttributes.position.length; o++)
                                    if (t.geometry.morphAttributes.position[o].name === i) {
                                        i = o;
                                        break
                                    }
                            } else {
                                if (!t.geometry.morphTargets)
                                    return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.", this);
                                for (o = 0; o < this.node.geometry.morphTargets.length; o++)
                                    if (t.geometry.morphTargets[o].name === i) {
                                        i = o;
                                        break
                                    }
                            }
                        }
                        u = this.BindingType.ArrayElement,
                        this.resolvedProperty = s,
                        this.propertyIndex = i
                    } else
                        void 0 !== s.fromArray && void 0 !== s.toArray ? (u = this.BindingType.HasFromToArray,
                        this.resolvedProperty = s) : Array.isArray(s) ? (u = this.BindingType.EntireArray,
                        this.resolvedProperty = s) : this.propertyName = r;
                    this.getValue = this.GetterByBindingType[u],
                    this.setValue = this.SetterByBindingTypeAndVersioning[u][c]
                } else {
                    var h = e.nodeName;
                    console.error("THREE.PropertyBinding: Trying to update property for track: " + h + "." + r + " but it wasn't found.", t)
                }
            } else
                console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.")
        },
        unbind: function() {
            this.node = null,
            this.getValue = this._getValue_unbound,
            this.setValue = this._setValue_unbound
        }
    }),
    //!\ DECLARE ALIAS AFTER assign prototype !
    Object.assign(Iu.prototype, {
        _getValue_unbound: Iu.prototype.getValue,
        _setValue_unbound: Iu.prototype.setValue
    }),
    Object.assign(Du.prototype, {
        isAnimationObjectGroup: !0,
        add: function() {
            for (var t = this._objects, e = t.length, n = this.nCachedObjects_, r = this._indicesByUUID, i = this._paths, a = this._parsedPaths, o = this._bindings, s = o.length, c = void 0, u = 0, h = arguments.length; u !== h; ++u) {
                var l = arguments[u]
                  , d = l.uuid
                  , p = r[d];
                if (void 0 === p) {
                    p = e++,
                    r[d] = p,
                    t.push(l);
                    for (var f = 0, m = s; f !== m; ++f)
                        o[f].push(new Iu(l,i[f],a[f]))
                } else if (p < n) {
                    c = t[p];
                    var g = --n
                      , v = t[g];
                    r[v.uuid] = p,
                    t[p] = v,
                    r[d] = g,
                    t[g] = l;
                    for (f = 0,
                    m = s; f !== m; ++f) {
                        var y = o[f]
                          , x = y[g]
                          , b = y[p];
                        y[p] = x,
                        void 0 === b && (b = new Iu(l,i[f],a[f])),
                        y[g] = b
                    }
                } else
                    t[p] !== c && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")
            }
            this.nCachedObjects_ = n
        },
        remove: function() {
            for (var t = this._objects, e = this.nCachedObjects_, n = this._indicesByUUID, r = this._bindings, i = r.length, a = 0, o = arguments.length; a !== o; ++a) {
                var s = arguments[a]
                  , c = s.uuid
                  , u = n[c];
                if (void 0 !== u && u >= e) {
                    var h = e++
                      , l = t[h];
                    n[l.uuid] = u,
                    t[u] = l,
                    n[c] = h,
                    t[h] = s;
                    for (var d = 0, p = i; d !== p; ++d) {
                        var f = r[d]
                          , m = f[h]
                          , g = f[u];
                        f[u] = m,
                        f[h] = g
                    }
                }
            }
            this.nCachedObjects_ = e
        },
        uncache: function() {
            for (var t = this._objects, e = t.length, n = this.nCachedObjects_, r = this._indicesByUUID, i = this._bindings, a = i.length, o = 0, s = arguments.length; o !== s; ++o) {
                var c = arguments[o]
                  , u = c.uuid
                  , h = r[u];
                if (void 0 !== h)
                    if (delete r[u],
                    h < n) {
                        var l = --n
                          , d = t[l]
                          , p = t[y = --e];
                        r[d.uuid] = h,
                        t[h] = d,
                        r[p.uuid] = l,
                        t[l] = p,
                        t.pop();
                        for (var f = 0, m = a; f !== m; ++f) {
                            var g = (x = i[f])[l]
                              , v = x[y];
                            x[h] = g,
                            x[l] = v,
                            x.pop()
                        }
                    } else {
                        var y;
                        r[(p = t[y = --e]).uuid] = h,
                        t[h] = p,
                        t.pop();
                        for (f = 0,
                        m = a; f !== m; ++f) {
                            var x;
                            (x = i[f])[h] = x[y],
                            x.pop()
                        }
                    }
            }
            this.nCachedObjects_ = n
        },
        subscribe_: function(t, e) {
            var n = this._bindingsIndicesByPath
              , r = n[t]
              , i = this._bindings;
            if (void 0 !== r)
                return i[r];
            var a = this._paths
              , o = this._parsedPaths
              , s = this._objects
              , c = s.length
              , u = this.nCachedObjects_
              , h = new Array(c);
            r = i.length,
            n[t] = r,
            a.push(t),
            o.push(e),
            i.push(h);
            for (var l = u, d = s.length; l !== d; ++l) {
                var p = s[l];
                h[l] = new Iu(p,t,e)
            }
            return h
        },
        unsubscribe_: function(t) {
            var e = this._bindingsIndicesByPath
              , n = e[t];
            if (void 0 !== n) {
                var r = this._paths
                  , i = this._parsedPaths
                  , a = this._bindings
                  , o = a.length - 1
                  , s = a[o];
                e[t[o]] = n,
                a[n] = s,
                a.pop(),
                i[n] = i[o],
                i.pop(),
                r[n] = r[o],
                r.pop()
            }
        }
    }),
    Object.assign(Nu.prototype, {
        play: function() {
            return this._mixer._activateAction(this),
            this
        },
        stop: function() {
            return this._mixer._deactivateAction(this),
            this.reset()
        },
        reset: function() {
            return this.paused = !1,
            this.enabled = !0,
            this.time = 0,
            this._loopCount = -1,
            this._startTime = null,
            this.stopFading().stopWarping()
        },
        isRunning: function() {
            return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
        },
        isScheduled: function() {
            return this._mixer._isActiveAction(this)
        },
        startAt: function(t) {
            return this._startTime = t,
            this
        },
        setLoop: function(t, e) {
            return this.loop = t,
            this.repetitions = e,
            this
        },
        setEffectiveWeight: function(t) {
            return this.weight = t,
            this._effectiveWeight = this.enabled ? t : 0,
            this.stopFading()
        },
        getEffectiveWeight: function() {
            return this._effectiveWeight
        },
        fadeIn: function(t) {
            return this._scheduleFading(t, 0, 1)
        },
        fadeOut: function(t) {
            return this._scheduleFading(t, 1, 0)
        },
        crossFadeFrom: function(t, e, n) {
            if (t.fadeOut(e),
            this.fadeIn(e),
            n) {
                var r = this._clip.duration
                  , i = t._clip.duration
                  , a = i / r
                  , o = r / i;
                t.warp(1, a, e),
                this.warp(o, 1, e)
            }
            return this
        },
        crossFadeTo: function(t, e, n) {
            return t.crossFadeFrom(this, e, n)
        },
        stopFading: function() {
            var t = this._weightInterpolant;
            return null !== t && (this._weightInterpolant = null,
            this._mixer._takeBackControlInterpolant(t)),
            this
        },
        setEffectiveTimeScale: function(t) {
            return this.timeScale = t,
            this._effectiveTimeScale = this.paused ? 0 : t,
            this.stopWarping()
        },
        getEffectiveTimeScale: function() {
            return this._effectiveTimeScale
        },
        setDuration: function(t) {
            return this.timeScale = this._clip.duration / t,
            this.stopWarping()
        },
        syncWith: function(t) {
            return this.time = t.time,
            this.timeScale = t.timeScale,
            this.stopWarping()
        },
        halt: function(t) {
            return this.warp(this._effectiveTimeScale, 0, t)
        },
        warp: function(t, e, n) {
            var r = this._mixer
              , i = r.time
              , a = this._timeScaleInterpolant
              , o = this.timeScale;
            null === a && (a = r._lendControlInterpolant(),
            this._timeScaleInterpolant = a);
            var s = a.parameterPositions
              , c = a.sampleValues;
            return s[0] = i,
            s[1] = i + n,
            c[0] = t / o,
            c[1] = e / o,
            this
        },
        stopWarping: function() {
            var t = this._timeScaleInterpolant;
            return null !== t && (this._timeScaleInterpolant = null,
            this._mixer._takeBackControlInterpolant(t)),
            this
        },
        getMixer: function() {
            return this._mixer
        },
        getClip: function() {
            return this._clip
        },
        getRoot: function() {
            return this._localRoot || this._mixer._root
        },
        _update: function(t, e, n, r) {
            if (this.enabled) {
                var i = this._startTime;
                if (null !== i) {
                    var a = (t - i) * n;
                    if (a < 0 || 0 === n)
                        return;
                    this._startTime = null,
                    e = n * a
                }
                e *= this._updateTimeScale(t);
                var o = this._updateTime(e)
                  , s = this._updateWeight(t);
                if (s > 0)
                    for (var c = this._interpolants, u = this._propertyBindings, h = 0, l = c.length; h !== l; ++h)
                        c[h].evaluate(o),
                        u[h].accumulate(r, s)
            } else
                this._updateWeight(t)
        },
        _updateWeight: function(t) {
            var e = 0;
            if (this.enabled) {
                e = this.weight;
                var n = this._weightInterpolant;
                if (null !== n) {
                    var r = n.evaluate(t)[0];
                    e *= r,
                    t > n.parameterPositions[1] && (this.stopFading(),
                    0 === r && (this.enabled = !1))
                }
            }
            return this._effectiveWeight = e,
            e
        },
        _updateTimeScale: function(t) {
            var e = 0;
            if (!this.paused) {
                e = this.timeScale;
                var n = this._timeScaleInterpolant;
                if (null !== n)
                    e *= n.evaluate(t)[0],
                    t > n.parameterPositions[1] && (this.stopWarping(),
                    0 === e ? this.paused = !0 : this.timeScale = e)
            }
            return this._effectiveTimeScale = e,
            e
        },
        _updateTime: function(t) {
            var e = this.time + t
              , n = this._clip.duration
              , r = this.loop
              , i = this._loopCount
              , a = r === be;
            if (0 === t)
                return -1 === i ? e : a && 1 == (1 & i) ? n - e : e;
            if (r === ye) {
                -1 === i && (this._loopCount = 0,
                this._setEndings(!0, !0, !1));
                t: {
                    if (e >= n)
                        e = n;
                    else {
                        if (!(e < 0)) {
                            this.time = e;
                            break t
                        }
                        e = 0
                    }
                    this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                    this.time = e,
                    this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: t < 0 ? -1 : 1
                    })
                }
            } else {
                if (-1 === i && (t >= 0 ? (i = 0,
                this._setEndings(!0, 0 === this.repetitions, a)) : this._setEndings(0 === this.repetitions, !0, a)),
                e >= n || e < 0) {
                    var o = Math.floor(e / n);
                    e -= n * o,
                    i += Math.abs(o);
                    var s = this.repetitions - i;
                    if (s <= 0)
                        this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                        e = t > 0 ? n : 0,
                        this.time = e,
                        this._mixer.dispatchEvent({
                            type: "finished",
                            action: this,
                            direction: t > 0 ? 1 : -1
                        });
                    else {
                        if (1 === s) {
                            var c = t < 0;
                            this._setEndings(c, !c, a)
                        } else
                            this._setEndings(!1, !1, a);
                        this._loopCount = i,
                        this.time = e,
                        this._mixer.dispatchEvent({
                            type: "loop",
                            action: this,
                            loopDelta: o
                        })
                    }
                } else
                    this.time = e;
                if (a && 1 == (1 & i))
                    return n - e
            }
            return e
        },
        _setEndings: function(t, e, n) {
            var r = this._interpolantSettings;
            n ? (r.endingStart = Se,
            r.endingEnd = Se) : (r.endingStart = t ? this.zeroSlopeAtStart ? Se : Ee : Te,
            r.endingEnd = e ? this.zeroSlopeAtEnd ? Se : Ee : Te)
        },
        _scheduleFading: function(t, e, n) {
            var r = this._mixer
              , i = r.time
              , a = this._weightInterpolant;
            null === a && (a = r._lendControlInterpolant(),
            this._weightInterpolant = a);
            var o = a.parameterPositions
              , s = a.sampleValues;
            return o[0] = i,
            s[0] = e,
            o[1] = i + t,
            s[1] = n,
            this
        }
    }),
    Bu.prototype = Object.assign(Object.create(r.prototype), {
        constructor: Bu,
        _bindAction: function(t, e) {
            var n = t._localRoot || this._root
              , r = t._clip.tracks
              , i = r.length
              , a = t._propertyBindings
              , o = t._interpolants
              , s = n.uuid
              , c = this._bindingsByRootAndName
              , u = c[s];
            void 0 === u && (u = {},
            c[s] = u);
            for (var h = 0; h !== i; ++h) {
                var l = r[h]
                  , d = l.name
                  , p = u[d];
                if (void 0 !== p)
                    a[h] = p;
                else {
                    if (void 0 !== (p = a[h])) {
                        null === p._cacheIndex && (++p.referenceCount,
                        this._addInactiveBinding(p, s, d));
                        continue
                    }
                    var f = e && e._propertyBindings[h].binding.parsedPath;
                    ++(p = new gu(Iu.create(n, d, f),l.ValueTypeName,l.getValueSize())).referenceCount,
                    this._addInactiveBinding(p, s, d),
                    a[h] = p
                }
                o[h].resultBuffer = p.buffer
            }
        },
        _activateAction: function(t) {
            if (!this._isActiveAction(t)) {
                if (null === t._cacheIndex) {
                    var e = (t._localRoot || this._root).uuid
                      , n = t._clip.uuid
                      , r = this._actionsByClip[n];
                    this._bindAction(t, r && r.knownActions[0]),
                    this._addInactiveAction(t, n, e)
                }
                for (var i = t._propertyBindings, a = 0, o = i.length; a !== o; ++a) {
                    var s = i[a];
                    0 == s.useCount++ && (this._lendBinding(s),
                    s.saveOriginalState())
                }
                this._lendAction(t)
            }
        },
        _deactivateAction: function(t) {
            if (this._isActiveAction(t)) {
                for (var e = t._propertyBindings, n = 0, r = e.length; n !== r; ++n) {
                    var i = e[n];
                    0 == --i.useCount && (i.restoreOriginalState(),
                    this._takeBackBinding(i))
                }
                this._takeBackAction(t)
            }
        },
        _initMemoryManager: function() {
            this._actions = [],
            this._nActiveActions = 0,
            this._actionsByClip = {},
            this._bindings = [],
            this._nActiveBindings = 0,
            this._bindingsByRootAndName = {},
            this._controlInterpolants = [],
            this._nActiveControlInterpolants = 0;
            var t = this;
            this.stats = {
                actions: {
                    get total() {
                        return t._actions.length
                    },
                    get inUse() {
                        return t._nActiveActions
                    }
                },
                bindings: {
                    get total() {
                        return t._bindings.length
                    },
                    get inUse() {
                        return t._nActiveBindings
                    }
                },
                controlInterpolants: {
                    get total() {
                        return t._controlInterpolants.length
                    },
                    get inUse() {
                        return t._nActiveControlInterpolants
                    }
                }
            }
        },
        _isActiveAction: function(t) {
            var e = t._cacheIndex;
            return null !== e && e < this._nActiveActions
        },
        _addInactiveAction: function(t, e, n) {
            var r = this._actions
              , i = this._actionsByClip
              , a = i[e];
            if (void 0 === a)
                a = {
                    knownActions: [t],
                    actionByRoot: {}
                },
                t._byClipCacheIndex = 0,
                i[e] = a;
            else {
                var o = a.knownActions;
                t._byClipCacheIndex = o.length,
                o.push(t)
            }
            t._cacheIndex = r.length,
            r.push(t),
            a.actionByRoot[n] = t
        },
        _removeInactiveAction: function(t) {
            var e = this._actions
              , n = e[e.length - 1]
              , r = t._cacheIndex;
            n._cacheIndex = r,
            e[r] = n,
            e.pop(),
            t._cacheIndex = null;
            var i = t._clip.uuid
              , a = this._actionsByClip
              , o = a[i]
              , s = o.knownActions
              , c = s[s.length - 1]
              , u = t._byClipCacheIndex;
            c._byClipCacheIndex = u,
            s[u] = c,
            s.pop(),
            t._byClipCacheIndex = null,
            delete o.actionByRoot[(t._localRoot || this._root).uuid],
            0 === s.length && delete a[i],
            this._removeInactiveBindingsForAction(t)
        },
        _removeInactiveBindingsForAction: function(t) {
            for (var e = t._propertyBindings, n = 0, r = e.length; n !== r; ++n) {
                var i = e[n];
                0 == --i.referenceCount && this._removeInactiveBinding(i)
            }
        },
        _lendAction: function(t) {
            var e = this._actions
              , n = t._cacheIndex
              , r = this._nActiveActions++
              , i = e[r];
            t._cacheIndex = r,
            e[r] = t,
            i._cacheIndex = n,
            e[n] = i
        },
        _takeBackAction: function(t) {
            var e = this._actions
              , n = t._cacheIndex
              , r = --this._nActiveActions
              , i = e[r];
            t._cacheIndex = r,
            e[r] = t,
            i._cacheIndex = n,
            e[n] = i
        },
        _addInactiveBinding: function(t, e, n) {
            var r = this._bindingsByRootAndName
              , i = r[e]
              , a = this._bindings;
            void 0 === i && (i = {},
            r[e] = i),
            i[n] = t,
            t._cacheIndex = a.length,
            a.push(t)
        },
        _removeInactiveBinding: function(t) {
            var e = this._bindings
              , n = t.binding
              , r = n.rootNode.uuid
              , i = n.path
              , a = this._bindingsByRootAndName
              , o = a[r]
              , s = e[e.length - 1]
              , c = t._cacheIndex;
            s._cacheIndex = c,
            e[c] = s,
            e.pop(),
            delete o[i],
            0 === Object.keys(o).length && delete a[r]
        },
        _lendBinding: function(t) {
            var e = this._bindings
              , n = t._cacheIndex
              , r = this._nActiveBindings++
              , i = e[r];
            t._cacheIndex = r,
            e[r] = t,
            i._cacheIndex = n,
            e[n] = i
        },
        _takeBackBinding: function(t) {
            var e = this._bindings
              , n = t._cacheIndex
              , r = --this._nActiveBindings
              , i = e[r];
            t._cacheIndex = r,
            e[r] = t,
            i._cacheIndex = n,
            e[n] = i
        },
        _lendControlInterpolant: function() {
            var t = this._controlInterpolants
              , e = this._nActiveControlInterpolants++
              , n = t[e];
            return void 0 === n && ((n = new Ds(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer)).__cacheIndex = e,
            t[e] = n),
            n
        },
        _takeBackControlInterpolant: function(t) {
            var e = this._controlInterpolants
              , n = t.__cacheIndex
              , r = --this._nActiveControlInterpolants
              , i = e[r];
            t.__cacheIndex = r,
            e[r] = t,
            i.__cacheIndex = n,
            e[n] = i
        },
        _controlInterpolantsResultBuffer: new Float32Array(1),
        clipAction: function(t, e) {
            var n = e || this._root
              , r = n.uuid
              , i = "string" == typeof t ? js.findByName(n, t) : t
              , a = null !== i ? i.uuid : t
              , o = this._actionsByClip[a]
              , s = null;
            if (void 0 !== o) {
                var c = o.actionByRoot[r];
                if (void 0 !== c)
                    return c;
                s = o.knownActions[0],
                null === i && (i = s._clip)
            }
            if (null === i)
                return null;
            var u = new Nu(this,i,e);
            return this._bindAction(u, s),
            this._addInactiveAction(u, a, r),
            u
        },
        existingAction: function(t, e) {
            var n = e || this._root
              , r = n.uuid
              , i = "string" == typeof t ? js.findByName(n, t) : t
              , a = i ? i.uuid : t
              , o = this._actionsByClip[a];
            return void 0 !== o && o.actionByRoot[r] || null
        },
        stopAllAction: function() {
            var t = this._actions
              , e = this._nActiveActions
              , n = this._bindings
              , r = this._nActiveBindings;
            this._nActiveActions = 0,
            this._nActiveBindings = 0;
            for (var i = 0; i !== e; ++i)
                t[i].reset();
            for (i = 0; i !== r; ++i)
                n[i].useCount = 0;
            return this
        },
        update: function(t) {
            t *= this.timeScale;
            for (var e = this._actions, n = this._nActiveActions, r = this.time += t, i = Math.sign(t), a = this._accuIndex ^= 1, o = 0; o !== n; ++o) {
                e[o]._update(r, t, i, a)
            }
            var s = this._bindings
              , c = this._nActiveBindings;
            for (o = 0; o !== c; ++o)
                s[o].apply(a);
            return this
        },
        getRoot: function() {
            return this._root
        },
        uncacheClip: function(t) {
            var e = this._actions
              , n = t.uuid
              , r = this._actionsByClip
              , i = r[n];
            if (void 0 !== i) {
                for (var a = i.knownActions, o = 0, s = a.length; o !== s; ++o) {
                    var c = a[o];
                    this._deactivateAction(c);
                    var u = c._cacheIndex
                      , h = e[e.length - 1];
                    c._cacheIndex = null,
                    c._byClipCacheIndex = null,
                    h._cacheIndex = u,
                    e[u] = h,
                    e.pop(),
                    this._removeInactiveBindingsForAction(c)
                }
                delete r[n]
            }
        },
        uncacheRoot: function(t) {
            var e = t.uuid
              , n = this._actionsByClip;
            for (var r in n) {
                var i = n[r].actionByRoot[e];
                void 0 !== i && (this._deactivateAction(i),
                this._removeInactiveAction(i))
            }
            var a = this._bindingsByRootAndName[e];
            if (void 0 !== a)
                for (var o in a) {
                    var s = a[o];
                    s.restoreOriginalState(),
                    this._removeInactiveBinding(s)
                }
        },
        uncacheAction: function(t, e) {
            var n = this.existingAction(t, e);
            null !== n && (this._deactivateAction(n),
            this._removeInactiveAction(n))
        }
    }),
    zu.prototype.clone = function() {
        return new zu(void 0 === this.value.clone ? this.value : this.value.clone())
    }
    ,
    Uu.prototype = Object.assign(Object.create(Va.prototype), {
        constructor: Uu,
        isInstancedInterleavedBuffer: !0,
        copy: function(t) {
            return Va.prototype.copy.call(this, t),
            this.meshPerAttribute = t.meshPerAttribute,
            this
        }
    }),
    Object.assign(Gu.prototype, {
        linePrecision: 1,
        set: function(t, e) {
            this.ray.set(t, e)
        },
        setFromCamera: function(t, e) {
            e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld),
            this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize(),
            this._camera = e) : e && e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e),
            this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld),
            this._camera = e) : console.error("THREE.Raycaster: Unsupported camera type.")
        },
        intersectObject: function(t, e, n) {
            var r = n || [];
            return Hu(t, this, r, e),
            r.sort(Fu),
            r
        },
        intersectObjects: function(t, e, n) {
            var r = n || [];
            if (!1 === Array.isArray(t))
                return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),
                r;
            for (var i = 0, a = t.length; i < a; i++)
                Hu(t[i], this, r, e);
            return r.sort(Fu),
            r
        }
    }),
    Object.assign(Vu.prototype, {
        set: function(t, e, n) {
            return this.radius = t,
            this.phi = e,
            this.theta = n,
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.radius = t.radius,
            this.phi = t.phi,
            this.theta = t.theta,
            this
        },
        makeSafe: function() {
            return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)),
            this
        },
        setFromVector3: function(t) {
            return this.setFromCartesianCoords(t.x, t.y, t.z)
        },
        setFromCartesianCoords: function(t, e, n) {
            return this.radius = Math.sqrt(t * t + e * e + n * n),
            0 === this.radius ? (this.theta = 0,
            this.phi = 0) : (this.theta = Math.atan2(t, n),
            this.phi = Math.acos(Ve.clamp(e / this.radius, -1, 1))),
            this
        }
    }),
    Object.assign(ku.prototype, {
        set: function(t, e, n) {
            return this.radius = t,
            this.theta = e,
            this.y = n,
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.radius = t.radius,
            this.theta = t.theta,
            this.y = t.y,
            this
        },
        setFromVector3: function(t) {
            return this.setFromCartesianCoords(t.x, t.y, t.z)
        },
        setFromCartesianCoords: function(t, e, n) {
            return this.radius = Math.sqrt(t * t + n * n),
            this.theta = Math.atan2(t, n),
            this.y = e,
            this
        }
    }),
    Object.assign(ju.prototype, {
        set: function(t, e) {
            return this.min.copy(t),
            this.max.copy(e),
            this
        },
        setFromPoints: function(t) {
            this.makeEmpty();
            for (var e = 0, n = t.length; e < n; e++)
                this.expandByPoint(t[e]);
            return this
        },
        setFromCenterAndSize: function() {
            var t = new ke;
            return function(e, n) {
                var r = t.copy(n).multiplyScalar(.5);
                return this.min.copy(e).sub(r),
                this.max.copy(e).add(r),
                this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.min.copy(t.min),
            this.max.copy(t.max),
            this
        },
        makeEmpty: function() {
            return this.min.x = this.min.y = 1 / 0,
            this.max.x = this.max.y = -1 / 0,
            this
        },
        isEmpty: function() {
            return this.max.x < this.min.x || this.max.y < this.min.y
        },
        getCenter: function(t) {
            return void 0 === t && (console.warn("THREE.Box2: .getCenter() target is now required"),
            t = new ke),
            this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        getSize: function(t) {
            return void 0 === t && (console.warn("THREE.Box2: .getSize() target is now required"),
            t = new ke),
            this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min)
        },
        expandByPoint: function(t) {
            return this.min.min(t),
            this.max.max(t),
            this
        },
        expandByVector: function(t) {
            return this.min.sub(t),
            this.max.add(t),
            this
        },
        expandByScalar: function(t) {
            return this.min.addScalar(-t),
            this.max.addScalar(t),
            this
        },
        containsPoint: function(t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y)
        },
        containsBox: function(t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y
        },
        getParameter: function(t, e) {
            return void 0 === e && (console.warn("THREE.Box2: .getParameter() target is now required"),
            e = new ke),
            e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
        },
        intersectsBox: function(t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y)
        },
        clampPoint: function(t, e) {
            return void 0 === e && (console.warn("THREE.Box2: .clampPoint() target is now required"),
            e = new ke),
            e.copy(t).clamp(this.min, this.max)
        },
        distanceToPoint: function() {
            var t = new ke;
            return function(e) {
                return t.copy(e).clamp(this.min, this.max).sub(e).length()
            }
        }(),
        intersect: function(t) {
            return this.min.max(t.min),
            this.max.min(t.max),
            this
        },
        union: function(t) {
            return this.min.min(t.min),
            this.max.max(t.max),
            this
        },
        translate: function(t) {
            return this.min.add(t),
            this.max.add(t),
            this
        },
        equals: function(t) {
            return t.min.equals(this.min) && t.max.equals(this.max)
        }
    }),
    Object.assign(Wu.prototype, {
        set: function(t, e) {
            return this.start.copy(t),
            this.end.copy(e),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.start.copy(t.start),
            this.end.copy(t.end),
            this
        },
        getCenter: function(t) {
            return void 0 === t && (console.warn("THREE.Line3: .getCenter() target is now required"),
            t = new We),
            t.addVectors(this.start, this.end).multiplyScalar(.5)
        },
        delta: function(t) {
            return void 0 === t && (console.warn("THREE.Line3: .delta() target is now required"),
            t = new We),
            t.subVectors(this.end, this.start)
        },
        distanceSq: function() {
            return this.start.distanceToSquared(this.end)
        },
        distance: function() {
            return this.start.distanceTo(this.end)
        },
        at: function(t, e) {
            return void 0 === e && (console.warn("THREE.Line3: .at() target is now required"),
            e = new We),
            this.delta(e).multiplyScalar(t).add(this.start)
        },
        closestPointToPointParameter: (Tu = new We,
        Au = new We,
        function(t, e) {
            Tu.subVectors(t, this.start),
            Au.subVectors(this.end, this.start);
            var n = Au.dot(Au)
              , r = Au.dot(Tu) / n;
            return e && (r = Ve.clamp(r, 0, 1)),
            r
        }
        ),
        closestPointToPoint: function(t, e, n) {
            var r = this.closestPointToPointParameter(t, e);
            return void 0 === n && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"),
            n = new We),
            this.delta(n).multiplyScalar(r).add(this.start)
        },
        applyMatrix4: function(t) {
            return this.start.applyMatrix4(t),
            this.end.applyMatrix4(t),
            this
        },
        equals: function(t) {
            return t.start.equals(this.start) && t.end.equals(this.end)
        }
    }),
    qu.prototype = Object.create(Dn.prototype),
    qu.prototype.constructor = qu,
    qu.prototype.isImmediateRenderObject = !0,
    Xu.prototype = Object.create(Ka.prototype),
    Xu.prototype.constructor = Xu,
    Xu.prototype.update = function() {
        var t = new We
          , e = new We
          , n = new qe;
        return function() {
            var r = ["a", "b", "c"];
            this.object.updateMatrixWorld(!0),
            n.getNormalMatrix(this.object.matrixWorld);
            var i = this.object.matrixWorld
              , a = this.geometry.attributes.position
              , o = this.object.geometry;
            if (o && o.isGeometry)
                for (var s = o.vertices, c = o.faces, u = 0, h = 0, l = c.length; h < l; h++)
                    for (var d = c[h], p = 0, f = d.vertexNormals.length; p < f; p++) {
                        var m = s[d[r[p]]]
                          , g = d.vertexNormals[p];
                        t.copy(m).applyMatrix4(i),
                        e.copy(g).applyMatrix3(n).normalize().multiplyScalar(this.size).add(t),
                        a.setXYZ(u, t.x, t.y, t.z),
                        u += 1,
                        a.setXYZ(u, e.x, e.y, e.z),
                        u += 1
                    }
            else if (o && o.isBufferGeometry) {
                var v = o.attributes.position
                  , y = o.attributes.normal;
                for (u = 0,
                p = 0,
                f = v.count; p < f; p++)
                    t.set(v.getX(p), v.getY(p), v.getZ(p)).applyMatrix4(i),
                    e.set(y.getX(p), y.getY(p), y.getZ(p)),
                    e.applyMatrix3(n).normalize().multiplyScalar(this.size).add(t),
                    a.setXYZ(u, t.x, t.y, t.z),
                    u += 1,
                    a.setXYZ(u, e.x, e.y, e.z),
                    u += 1
            }
            a.needsUpdate = !0
        }
    }(),
    Yu.prototype = Object.create(Dn.prototype),
    Yu.prototype.constructor = Yu,
    Yu.prototype.dispose = function() {
        this.cone.geometry.dispose(),
        this.cone.material.dispose()
    }
    ,
    Yu.prototype.update = function() {
        var t = new We;
        return function() {
            this.light.updateMatrixWorld();
            var e = this.light.distance ? this.light.distance : 1e3
              , n = e * Math.tan(this.light.angle);
            this.cone.scale.set(n, n, e),
            t.setFromMatrixPosition(this.light.target.matrixWorld),
            this.cone.lookAt(t),
            void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color)
        }
    }(),
    Ju.prototype = Object.create(Ka.prototype),
    Ju.prototype.constructor = Ju,
    Ju.prototype.updateMatrixWorld = function() {
        var t = new We
          , e = new hn
          , n = new hn;
        return function(r) {
            var i = this.bones
              , a = this.geometry
              , o = a.getAttribute("position");
            n.getInverse(this.root.matrixWorld);
            for (var s = 0, c = 0; s < i.length; s++) {
                var u = i[s];
                u.parent && u.parent.isBone && (e.multiplyMatrices(n, u.matrixWorld),
                t.setFromMatrixPosition(e),
                o.setXYZ(c, t.x, t.y, t.z),
                e.multiplyMatrices(n, u.parent.matrixWorld),
                t.setFromMatrixPosition(e),
                o.setXYZ(c + 1, t.x, t.y, t.z),
                c += 2)
            }
            a.getAttribute("position").needsUpdate = !0,
            Dn.prototype.updateMatrixWorld.call(this, r)
        }
    }(),
    Zu.prototype = Object.create(fr.prototype),
    Zu.prototype.constructor = Zu,
    Zu.prototype.dispose = function() {
        this.geometry.dispose(),
        this.material.dispose()
    }
    ,
    Zu.prototype.update = function() {
        void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color)
    }
    ,
    Qu.prototype = Object.create(Qa.prototype),
    Qu.prototype.constructor = Qu,
    Qu.prototype.update = function() {
        if (this.scale.set(.5 * this.light.width, .5 * this.light.height, 1),
        void 0 !== this.color)
            this.material.color.set(this.color),
            this.children[0].material.color.set(this.color);
        else {
            this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
            var t = this.material.color
              , e = Math.max(t.r, t.g, t.b);
            e > 1 && t.multiplyScalar(1 / e),
            this.children[0].material.color.copy(this.material.color)
        }
    }
    ,
    Qu.prototype.dispose = function() {
        this.geometry.dispose(),
        this.material.dispose(),
        this.children[0].geometry.dispose(),
        this.children[0].material.dispose()
    }
    ,
    Ku.prototype = Object.create(Dn.prototype),
    Ku.prototype.constructor = Ku,
    Ku.prototype.dispose = function() {
        this.children[0].geometry.dispose(),
        this.children[0].material.dispose()
    }
    ,
    Ku.prototype.update = function() {
        var t = new We
          , e = new jn
          , n = new jn;
        return function() {
            var r = this.children[0];
            if (void 0 !== this.color)
                this.material.color.set(this.color);
            else {
                var i = r.geometry.getAttribute("color");
                e.copy(this.light.color),
                n.copy(this.light.groundColor);
                for (var a = 0, o = i.count; a < o; a++) {
                    var s = a < o / 2 ? e : n;
                    i.setXYZ(a, s.r, s.g, s.b)
                }
                i.needsUpdate = !0
            }
            r.lookAt(t.setFromMatrixPosition(this.light.matrixWorld).negate())
        }
    }(),
    $u.prototype = Object.create(fr.prototype),
    $u.prototype.constructor = $u,
    $u.prototype.dispose = function() {
        this.geometry.dispose(),
        this.material.dispose()
    }
    ,
    $u.prototype.onBeforeRender = function() {
        this.position.copy(this.lightProbe.position),
        this.scale.set(1, 1, 1).multiplyScalar(this.size),
        this.material.uniforms.intensity.value = this.lightProbe.intensity
    }
    ,
    th.prototype = Object.assign(Object.create(Ka.prototype), {
        constructor: th,
        copy: function(t) {
            return Ka.prototype.copy.call(this, t),
            this.geometry.copy(t.geometry),
            this.material.copy(t.material),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        }
    }),
    eh.prototype = Object.create(Ka.prototype),
    eh.prototype.constructor = eh,
    nh.prototype = Object.create(Qa.prototype),
    nh.prototype.constructor = nh,
    nh.prototype.update = function() {
        var t, e, n = this.audio, r = this.range, i = this.divisionsInnerAngle, a = this.divisionsOuterAngle, o = Ve.degToRad(n.panner.coneInnerAngle), s = Ve.degToRad(n.panner.coneOuterAngle), c = o / 2, u = s / 2, h = 0, l = 0, d = this.geometry, p = d.attributes.position;
        function f(n, i, a, o) {
            var s = (i - n) / a;
            for (p.setXYZ(h, 0, 0, 0),
            l++,
            t = n; t < i; t += s)
                e = h + l,
                p.setXYZ(e, Math.sin(t) * r, 0, Math.cos(t) * r),
                p.setXYZ(e + 1, Math.sin(Math.min(t + s, i)) * r, 0, Math.cos(Math.min(t + s, i)) * r),
                p.setXYZ(e + 2, 0, 0, 0),
                l += 3;
            d.addGroup(h, l, o),
            h += l,
            l = 0
        }
        d.clearGroups(),
        f(-u, -c, a, 0),
        f(-c, c, i, 1),
        f(c, u, a, 0),
        p.needsUpdate = !0,
        o === s && (this.material[0].visible = !1)
    }
    ,
    nh.prototype.dispose = function() {
        this.geometry.dispose(),
        this.material[0].dispose(),
        this.material[1].dispose()
    }
    ,
    rh.prototype = Object.create(Ka.prototype),
    rh.prototype.constructor = rh,
    rh.prototype.update = function() {
        var t = new We
          , e = new We
          , n = new qe;
        return function() {
            this.object.updateMatrixWorld(!0),
            n.getNormalMatrix(this.object.matrixWorld);
            for (var r = this.object.matrixWorld, i = this.geometry.attributes.position, a = this.object.geometry, o = a.vertices, s = a.faces, c = 0, u = 0, h = s.length; u < h; u++) {
                var l = s[u]
                  , d = l.normal;
                t.copy(o[l.a]).add(o[l.b]).add(o[l.c]).divideScalar(3).applyMatrix4(r),
                e.copy(d).applyMatrix3(n).normalize().multiplyScalar(this.size).add(t),
                i.setXYZ(c, t.x, t.y, t.z),
                c += 1,
                i.setXYZ(c, e.x, e.y, e.z),
                c += 1
            }
            i.needsUpdate = !0
        }
    }(),
    ih.prototype = Object.create(Dn.prototype),
    ih.prototype.constructor = ih,
    ih.prototype.dispose = function() {
        this.lightPlane.geometry.dispose(),
        this.lightPlane.material.dispose(),
        this.targetLine.geometry.dispose(),
        this.targetLine.material.dispose()
    }
    ,
    ih.prototype.update = function() {
        var t = new We
          , e = new We
          , n = new We;
        return function() {
            t.setFromMatrixPosition(this.light.matrixWorld),
            e.setFromMatrixPosition(this.light.target.matrixWorld),
            n.subVectors(e, t),
            this.lightPlane.lookAt(e),
            void 0 !== this.color ? (this.lightPlane.material.color.set(this.color),
            this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color),
            this.targetLine.material.color.copy(this.light.color)),
            this.targetLine.lookAt(e),
            this.targetLine.scale.z = n.length()
        }
    }(),
    ah.prototype = Object.create(Ka.prototype),
    ah.prototype.constructor = ah,
    ah.prototype.update = function() {
        var t, e, n = new We, r = new Sr;
        function i(i, a, o, s) {
            n.set(a, o, s).unproject(r);
            var c = e[i];
            if (void 0 !== c)
                for (var u = t.getAttribute("position"), h = 0, l = c.length; h < l; h++)
                    u.setXYZ(c[h], n.x, n.y, n.z)
        }
        return function() {
            t = this.geometry,
            e = this.pointMap;
            r.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),
            i("c", 0, 0, -1),
            i("t", 0, 0, 1),
            i("n1", -1, -1, -1),
            i("n2", 1, -1, -1),
            i("n3", -1, 1, -1),
            i("n4", 1, 1, -1),
            i("f1", -1, -1, 1),
            i("f2", 1, -1, 1),
            i("f3", -1, 1, 1),
            i("f4", 1, 1, 1),
            i("u1", .7, 1.1, -1),
            i("u2", -.7, 1.1, -1),
            i("u3", 0, 2, -1),
            i("cf1", -1, 0, 1),
            i("cf2", 1, 0, 1),
            i("cf3", 0, -1, 1),
            i("cf4", 0, 1, 1),
            i("cn1", -1, 0, -1),
            i("cn2", 1, 0, -1),
            i("cn3", 0, -1, -1),
            i("cn4", 0, 1, -1),
            t.getAttribute("position").needsUpdate = !0
        }
    }(),
    oh.prototype = Object.create(Ka.prototype),
    oh.prototype.constructor = oh,
    oh.prototype.update = function() {
        var t = new Bn;
        return function(e) {
            if (void 0 !== e && console.warn("THREE.BoxHelper: .update() has no longer arguments."),
            void 0 !== this.object && t.setFromObject(this.object),
            !t.isEmpty()) {
                var n = t.min
                  , r = t.max
                  , i = this.geometry.attributes.position
                  , a = i.array;
                a[0] = r.x,
                a[1] = r.y,
                a[2] = r.z,
                a[3] = n.x,
                a[4] = r.y,
                a[5] = r.z,
                a[6] = n.x,
                a[7] = n.y,
                a[8] = r.z,
                a[9] = r.x,
                a[10] = n.y,
                a[11] = r.z,
                a[12] = r.x,
                a[13] = r.y,
                a[14] = n.z,
                a[15] = n.x,
                a[16] = r.y,
                a[17] = n.z,
                a[18] = n.x,
                a[19] = n.y,
                a[20] = n.z,
                a[21] = r.x,
                a[22] = n.y,
                a[23] = n.z,
                i.needsUpdate = !0,
                this.geometry.computeBoundingSphere()
            }
        }
    }(),
    oh.prototype.setFromObject = function(t) {
        return this.object = t,
        this.update(),
        this
    }
    ,
    oh.prototype.copy = function(t) {
        return Ka.prototype.copy.call(this, t),
        this.object = t.object,
        this
    }
    ,
    oh.prototype.clone = function() {
        return (new this.constructor).copy(this)
    }
    ,
    sh.prototype = Object.create(Ka.prototype),
    sh.prototype.constructor = sh,
    sh.prototype.updateMatrixWorld = function(t) {
        var e = this.box;
        e.isEmpty() || (e.getCenter(this.position),
        e.getSize(this.scale),
        this.scale.multiplyScalar(.5),
        Dn.prototype.updateMatrixWorld.call(this, t))
    }
    ,
    ch.prototype = Object.create(Qa.prototype),
    ch.prototype.constructor = ch,
    ch.prototype.updateMatrixWorld = function(t) {
        var e = -this.plane.constant;
        Math.abs(e) < 1e-8 && (e = 1e-8),
        this.scale.set(.5 * this.size, .5 * this.size, e),
        this.children[0].material.side = e < 0 ? x : y,
        this.lookAt(this.plane.normal),
        Dn.prototype.updateMatrixWorld.call(this, t)
    }
    ,
    uh.prototype = Object.create(Dn.prototype),
    uh.prototype.constructor = uh,
    uh.prototype.setDirection = (Cu = new We,
    function(t) {
        t.y > .99999 ? this.quaternion.set(0, 0, 0, 1) : t.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (Cu.set(t.z, 0, -t.x).normalize(),
        Pu = Math.acos(t.y),
        this.quaternion.setFromAxisAngle(Cu, Pu))
    }
    ),
    uh.prototype.setLength = function(t, e, n) {
        void 0 === e && (e = .2 * t),
        void 0 === n && (n = .2 * e),
        this.line.scale.set(1, Math.max(0, t - e), 1),
        this.line.updateMatrix(),
        this.cone.scale.set(n, e, n),
        this.cone.position.y = t,
        this.cone.updateMatrix()
    }
    ,
    uh.prototype.setColor = function(t) {
        this.line.material.color.set(t),
        this.cone.material.color.set(t)
    }
    ,
    uh.prototype.copy = function(t) {
        return Dn.prototype.copy.call(this, t, !1),
        this.line.copy(t.line),
        this.cone.copy(t.cone),
        this
    }
    ,
    uh.prototype.clone = function() {
        return (new this.constructor).copy(this)
    }
    ,
    hh.prototype = Object.create(Ka.prototype),
    hh.prototype.constructor = hh;
    var dh = 0
      , ph = 1;
    function fh(t) {
        return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."),
        t
    }
    function mh(t) {
        return void 0 === t && (t = []),
        console.warn("THREE.MultiMaterial has been removed. Use an Array instead."),
        t.isMultiMaterial = !0,
        t.materials = t,
        t.clone = function() {
            return t.slice()
        }
        ,
        t
    }
    function gh(t, e) {
        return console.warn("THREE.PointCloud has been renamed to THREE.Points."),
        new eo(t,e)
    }
    function vh(t) {
        return console.warn("THREE.Particle has been renamed to THREE.Sprite."),
        new Wa(t)
    }
    function yh(t, e) {
        return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),
        new eo(t,e)
    }
    function xh(t) {
        return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),
        new to(t)
    }
    function bh(t) {
        return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),
        new to(t)
    }
    function wh(t) {
        return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),
        new to(t)
    }
    function _h(t, e, n) {
        return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."),
        new We(t,e,n)
    }
    function Mh(t, e) {
        return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."),
        new Kn(t,e).setDynamic(!0)
    }
    function Eh(t, e) {
        return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."),
        new $n(t,e)
    }
    function Sh(t, e) {
        return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."),
        new tr(t,e)
    }
    function Th(t, e) {
        return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."),
        new er(t,e)
    }
    function Ah(t, e) {
        return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."),
        new nr(t,e)
    }
    function Lh(t, e) {
        return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."),
        new rr(t,e)
    }
    function Rh(t, e) {
        return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."),
        new ir(t,e)
    }
    function Ph(t, e) {
        return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."),
        new ar(t,e)
    }
    function Ch(t, e) {
        return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."),
        new or(t,e)
    }
    function Oh(t, e) {
        return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."),
        new sr(t,e)
    }
    function Ih(t) {
        console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),
        lc.call(this, t),
        this.type = "catmullrom",
        this.closed = !0
    }
    function Dh(t) {
        console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),
        lc.call(this, t),
        this.type = "catmullrom"
    }
    function Nh(t) {
        console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),
        lc.call(this, t),
        this.type = "catmullrom"
    }
    function Bh(t) {
        return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."),
        new hh(t)
    }
    function zh(t, e) {
        return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."),
        new oh(t,e)
    }
    function Uh(t, e) {
        return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."),
        new Ka(new ds(t.geometry),new Za({
            color: void 0 !== e ? e : 16777215
        }))
    }
    function Gh(t, e) {
        return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."),
        new Ka(new oo(t.geometry),new Za({
            color: void 0 !== e ? e : 16777215
        }))
    }
    function Fh(t) {
        return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."),
        new Zs(t)
    }
    function Hh(t) {
        return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."),
        new $s(t)
    }
    rc.create = function(t, e) {
        return console.log("THREE.Curve.create() has been deprecated"),
        t.prototype = Object.create(rc.prototype),
        t.prototype.constructor = t,
        t.prototype.getPoint = e,
        t
    }
    ,
    Object.assign(Mc.prototype, {
        createPointsGeometry: function(t) {
            console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
            var e = this.getPoints(t);
            return this.createGeometry(e)
        },
        createSpacedPointsGeometry: function(t) {
            console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
            var e = this.getSpacedPoints(t);
            return this.createGeometry(e)
        },
        createGeometry: function(t) {
            console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
            for (var e = new gr, n = 0, r = t.length; n < r; n++) {
                var i = t[n];
                e.vertices.push(new We(i.x,i.y,i.z || 0))
            }
            return e
        }
    }),
    Object.assign(Ec.prototype, {
        fromPoints: function(t) {
            console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),
            this.setFromPoints(t)
        }
    }),
    Ih.prototype = Object.create(lc.prototype),
    Dh.prototype = Object.create(lc.prototype),
    Nh.prototype = Object.create(lc.prototype),
    Object.assign(Nh.prototype, {
        initFromArray: function() {
            console.error("THREE.Spline: .initFromArray() has been removed.")
        },
        getControlPointsArray: function() {
            console.error("THREE.Spline: .getControlPointsArray() has been removed.")
        },
        reparametrizeByArcLength: function() {
            console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")
        }
    }),
    th.prototype.setColors = function() {
        console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
    }
    ,
    Ju.prototype.update = function() {
        console.error("THREE.SkeletonHelper: update() no longer needs to be called.")
    }
    ,
    Object.assign(ru.prototype, {
        extractUrlBase: function(t) {
            return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),
            Uc.extractUrlBase(t)
        }
    }),
    Object.assign(kc.prototype, {
        setTexturePath: function(t) {
            return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."),
            this.setResourcePath(t)
        }
    }),
    Object.assign(ju.prototype, {
        center: function(t) {
            return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),
            this.getCenter(t)
        },
        empty: function() {
            return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),
            this.isEmpty()
        },
        isIntersectionBox: function(t) {
            return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),
            this.intersectsBox(t)
        },
        size: function(t) {
            return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),
            this.getSize(t)
        }
    }),
    Object.assign(Bn.prototype, {
        center: function(t) {
            return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),
            this.getCenter(t)
        },
        empty: function() {
            return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),
            this.isEmpty()
        },
        isIntersectionBox: function(t) {
            return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),
            this.intersectsBox(t)
        },
        isIntersectionSphere: function(t) {
            return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),
            this.intersectsSphere(t)
        },
        size: function(t) {
            return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),
            this.getSize(t)
        }
    }),
    Wu.prototype.center = function(t) {
        return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),
        this.getCenter(t)
    }
    ,
    Object.assign(Ve, {
        random16: function() {
            return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),
            Math.random()
        },
        nearestPowerOfTwo: function(t) {
            return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),
            Ve.floorPowerOfTwo(t)
        },
        nextPowerOfTwo: function(t) {
            return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),
            Ve.ceilPowerOfTwo(t)
        }
    }),
    Object.assign(qe.prototype, {
        flattenToArrayOffset: function(t, e) {
            return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),
            this.toArray(t, e)
        },
        multiplyVector3: function(t) {
            return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),
            t.applyMatrix3(this)
        },
        multiplyVector3Array: function() {
            console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
        },
        applyToBuffer: function(t) {
            return console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."),
            this.applyToBufferAttribute(t)
        },
        applyToVector3Array: function() {
            console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
        }
    }),
    Object.assign(hn.prototype, {
        extractPosition: function(t) {
            return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),
            this.copyPosition(t)
        },
        flattenToArrayOffset: function(t, e) {
            return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),
            this.toArray(t, e)
        },
        getPosition: function() {
            var t;
            return function() {
                return void 0 === t && (t = new We),
                console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),
                t.setFromMatrixColumn(this, 3)
            }
        }(),
        setRotationFromQuaternion: function(t) {
            return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),
            this.makeRotationFromQuaternion(t)
        },
        multiplyToArray: function() {
            console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
        },
        multiplyVector3: function(t) {
            return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),
            t.applyMatrix4(this)
        },
        multiplyVector4: function(t) {
            return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),
            t.applyMatrix4(this)
        },
        multiplyVector3Array: function() {
            console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
        },
        rotateAxis: function(t) {
            console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),
            t.transformDirection(this)
        },
        crossVector: function(t) {
            return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),
            t.applyMatrix4(this)
        },
        translate: function() {
            console.error("THREE.Matrix4: .translate() has been removed.")
        },
        rotateX: function() {
            console.error("THREE.Matrix4: .rotateX() has been removed.")
        },
        rotateY: function() {
            console.error("THREE.Matrix4: .rotateY() has been removed.")
        },
        rotateZ: function() {
            console.error("THREE.Matrix4: .rotateZ() has been removed.")
        },
        rotateByAxis: function() {
            console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
        },
        applyToBuffer: function(t) {
            return console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."),
            this.applyToBufferAttribute(t)
        },
        applyToVector3Array: function() {
            console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
        },
        makeFrustum: function(t, e, n, r, i, a) {
            return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),
            this.makePerspective(t, e, r, n, i, a)
        }
    }),
    Dr.prototype.isIntersectionLine = function(t) {
        return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),
        this.intersectsLine(t)
    }
    ,
    je.prototype.multiplyVector3 = function(t) {
        return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),
        t.applyQuaternion(this)
    }
    ,
    Object.assign(Un.prototype, {
        isIntersectionBox: function(t) {
            return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),
            this.intersectsBox(t)
        },
        isIntersectionPlane: function(t) {
            return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),
            this.intersectsPlane(t)
        },
        isIntersectionSphere: function(t) {
            return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),
            this.intersectsSphere(t)
        }
    }),
    Object.assign(Gn.prototype, {
        area: function() {
            return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),
            this.getArea()
        },
        barycoordFromPoint: function(t, e) {
            return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),
            this.getBarycoord(t, e)
        },
        midpoint: function(t) {
            return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),
            this.getMidpoint(t)
        },
        normal: function(t) {
            return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),
            this.getNormal(t)
        },
        plane: function(t) {
            return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),
            this.getPlane(t)
        }
    }),
    Object.assign(Gn, {
        barycoordFromPoint: function(t, e, n, r, i) {
            return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),
            Gn.getBarycoord(t, e, n, r, i)
        },
        normal: function(t, e, n, r) {
            return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),
            Gn.getNormal(t, e, n, r)
        }
    }),
    Object.assign(Sc.prototype, {
        extractAllPoints: function(t) {
            return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),
            this.extractPoints(t)
        },
        extrude: function(t) {
            return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),
            new Qo(this,t)
        },
        makeGeometry: function(t) {
            return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),
            new us(this,t)
        }
    }),
    Object.assign(ke.prototype, {
        fromAttribute: function(t, e, n) {
            return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),
            this.fromBufferAttribute(t, e, n)
        },
        distanceToManhattan: function(t) {
            return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),
            this.manhattanDistanceTo(t)
        },
        lengthManhattan: function() {
            return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),
            this.manhattanLength()
        }
    }),
    Object.assign(We.prototype, {
        setEulerFromRotationMatrix: function() {
            console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
        },
        setEulerFromQuaternion: function() {
            console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
        },
        getPositionFromMatrix: function(t) {
            return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),
            this.setFromMatrixPosition(t)
        },
        getScaleFromMatrix: function(t) {
            return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),
            this.setFromMatrixScale(t)
        },
        getColumnFromMatrix: function(t, e) {
            return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),
            this.setFromMatrixColumn(e, t)
        },
        applyProjection: function(t) {
            return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),
            this.applyMatrix4(t)
        },
        fromAttribute: function(t, e, n) {
            return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),
            this.fromBufferAttribute(t, e, n)
        },
        distanceToManhattan: function(t) {
            return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),
            this.manhattanDistanceTo(t)
        },
        lengthManhattan: function() {
            return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),
            this.manhattanLength()
        }
    }),
    Object.assign(sn.prototype, {
        fromAttribute: function(t, e, n) {
            return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),
            this.fromBufferAttribute(t, e, n)
        },
        lengthManhattan: function() {
            return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),
            this.manhattanLength()
        }
    }),
    Object.assign(gr.prototype, {
        computeTangents: function() {
            console.error("THREE.Geometry: .computeTangents() has been removed.")
        },
        computeLineDistances: function() {
            console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")
        }
    }),
    Object.assign(Dn.prototype, {
        getChildByName: function(t) {
            return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),
            this.getObjectByName(t)
        },
        renderDepth: function() {
            console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
        },
        translate: function(t, e) {
            return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),
            this.translateOnAxis(e, t)
        },
        getWorldRotation: function() {
            console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")
        }
    }),
    Object.defineProperties(Dn.prototype, {
        eulerOrder: {
            get: function() {
                return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
                this.rotation.order
            },
            set: function(t) {
                console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
                this.rotation.order = t
            }
        },
        useQuaternion: {
            get: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            },
            set: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            }
        }
    }),
    Object.defineProperties(qa.prototype, {
        objects: {
            get: function() {
                return console.warn("THREE.LOD: .objects has been renamed to .levels."),
                this.levels
            }
        }
    }),
    Object.defineProperty(Ya.prototype, "useVertexTexture", {
        get: function() {
            console.warn("THREE.Skeleton: useVertexTexture has been removed.")
        },
        set: function() {
            console.warn("THREE.Skeleton: useVertexTexture has been removed.")
        }
    }),
    Xa.prototype.initBones = function() {
        console.error("THREE.SkinnedMesh: initBones() has been removed.")
    }
    ,
    Object.defineProperty(rc.prototype, "__arcLengthDivisions", {
        get: function() {
            return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),
            this.arcLengthDivisions
        },
        set: function(t) {
            console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),
            this.arcLengthDivisions = t
        }
    }),
    Tr.prototype.setLens = function(t, e) {
        console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),
        void 0 !== e && (this.filmGauge = e),
        this.setFocalLength(t)
    }
    ,
    Object.defineProperties(Tc.prototype, {
        onlyShadow: {
            set: function() {
                console.warn("THREE.Light: .onlyShadow has been removed.")
            }
        },
        shadowCameraFov: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),
                this.shadow.camera.fov = t
            }
        },
        shadowCameraLeft: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),
                this.shadow.camera.left = t
            }
        },
        shadowCameraRight: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),
                this.shadow.camera.right = t
            }
        },
        shadowCameraTop: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),
                this.shadow.camera.top = t
            }
        },
        shadowCameraBottom: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),
                this.shadow.camera.bottom = t
            }
        },
        shadowCameraNear: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),
                this.shadow.camera.near = t
            }
        },
        shadowCameraFar: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),
                this.shadow.camera.far = t
            }
        },
        shadowCameraVisible: {
            set: function() {
                console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
            }
        },
        shadowBias: {
            set: function(t) {
                console.warn("THREE.Light: .shadowBias is now .shadow.bias."),
                this.shadow.bias = t
            }
        },
        shadowDarkness: {
            set: function() {
                console.warn("THREE.Light: .shadowDarkness has been removed.")
            }
        },
        shadowMapWidth: {
            set: function(t) {
                console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),
                this.shadow.mapSize.width = t
            }
        },
        shadowMapHeight: {
            set: function(t) {
                console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),
                this.shadow.mapSize.height = t
            }
        }
    }),
    Object.defineProperties(Kn.prototype, {
        length: {
            get: function() {
                return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),
                this.array.length
            }
        },
        copyIndicesArray: function() {
            console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")
        }
    }),
    Object.assign(pr.prototype, {
        addIndex: function(t) {
            console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),
            this.setIndex(t)
        },
        addDrawCall: function(t, e, n) {
            void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),
            console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),
            this.addGroup(t, e)
        },
        clearDrawCalls: function() {
            console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),
            this.clearGroups()
        },
        computeTangents: function() {
            console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
        },
        computeOffsets: function() {
            console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
        }
    }),
    Object.defineProperties(pr.prototype, {
        drawcalls: {
            get: function() {
                return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),
                this.groups
            }
        },
        offsets: {
            get: function() {
                return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),
                this.groups
            }
        }
    }),
    Object.assign(Ko.prototype, {
        getArrays: function() {
            console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")
        },
        addShapeList: function() {
            console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")
        },
        addShape: function() {
            console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")
        }
    }),
    Object.defineProperties(zu.prototype, {
        dynamic: {
            set: function() {
                console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")
            }
        },
        onUpdate: {
            value: function() {
                return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),
                this
            }
        }
    }),
    Object.defineProperties(Zn.prototype, {
        wrapAround: {
            get: function() {
                console.warn("THREE.Material: .wrapAround has been removed.")
            },
            set: function() {
                console.warn("THREE.Material: .wrapAround has been removed.")
            }
        },
        overdraw: {
            get: function() {
                console.warn("THREE.Material: .overdraw has been removed.")
            },
            set: function() {
                console.warn("THREE.Material: .overdraw has been removed.")
            }
        },
        wrapRGB: {
            get: function() {
                return console.warn("THREE.Material: .wrapRGB has been removed."),
                new jn
            }
        },
        shading: {
            get: function() {
                console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.")
            },
            set: function(t) {
                console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."),
                this.flatShading = t === w
            }
        }
    }),
    Object.defineProperties(Es.prototype, {
        metal: {
            get: function() {
                return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),
                !1
            },
            set: function() {
                console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
            }
        }
    }),
    Object.defineProperties(Er.prototype, {
        derivatives: {
            get: function() {
                return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),
                this.extensions.derivatives
            },
            set: function(t) {
                console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),
                this.extensions.derivatives = t
            }
        }
    }),
    Object.assign(Ga.prototype, {
        clearTarget: function(t, e, n, r) {
            console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),
            this.setRenderTarget(t),
            this.clear(e, n, r)
        },
        animate: function(t) {
            console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),
            this.setAnimationLoop(t)
        },
        getCurrentRenderTarget: function() {
            return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),
            this.getRenderTarget()
        },
        getMaxAnisotropy: function() {
            return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),
            this.capabilities.getMaxAnisotropy()
        },
        getPrecision: function() {
            return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),
            this.capabilities.precision
        },
        resetGLState: function() {
            return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),
            this.state.reset()
        },
        supportsFloatTextures: function() {
            return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),
            this.extensions.get("OES_texture_float")
        },
        supportsHalfFloatTextures: function() {
            return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),
            this.extensions.get("OES_texture_half_float")
        },
        supportsStandardDerivatives: function() {
            return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),
            this.extensions.get("OES_standard_derivatives")
        },
        supportsCompressedTextureS3TC: function() {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),
            this.extensions.get("WEBGL_compressed_texture_s3tc")
        },
        supportsCompressedTexturePVRTC: function() {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),
            this.extensions.get("WEBGL_compressed_texture_pvrtc")
        },
        supportsBlendMinMax: function() {
            return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),
            this.extensions.get("EXT_blend_minmax")
        },
        supportsVertexTextures: function() {
            return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),
            this.capabilities.vertexTextures
        },
        supportsInstancedArrays: function() {
            return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),
            this.extensions.get("ANGLE_instanced_arrays")
        },
        enableScissorTest: function(t) {
            console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),
            this.setScissorTest(t)
        },
        initMaterial: function() {
            console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
        },
        addPrePlugin: function() {
            console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
        },
        addPostPlugin: function() {
            console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
        },
        updateShadowMap: function() {
            console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
        },
        setFaceCulling: function() {
            console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")
        },
        allocTextureUnit: function() {
            console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")
        },
        setTexture: function() {
            console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")
        },
        setTexture2D: function() {
            console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")
        },
        setTextureCube: function() {
            console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")
        }
    }),
    Object.defineProperties(Ga.prototype, {
        shadowMapEnabled: {
            get: function() {
                return this.shadowMap.enabled
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),
                this.shadowMap.enabled = t
            }
        },
        shadowMapType: {
            get: function() {
                return this.shadowMap.type
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),
                this.shadowMap.type = t
            }
        },
        shadowMapCullFace: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
            }
        }
    }),
    Object.defineProperties(_a.prototype, {
        cullFace: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
            }
        },
        renderReverseSided: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
            }
        },
        renderSingleSided: {
            get: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
            }
        }
    }),
    Object.defineProperties(Or.prototype, {
        activeCubeFace: {
            set: function() {
                console.warn("THREE.WebGLRenderTargetCube: .activeCubeFace has been removed. It is now the second parameter of WebGLRenderer.setRenderTarget().")
            }
        },
        activeMipMapLevel: {
            set: function() {
                console.warn("THREE.WebGLRenderTargetCube: .activeMipMapLevel has been removed. It is now the third parameter of WebGLRenderer.setRenderTarget().")
            }
        }
    }),
    Object.defineProperties(cn.prototype, {
        wrapS: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
                this.texture.wrapS
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
                this.texture.wrapS = t
            }
        },
        wrapT: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
                this.texture.wrapT
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
                this.texture.wrapT = t
            }
        },
        magFilter: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),
                this.texture.magFilter
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),
                this.texture.magFilter = t
            }
        },
        minFilter: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),
                this.texture.minFilter
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),
                this.texture.minFilter = t
            }
        },
        anisotropy: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
                this.texture.anisotropy
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
                this.texture.anisotropy = t
            }
        },
        offset: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
                this.texture.offset
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
                this.texture.offset = t
            }
        },
        repeat: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
                this.texture.repeat
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
                this.texture.repeat = t
            }
        },
        format: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
                this.texture.format
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
                this.texture.format = t
            }
        },
        type: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
                this.texture.type
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
                this.texture.type = t
            }
        },
        generateMipmaps: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
                this.texture.generateMipmaps
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
                this.texture.generateMipmaps = t
            }
        }
    }),
    Object.defineProperties(za.prototype, {
        standing: {
            set: function() {
                console.warn("THREE.WebVRManager: .standing has been removed.")
            }
        },
        userHeight: {
            set: function() {
                console.warn("THREE.WebVRManager: .userHeight has been removed.")
            }
        }
    }),
    pu.prototype.load = function(t) {
        console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
        var e = this;
        return (new au).load(t, function(t) {
            e.setBuffer(t)
        }),
        this
    }
    ,
    mu.prototype.getData = function() {
        return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),
        this.getFrequencyData()
    }
    ,
    Cr.prototype.updateCubeMap = function(t, e) {
        return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),
        this.update(t, e)
    }
    ;
    var Vh = {
        merge: function(t, e, n) {
            var r;
            console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead."),
            e.isMesh && (e.matrixAutoUpdate && e.updateMatrix(),
            r = e.matrix,
            e = e.geometry),
            t.merge(e, r, n)
        },
        center: function(t) {
            return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."),
            t.center()
        }
    };
    function kh() {
        console.error("THREE.CanvasRenderer has been removed")
    }
    function jh() {
        console.error("THREE.JSONLoader has been removed.")
    }
    rn.crossOrigin = void 0,
    rn.loadTexture = function(t, e, n, r) {
        console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
        var i = new nc;
        i.setCrossOrigin(this.crossOrigin);
        var a = i.load(t, n, void 0, r);
        return e && (a.mapping = e),
        a
    }
    ,
    rn.loadTextureCube = function(t, e, n, r) {
        console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
        var i = new ec;
        i.setCrossOrigin(this.crossOrigin);
        var a = i.load(t, n, void 0, r);
        return e && (a.mapping = e),
        a
    }
    ,
    rn.loadCompressedTexture = function() {
        console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
    }
    ,
    rn.loadCompressedTextureCube = function() {
        console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
    }
    ;
    var Wh = {
        createMultiMaterialObject: function() {
            console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")
        },
        detach: function() {
            console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")
        },
        attach: function() {
            console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")
        }
    };
    function qh() {
        console.error("THREE.LensFlare has been moved to /examples/js/objects/Lensflare.js")
    }
}
, , function(t, e, n) {
    window.THREE = n(0);
    const r = n(3)
      , i = n(4);
    let a, o, s, c, u, h, l, d, p, f, m;
    const g = []
      , v = document.createElement("canvas")
      , y = v.getContext("2d");
    let x, b, w = {
        time: {
            type: "f",
            value: 0
        },
        size: {
            type: "f",
            value: 10
        }
    };
    const _ = [20, 140]
      , M = [400, 2600]
      , E = [5200, 14e3]
      , S = ()=>{
        const t = u / h;
        (s = new THREE.PerspectiveCamera(45,t,.1,1e4)).position.set(0, 0, 900),
        s.lookAt(0, 0, 0),
        a.add(s)
    }
      , T = ()=>{
        (l = document.getElementById("video")).autoplay = !0;
        navigator.mediaDevices.getUserMedia({
            video: !0,
            audio: !1
        }).then(t=>{
            l.srcObject = t,
            l.addEventListener("loadeddata", ()=>{
                p = l.videoWidth,
                f = l.videoHeight,
                R()
            }
            )
        }
        ).catch(t=>{
            console.log(t),
            I()
        }
        )
    }
      , A = ()=>{
        const t = new THREE.AudioListener;
        x = new THREE.Audio(t),
        (new THREE.AudioLoader).load("/assets/brooklyn.mp3", t=>{
            document.body.classList.remove("loading"),
            x.setBuffer(t),
            x.setLoop(!0),
            x.setVolume(.5),
            x.play()
        }
        ),
        b = new THREE.AudioAnalyser(x,2048),
        document.body.addEventListener("click", function() {
            x && (x.isPlaying ? x.pause() : x.play())
        })
    }
      , L = t=>{
        let e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
        return {
            r: parseInt(e[1], 16) / 255,
            g: parseInt(e[2], 16) / 255,
            b: parseInt(e[3], 16) / 255
        }
    }
      , R = ()=>{
        const t = P(l)
          , e = new THREE.BufferGeometry
          , n = new THREE.ShaderMaterial({
            uniforms: w,
            vertexShader: r,
            fragmentShader: i,
            transparent: !0,
            depthWrite: !1,
            blending: THREE.AdditiveBlending
        })
          , o = []
          , s = [];
        let c = ["#ff4b78", "#16e36d", "#162cf8", "#2016e3"];
        for (let e = 0, n = t.height; e < n; e += 3)
            for (let n = 0, r = t.width; n < r; n += 3) {
                let i = 4 * (n + e * r);
                g.push(i);
                let a = (t.data[i] + t.data[i + 1] + t.data[i + 2]) / 3
                  , u = a < 300 ? a : 1e4;
                o.push(n - t.width / 2, -e + t.height / 2, u);
                const h = L(c[Math.floor(Math.random() * c.length)]);
                s.push(h.r, h.g, h.b),
                0
            }
        const u = new Float32Array(o);
        e.addAttribute("position", new THREE.BufferAttribute(u,3));
        const h = new Float32Array(s);
        e.addAttribute("color", new THREE.BufferAttribute(h,3)),
        d = new THREE.Points(e,n),
        a.add(d)
    }
      , P = (t,e)=>{
        if (e && m)
            return m;
        const n = t.videoWidth
          , r = t.videoHeight;
        return v.width = n,
        v.height = r,
        y.translate(n, 0),
        y.scale(-1, 1),
        y.drawImage(t, 0, 0),
        m = y.getImageData(0, 0, n, r)
    }
      , C = (t,e)=>{
        const n = Math.round(e[0] / 24e3 * t.length)
          , r = Math.round(e[1] / 24e3 * t.length);
        let i = 0
          , a = 0;
        for (let e = n; e <= r; e++)
            i += t[e],
            a += 1;
        return i / a / 255
    }
      , O = t=>{
        c.getDelta();
        c.elapsedTime;
        let e, n, r;
        if (w.time.value += .5,
        b) {
            const t = b.getFrequencyData();
            e = C(t, _),
            n = C(t, M),
            r = C(t, E)
        }
        if (d) {
            const i = parseInt(t) % 2 == 0
              , a = P(l, i);
            let o = 0;
            for (let t = 0, i = d.geometry.attributes.position.array.length; t < i; t += 3) {
                let i = g[o]
                  , s = (a.data[i] + a.data[i + 1] + a.data[i + 2]) / 3
                  , c = 300;
                d.geometry.attributes.position.array[t + 2] = s < c ? s < c / 3 ? s * e * 5 : s < c / 2 ? s * n * 5 : s * r * 5 : 1e4,
                o++
            }
            w.size.value = (e + n + r) / 3 * 35 + 5,
            d.geometry.attributes.position.needsUpdate = !0
        }
        o.render(a, s),
        requestAnimationFrame(O)
    }
      , I = ()=>{
        document.getElementById("message").classList.remove("hidden")
    }
      , D = ()=>{
        u = window.innerWidth,
        h = window.innerHeight,
        o.setPixelRatio(window.devicePixelRatio),
        o.setSize(u, h),
        s.aspect = u / h,
        s.updateProjectionMatrix()
    }
    ;
    window.addEventListener("resize", D),
    document.body.classList.add("loading"),
    (a = new THREE.Scene).background = new THREE.Color('black'),
    o = new THREE.WebGLRenderer,
    document.getElementById("content").appendChild(o.domElement),
    c = new THREE.Clock,
    S(),
    D(),
    navigator.mediaDevices = navigator.mediaDevices || (navigator.mozGetUserMedia || navigator.webkitGetUserMedia ? {
        getUserMedia: t=>new Promise(function(e, n) {
            (navigator.mozGetUserMedia || navigator.webkitGetUserMedia).call(navigator, t, e, n)
        }
        )
    } : null),
    navigator.mediaDevices ? (A(),
    T()) : I(),
    O()
}
, function(t, e) {
    t.exports = "//#define GLSLIFY 1\n\nattribute vec3 color;\n\nuniform float time;\nuniform float size;\n\nvarying vec4 vMvPosition;\nvarying vec3 vColor;\n\nfloat map(float value, float beforeMin, float beforeMax, float afterMin, float afterMax) {\n    return afterMin + (afterMax - afterMin) * ((value - beforeMin) / (beforeMax - beforeMin));\n}\n\nvoid main() {\n    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n    vMvPosition = mvPosition;\n    vColor = color;\n\n    //    gl_PointSize = size + ((sin(time * 0.05) + 1.0) / 2.0) * 10.0;\n    gl_PointSize = size;\n    gl_Position = projectionMatrix * mvPosition;\n}\n"
}
, function(t, e) {
    t.exports = "//#define GLSLIFY 1\n\nuniform float time;\n\nvarying vec4 vMvPosition;\nvarying vec3 vColor;\n\nvoid main() {\n    vec2 uv = gl_PointCoord.xy * 2.0 - 1.0;\n\n    float orb = 0.1 / length(uv * 1.0);\n    orb = smoothstep(0.0, 1.0, orb);\n\n    vec3 color = vec3(orb) * vColor;\n\n    gl_FragColor = vec4(color, 1.0);\n}\n"
}
]);
